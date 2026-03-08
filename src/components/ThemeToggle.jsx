import { useEffect, useState, memo } from "react";

const ThemeToggle = memo(function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydrate from DOM immediately to prevent mismatch
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);

    // DOM-first approach: update class immediately
    if (newDarkState) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#0f172a");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#ffffff");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-lg transition-colors duration-150 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        // Sun icon for dark mode
        <svg
          className="w-5 h-5 text-slate-900 dark:text-amber-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M1 12h6m6 0h6m-1.78 7.78l-4.24-4.24m-5.08 0l-4.24 4.24" />
        </svg>
      ) : (
        // Moon icon for light mode
        <svg
          className="w-5 h-5 text-slate-700 dark:text-slate-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
});

export default ThemeToggle;
