import { motion } from 'framer-motion'
import heroImg from '../assets/images/hero-portrait.png'
import AnimatedCounter from './AnimatedCounter'

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
    { target: 5, suffix: '+', label: 'Years Experience' },
    { target: 50, suffix: '+', label: 'Projects Delivered' },
    { target: 30, suffix: '+', label: 'Happy Clients' },
]

export default function Hero() {
    return (
        <section
            id="home"
            className="blueprint-bg relative min-h-screen flex items-center pt-28 lg:pt-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                    {/* ── Left: cols 1-7 ── */}
                    <motion.div
                        className="lg:col-span-7 relative z-10"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Label */}
                        <motion.div variants={fadeUp} className="mb-6">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                Software Engineering · IPB University
                            </span>
                        </motion.div>

                        {/* Headings */}
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] tracking-tighter text-slate"
                        >
                            Architecting
                        </motion.h1>
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] tracking-tighter text-stroke mt-1"
                        >
                            The Future
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-8 max-w-md text-base lg:text-lg text-slate/60 font-body leading-relaxed"
                        >
                            Software Engineering student at IPB University, specializing
                            in Full-Stack Web Development&nbsp;&mdash; building performant,
                            scalable digital products from concept to deployment.
                        </motion.p>

                        {/* CTA */}
                        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
                            <motion.a
                                href="#projects"
                                className="group inline-flex items-center gap-3 bg-slate text-white font-semibold px-8 py-4 rounded-full"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                View My Work
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <div className="hidden sm:flex items-center gap-2 text-slate/30">
                                <div className="w-12 h-px bg-slate/20" />
                                <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
                            </div>
                        </motion.div>

                        {/* ── Animated Stats ── */}
                        <motion.div variants={fadeUp} className="mt-14 flex items-center gap-8 lg:gap-10">
                            {stats.map((s, i) => (
                                <div key={s.label} className="flex items-center gap-8 lg:gap-10">
                                    {i > 0 && <div className="w-px h-12 bg-slate/10 -ml-8 lg:-ml-10" />}
                                    <div>
                                        <AnimatedCounter
                                            target={s.target}
                                            suffix={s.suffix}
                                            duration={2000}
                                            className="font-heading font-bold text-4xl lg:text-5xl text-slate"
                                        />
                                        <p className="text-xs text-slate/50 mt-1">{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Right: cols 8-12 ── */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative">
                            <div
                                className="overflow-hidden shadow-2xl shadow-slate/15"
                                style={{ borderRadius: '120px 24px 80px 24px' }}
                            >
                                <img
                                    src={heroImg}
                                    alt="Software Engineer at work"
                                    className="w-full h-[420px] lg:h-[540px] object-cover"
                                />
                            </div>

                            {/* Decorative circle */}
                            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-2 border-accent/20 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating pills */}
                            <motion.span
                                className="absolute top-8 -left-3 lg:-left-6 inline-flex items-center gap-1.5 bg-white shadow-xl shadow-slate/10 text-xs font-semibold text-slate px-4 py-2.5 rounded-full border border-gray-100"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className="w-2 h-2 bg-green-400 rounded-full" />
                                Full-Stack
                            </motion.span>

                            <motion.span
                                className="absolute top-1/3 -right-2 lg:-right-4 inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl shadow-accent/25"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            >
                                Web Architecture
                            </motion.span>

                            <motion.span
                                className="absolute bottom-24 -left-2 lg:-left-5 inline-flex items-center gap-1.5 bg-slate text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl shadow-slate/25"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            >
                                React &bull; Node &bull; Laravel
                            </motion.span>

                            {/* Available card */}
                            <motion.div
                                className="absolute -bottom-6 left-4 lg:left-8 z-20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                            >
                                <motion.div
                                    className="bg-white rounded-2xl shadow-2xl shadow-slate/15 px-5 py-4 flex items-center gap-3 border border-gray-100 min-w-[220px]"
                                    whileHover={{ y: -3, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate">Available for Work</p>
                                        <p className="text-[11px] text-slate/40">Open to new opportunities</p>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse ml-auto shrink-0" />
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}
