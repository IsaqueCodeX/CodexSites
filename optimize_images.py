from PIL import Image
import os

files = [
    ("uploaded_media_0_1770150863458.png", "hero-gestora.webp"),
    ("uploaded_media_1_1770150863458.png", "hero-developer.webp"),
    ("uploaded_media_2_1770150863458.png", "hero-influenciadora.webp")
]

source_dir = r"C:\Users\USER_PC\.gemini\antigravity\brain\457dbccf-429d-4287-883f-2e5038295ed9"
target_dir = r"c:\Users\USER_PC\Downloads\criandosites\criandosites\public"

print("Starting conversion...")

for src, dest in files:
    try:
        src_path = os.path.join(source_dir, src)
        dest_path = os.path.join(target_dir, dest)
        
        print(f"Converting {src} to {dest}...")
        
        with Image.open(src_path) as img:
            # Resize if too huge (e.g. max width 1200px)
            if img.width > 1200:
                ratio = 1200 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
                print(f"Resized to 1200x{new_height}")
            
            img.save(dest_path, "WEBP", quality=85)
            print(f"Saved {dest_path}")
            
    except Exception as e:
        print(f"Error processing {src}: {e}")

print("Done.")
