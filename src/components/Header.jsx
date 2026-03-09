import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_HEIGHT = 80;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ── Hamburger line variants ────────────────────── */
const topLine = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 7 },
};
const midLine = {
  closed: { opacity: 1, x: 0 },
  open: { opacity: 0, x: 20 },
};
const botLine = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -7 },
};

/* ── Mobile overlay variants ────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -8 },
};

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = useCallback(
    (e, href) => {
      if (!href.startsWith("#")) return;

      e.preventDefault();
      setIsOpen(false); // Auto-close mobile menu

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) {
        if (location.pathname !== "/") {
          window.location.href = `/${href}`;
          return;
        }
        return;
      }
      // Use Lenis for momentum scroll, fallback to native
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -NAV_HEIGHT, duration: 1.2 });
      } else {
        const top =
          el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [location.pathname],
  );

  return (
    <>
      {/* 1. THE MAIN NAVBAR CONTAINER (Glassmorphism & Scroll State) */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 2. LOGO & TYPOGRAPHY CONTRAST */}
            <Link
              to="/"
              className="font-heading font-bold text-lg tracking-tight text-slate-950 dark:text-white"
            >
              WeaveFlow<span className="text-accent">.</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                ),
              )}
            </nav>

            {/* 5. THEME TOGGLE & CTA PLACEMENT (Mobile-First) */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Desktop CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden md:inline-flex items-center gap-2 bg-accent text-white hover:bg-orange-600 dark:bg-accent dark:text-white dark:hover:bg-orange-500 text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
              >
                Let&apos;s Talk
                <svg
                  className="w-4 h-4 text-white dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* 4. ICONS: HAMBURGER, CLOSE (X) */}
              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-900 dark:hover:bg-slate-800 p-2 rounded-full transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <motion.span
                  className="absolute block w-5 h-[2px] bg-black dark:bg-accent rounded-full"
                  variants={topLine}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                />
                <motion.span
                  className="absolute block w-5 h-[2px] bg-black dark:bg-accent rounded-full"
                  variants={midLine}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute block w-5 h-[2px] bg-black dark:bg-accent rounded-full"
                  variants={botLine}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 3. THE MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col items-center justify-center md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-semibold font-heading text-slate-900 dark:text-white hover:text-accent transition-colors"
                    variants={linkVariants}
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div variants={linkVariants} key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-semibold font-heading text-slate-900 dark:text-white hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>

            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-10 inline-flex items-center gap-3 bg-accent text-white hover:bg-orange-600 dark:bg-accent dark:text-white dark:hover:bg-orange-500 font-semibold text-lg px-10 py-4 rounded-full transition-colors shadow-xl shadow-accent/25"
              variants={linkVariants}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let&apos;s Talk</span>
              <svg
                className="w-5 h-5 flex-shrink-0 text-white dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            {/* Brand watermark */}
            <p className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 font-semibold pointer-events-none w-full text-center">
              WeaveFlow Studio
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
