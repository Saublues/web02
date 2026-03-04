import { useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_HEIGHT = 80

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

/* ── Hamburger line variants ────────────────────── */
const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
}
const midLine = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: 20 },
}
const botLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
}

/* ── Mobile overlay variants ────────────────────── */
const overlayVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06, delayChildren: 0.1 },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: { duration: 0.25, ease: 'easeIn' },
    },
}

const linkVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, x: -8 },
}

export default function Header() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const handleNavClick = useCallback(
        (e, href) => {
            if (!href.startsWith('#')) return

            e.preventDefault()
            setIsOpen(false) // Auto-close mobile menu

            const id = href.slice(1)
            const el = document.getElementById(id)
            if (!el) {
                if (location.pathname !== '/') {
                    window.location.href = `/${href}`
                    return
                }
                return
            }
            // Use Lenis for momentum scroll, fallback to native
            if (window.__lenis) {
                window.__lenis.scrollTo(el, { offset: -NAV_HEIGHT, duration: 1.2 })
            } else {
                const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
                window.scrollTo({ top, behavior: 'smooth' })
            }
        },
        [location.pathname]
    )

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="font-heading font-bold text-lg tracking-tight text-slate"
                        >
                            WeaveFlow<span className="text-accent">.</span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) =>
                                link.href.startsWith('#') ? (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-sm font-medium text-slate/70 hover:text-accent transition-colors relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ) : (
                                    <Link
                                        key={link.label}
                                        to={link.href}
                                        className="text-sm font-medium text-slate/70 hover:text-accent transition-colors relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                )
                            )}
                        </nav>

                        {/* Desktop CTA */}
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                        >
                            Let&apos;s Talk
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* ── Animated Hamburger ─────────────────── */}
                        <button
                            className="md:hidden relative w-10 h-10 flex items-center justify-center"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                className="absolute block w-6 h-[2px] bg-slate rounded-full"
                                variants={topLine}
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            />
                            <motion.span
                                className="absolute block w-4 h-[2px] bg-slate rounded-full"
                                variants={midLine}
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="absolute block w-6 h-[2px] bg-slate rounded-full"
                                variants={botLine}
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* ── Mobile Overlay ──────────────────────────── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-slate/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="font-heading font-bold text-4xl text-white/90 hover:text-accent transition-colors"
                                    variants={linkVariants}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="mt-10 inline-flex items-center gap-3 bg-accent text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl shadow-accent/25"
                            variants={linkVariants}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let&apos;s Talk
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>

                        {/* Brand watermark */}
                        <p className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-white/20 font-semibold">
                            WeaveFlow Studio
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
