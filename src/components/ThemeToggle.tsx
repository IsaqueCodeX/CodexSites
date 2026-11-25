import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      aria-pressed={isDark}
      title="Alternar tema"
      className="inline-flex h-10 items-center rounded-full bg-[#DFE7F5] px-1.5 transition-all duration-300 hover:brightness-95 active:scale-95"
    >
      <span className="inline-flex h-8 items-center gap-3 rounded-full bg-white px-3">
        {/* Lua crescente + estrelas */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-5 w-5 transition-all duration-300 ${isDark ? "opacity-100" : "opacity-40"}`}
          fill={isDark ? "#1E3A8A" : "#778AA4"}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          <path d="M6 6l.6 1.4L8 8l-1.4.6L6 10l-.6-1.4L4 8l1.4-.6z" />
          <path d="M9 3l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z" />
        </svg>
        {/* Sol geométrico */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-5 w-5 transition-all duration-300 ${isDark ? "opacity-40" : "opacity-100"}`}
          fill={!isDark ? "#00BFFF" : "#778AA4"}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3l1.2 2.8h-2.4zM12 21l-1.2-2.8h2.4zM3 12l2.8-1.2v2.4zM21 12l-2.8 1.2v-2.4zM5.6 5.6l2.4 1.2-1.2 2.4zM18.4 5.6l-1.2 2.4-2.4-1.2zM5.6 18.4l1.2-2.4 2.4 1.2zM18.4 18.4l-2.4-1.2 1.2-2.4z" />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
