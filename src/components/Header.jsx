import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const NAV_HEIGHT = 80

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Header() {
    const location = useLocation()

    const handleNavClick = useCallback(
        (e, href) => {
            // Only handle anchor links on the landing page
            if (!href.startsWith('#')) return

            e.preventDefault()
            const id = href.slice(1)
            const el = document.getElementById(id)
            if (!el) {
                // If not on landing page, navigate there first
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
                        Sausan<span className="text-accent">.</span>dev
                    </Link>

                    {/* Center nav */}
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

                    {/* CTA */}
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

                    {/* Mobile menu */}
                    <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
                        <span className="block w-6 h-0.5 bg-slate" />
                        <span className="block w-4 h-0.5 bg-slate" />
                        <span className="block w-6 h-0.5 bg-slate" />
                    </button>
                </div>
            </div>
        </motion.header>
    )
}
