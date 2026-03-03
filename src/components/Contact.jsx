import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

/* ────────────────────────────────────────────────────
   Contact Channel Data
   ──────────────────────────────────────────────────── */
const channels = [
    {
        name: 'Shoot me an email',
        subtitle: 'sausan@apps.ipb.ac.id',
        href: 'mailto:sausan@apps.ipb.ac.id',
        gradient: 'from-blue-500/10 to-indigo-500/10',
        hoverShadow: '0 25px 60px -12px rgba(99,102,241,0.25)',
        accentColor: '#6366f1',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        name: 'Drop a message',
        subtitle: 'Fast response guaranteed',
        href: 'https://wa.me/6281234567890',
        gradient: 'from-emerald-500/10 to-green-500/10',
        hoverShadow: '0 25px 60px -12px rgba(16,185,129,0.25)',
        accentColor: '#10b981',
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        name: 'Follow my journey',
        subtitle: '@sausan.dev',
        href: 'https://instagram.com/sausan.dev',
        gradient: 'from-pink-500/10 to-rose-500/10',
        hoverShadow: '0 25px 60px -12px rgba(244,63,94,0.25)',
        accentColor: '#f43f5e',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
]

/* ────────────────────────────────────────────────────
   Animation Variants
   ──────────────────────────────────────────────────── */
const sectionVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
}

/* ────────────────────────────────────────────────────
   Arrow Slide Component
   The arrow exits top-right, re-enters bottom-left
   ──────────────────────────────────────────────────── */
function ArrowSlide({ hovered, color }) {
    return (
        <div className="relative w-12 h-12 rounded-xl overflow-hidden" style={{ backgroundColor: `${color}15` }}>
            {/* Arrow leaving (slide out top-right) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={hovered ? { x: 20, y: -20, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
                <svg className="w-5 h-5" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </motion.div>

            {/* Arrow entering (slide in from bottom-left) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={hovered ? { x: 0, y: 0, opacity: 1 } : { x: -20, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20, delay: hovered ? 0.08 : 0 }}
            >
                <svg className="w-5 h-5" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </motion.div>
        </div>
    )
}

/* ────────────────────────────────────────────────────
   Contact Card Component
   ──────────────────────────────────────────────────── */
function ContactCard({ channel }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.a
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="group relative flex flex-col justify-between rounded-[32px] border border-gray-200/80 bg-white p-8 lg:p-10 min-h-[280px] overflow-hidden cursor-pointer"
            whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: channel.hoverShadow,
                borderColor: 'transparent',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* Gradient wash — visible on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />

            {/* Top row: Icon + Arrow */}
            <div className="relative z-10 flex items-start justify-between">
                {/* Channel icon */}
                <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: channel.accentColor }}
                    whileHover={{ rotate: [0, -6, 6, 0] }}
                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                >
                    {channel.icon}
                </motion.div>

                {/* Arrow with slide effect */}
                <ArrowSlide hovered={hovered} color={channel.accentColor} />
            </div>

            {/* Bottom: Text content */}
            <div className="relative z-10 mt-auto pt-8">
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-slate mb-1 group-hover:text-slate transition-colors">
                    {channel.name}
                </h3>
                <p className="text-sm text-slate/40 group-hover:text-slate/50 transition-colors">
                    {channel.subtitle}
                </p>
            </div>

            {/* Subtle decorative ring */}
            <div
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ borderColor: `${channel.accentColor}20` }}
            />
        </motion.a>
    )
}

/* ────────────────────────────────────────────────────
   Main Contact Section
   ──────────────────────────────────────────────────── */
export default function Contact() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section id="contact" className="blueprint-bg relative py-24 lg:py-32 overflow-hidden">
            {/* Large decorative circles */}
            <div className="absolute top-10 right-10 w-80 h-80 rounded-full border border-gray-200/30" />
            <div className="absolute top-14 right-14 w-64 h-64 rounded-full border border-gray-200/20" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/[0.03]" />

            <motion.div
                ref={sectionRef}
                className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10"
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* ── Heading ──────────────────────────────── */}
                <motion.div className="text-center mb-16 lg:mb-20" variants={headingVariants}>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                        <span className="w-8 h-px bg-accent" />
                        Get In Touch
                        <span className="w-8 h-px bg-accent" />
                    </span>

                    <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]">
                        <span className="text-slate">Let&apos;s build </span>
                        <span className="bg-gradient-to-r from-accent via-orange-400 to-amber-500 bg-clip-text text-transparent">
                            something
                        </span>
                        <br />
                        <span className="text-slate">together.</span>
                    </h2>

                    <p className="mt-6 max-w-md mx-auto text-base text-slate/50 leading-relaxed">
                        Have a project in mind or just want to say hi? Pick your preferred channel and let&apos;s connect.
                    </p>
                </motion.div>

                {/* ── 3 Channel Cards ─────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                    {channels.map((ch, i) => (
                        <ContactCard key={ch.name} channel={ch} index={i} />
                    ))}
                </div>

                {/* ── Socials Row ──────────────────────────── */}
                <motion.div
                    className="mt-16 flex items-center justify-center gap-4"
                    variants={headingVariants}
                >
                    {[
                        { label: 'Gh', href: 'https://github.com/sausan', full: 'GitHub' },
                        { label: 'Li', href: 'https://linkedin.com/in/sausan', full: 'LinkedIn' },
                        { label: 'X', href: 'https://x.com/sausan', full: 'X' },
                    ].map((s) => (
                        <motion.a
                            key={s.full}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-slate/40 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-colors"
                            whileHover={{ scale: 1.15, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            title={s.full}
                        >
                            <span className="text-xs font-bold">{s.label}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* ── Watermark ────────────────────────────── */}
                <motion.div className="mt-20 overflow-hidden" variants={headingVariants}>
                    <p className="watermark-text font-heading font-bold text-[4rem] md:text-[6rem] lg:text-[8rem] text-center leading-none tracking-tighter whitespace-nowrap select-none">
                        [ SOFTWARE ENGINEER ]
                    </p>
                </motion.div>

                {/* ── Footer ───────────────────────────────── */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="font-heading font-bold text-lg text-slate">
                            Sausan<span className="text-accent">.</span>dev
                        </p>
                        <p className="text-xs text-slate/40 mt-1">
                            Building the digital future, one line at a time.
                        </p>
                    </div>
                    <nav className="flex items-center gap-6">
                        {['Home', 'About', 'Projects', 'Contact'].map((l) => (
                            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-slate/40 hover:text-accent transition-colors">
                                {l}
                            </a>
                        ))}
                    </nav>
                    <p className="text-xs text-slate/30">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
