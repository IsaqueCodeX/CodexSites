"""Convert heavy PNG/JPG images to WebP without touching the originals.

Default is a dry run: nothing is written. Use --apply to create the .webp files
and --update-imports to point source imports to the new files.

Examples:
    python optimize_images.py                                  # dry run on src/assets
    python optimize_images.py --apply --update-imports         # convert + rewrite imports
    python optimize_images.py --target public                  # dry run on public/
"""

import argparse
import io
import os
import re
import sys
import unicodedata
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required: pip install Pillow")

ROOT = Path(__file__).resolve().parent
SRC_DIR = ROOT / "src"
TARGETS = {
    "src-assets": ROOT / "src" / "assets",
    "public": ROOT / "public",
}

# Files referenced by index.html <head> or by absolute URLs; never processed.
PROTECTED_NAMES = {
    "logo.webp",
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon-48x48.png",
    "apple-touch-icon.png",
    "robots.txt",
    "sitemap.xml",
}
PROTECTED_PREFIXES = ("favicon", "apple-touch-icon", "android-chrome", "og-", "logo")

CONVERTIBLE_EXT = {".png", ".jpg", ".jpeg"}
SOURCE_EXT = {".ts", ".tsx", ".js", ".jsx", ".css"}
IMPORT_RE = re.compile(r"""(["'])([^"'\n]+?\.(?:png|jpe?g))\1""", re.IGNORECASE)


def norm(path: Path) -> str:
    return os.path.normcase(unicodedata.normalize("NFC", str(path.resolve())))


def is_protected(path: Path, target: str) -> bool:
    name = path.name.lower()
    if name in PROTECTED_NAMES:
        return True
    return target == "public" and name.startswith(PROTECTED_PREFIXES)


def encode_webp(path: Path, max_width: int, quality: int) -> tuple[bytes, tuple[int, int]]:
    with Image.open(path) as img:
        icc = img.info.get("icc_profile")
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGBA" if "transparency" in img.info or img.mode in ("P", "LA") else "RGB")
        if img.width > max_width:
            height = round(img.height * max_width / img.width)
            img = img.resize((max_width, height), Image.Resampling.LANCZOS)
        buffer = io.BytesIO()
        options = {"quality": quality, "method": 6}
        if icc:
            options["icc_profile"] = icc
        img.save(buffer, "WEBP", **options)
        return buffer.getvalue(), img.size


def collect_images(base: Path, target: str, min_kb: int) -> list[Path]:
    images = []
    for path in sorted(base.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in CONVERTIBLE_EXT:
            continue
        if is_protected(path, target):
            print(f"  [protected] {path.relative_to(ROOT)}")
            continue
        if path.stat().st_size < min_kb * 1024:
            continue
        images.append(path)
    return images


def resolve_import(spec: str, source_file: Path) -> Path | None:
    if spec.startswith("@/"):
        return SRC_DIR / spec[2:]
    if spec.startswith("."):
        return source_file.parent / spec
    return None


def plan_import_updates(converted: dict[str, Path]) -> dict[Path, list[tuple[str, str]]]:
    updates: dict[Path, list[tuple[str, str]]] = {}
    for file in SRC_DIR.rglob("*"):
        if file.suffix not in SOURCE_EXT or not file.is_file():
            continue
        text = file.read_text(encoding="utf-8")
        for match in IMPORT_RE.finditer(text):
            spec = match.group(2)
            resolved = resolve_import(spec, file)
            if resolved is not None and norm(resolved) in converted:
                new_spec = spec[: spec.rfind(".")] + ".webp"
                updates.setdefault(file, []).append((spec, new_spec))
    return updates


def apply_import_updates(updates: dict[Path, list[tuple[str, str]]]) -> None:
    for file, pairs in updates.items():
        with open(file, encoding="utf-8", newline="") as handle:
            text = handle.read()
        for old, new in pairs:
            text = text.replace(f'"{old}"', f'"{new}"').replace(f"'{old}'", f"'{new}'")
        with open(file, "w", encoding="utf-8", newline="") as handle:
            handle.write(text)


def main() -> None:
    sys.stdout.reconfigure(errors="replace")
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--target", choices=TARGETS, default="src-assets")
    parser.add_argument("--apply", action="store_true", help="write the .webp files (default: dry run)")
    parser.add_argument("--update-imports", action="store_true", help="rewrite imports in src/ to the .webp files")
    parser.add_argument("--max-width", type=int, default=1280, help="downscale wider images (never upscales)")
    parser.add_argument("--quality", type=int, default=82)
    parser.add_argument("--min-kb", type=int, default=100, help="skip files smaller than this")
    parser.add_argument("--force", action="store_true", help="overwrite existing .webp files")
    args = parser.parse_args()

    if args.update_imports and args.target != "src-assets":
        sys.exit("--update-imports only applies to --target src-assets (public/ uses absolute URLs).")

    base = TARGETS[args.target]
    mode = "APPLY" if args.apply else "DRY RUN (nothing will be written)"
    print(f"Target: {base.relative_to(ROOT)} | {mode} | max-width={args.max_width} quality={args.quality}\n")

    converted: dict[str, Path] = {}
    total_before = total_after = 0

    for path in collect_images(base, args.target, args.min_kb):
        dest = path.with_suffix(".webp")
        rel = path.relative_to(ROOT)
        if dest.exists() and not args.force:
            print(f"  [skip: .webp exists] {rel}")
            continue
        data, size = encode_webp(path, args.max_width, args.quality)
        before = path.stat().st_size
        if len(data) >= before:
            print(f"  [skip: no gain] {rel}")
            continue
        total_before += before
        total_after += len(data)
        saving = 100 - len(data) * 100 / before
        print(f"  {rel}  {before / 1024:,.0f} KB -> {len(data) / 1024:,.0f} KB (-{saving:.0f}%) {size[0]}x{size[1]}")
        if args.apply:
            dest.write_bytes(data)
        converted[norm(path)] = dest

    if not converted:
        print("\nNothing to convert.")
        return

    print(f"\nTotal: {total_before / 1048576:.1f} MB -> {total_after / 1048576:.1f} MB "
          f"({len(converted)} files). Originals are kept.")

    if args.target == "src-assets":
        updates = plan_import_updates(converted)
        print(f"\nImports to update ({sum(len(p) for p in updates.values())}):")
        for file, pairs in updates.items():
            for old, new in pairs:
                print(f"  {file.relative_to(ROOT)}: {old} -> {new}")
        if args.update_imports and args.apply:
            apply_import_updates(updates)
            print("\nImports updated. Run `npm run build` to validate.")
        elif args.update_imports:
            print("\n(--update-imports needs --apply to write changes.)")


if __name__ == "__main__":
    main()
