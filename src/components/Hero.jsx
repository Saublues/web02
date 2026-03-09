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
    { target: 50, suffix: '+', label: 'Projects Shipped' },
    { target: 99, suffix: '%', label: 'Client Satisfaction' },
    { target: 30, suffix: '+', label: 'Happy Clients' },
]

export default function Hero() {
    return (
        <section
            id="home"
            className="blueprint-bg relative min-h-screen flex items-center pt-32 lg:pt-28 overflow-hidden"
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
                        {/* Editorial label — tracked uppercase, no pill */}
                        <motion.div variants={fadeUp} className="mb-8">
                            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">
                                WeaveFlow &mdash; Digital Solutions
                            </span>
                        </motion.div>

                        {/* Headings */}
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] tracking-tighter text-slate-900 dark:text-white"
                        >
                            Weaving Systems.
                        </motion.h1>
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] tracking-tighter text-stroke mt-1"
                        >
                            Flowing Experiences.
                        </motion.h1>

                        {/* Subtitle — clean editorial */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-8 max-w-md text-base lg:text-lg text-slate-600 dark:text-slate-300 font-body leading-relaxed"
                        >
                            WeaveFlow Studio engineers robust digital solutions. We merge
                            high-performance architecture with flawless design to build
                            scalable web applications.
                        </motion.p>

                        {/* CTA — clean, no decorative scroll indicator */}
                        <motion.div variants={fadeUp} className="mt-10 md:space-x-4 space-y-4">
                            <motion.a
                                href="#projects"
                                className="group inline-flex items-center gap-3 bg-slate-900 text-accent dark:bg-slate-100 font-semibold px-8 py-4 rounded-full"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                Start a Project
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#about"
                                className="group inline-flex items-center gap-3 border-2 border-slate-200 text-slate-900 dark:text-white dark:border-slate-700 dark:hover:border-slate-500 font-semibold px-8 py-4 rounded-full hover:border-slate-300 transition-colors"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                Our Capabilities
                            </motion.a>
                        </motion.div>

                        {/* ── Stats — editorial grid with 1px borders ── */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-16 grid grid-cols-3 dark:bg-transparent border border-slate-800/10 dark:border-slate-800/50 rounded-2xl overflow-hidden"
                        >
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`py-6 px-5 ${i > 0 ? 'border-l border-slate-800/10 dark:border-slate-800/50' : ''}`}
                                >
                                    <AnimatedCounter
                                        target={s.target}
                                        suffix={s.suffix}
                                        duration={2000}
                                        className="font-heading dark:bg-transparent font-bold text-3xl lg:text-4xl text-slate-900 dark:text-white"
                                    />
                                    <p className="text-[10px] tracking-[0.15em] uppercase text-slate-500 dark:text-slate-400 mt-2 font-medium">
                                        {s.label}
                                    </p>
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
                            {/* Hero image — asymmetric radius */}
                            <div
                                className="overflow-hidden shadow-2xl shadow-slate-800/15"
                                style={{ borderRadius: '0 120px 0 80px' }}
                            >
                                <img
                                    src={heroImg}
                                    alt="WeaveFlow Studio technical team working on modern web architecture"
                                    className="w-full h-[420px] lg:h-[540px] object-cover"
                                    fetchPriority="high"
                                    width={800}
                                    height={1000}
                                />
                            </div>

                            {/* Decorative — minimal code icon */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-slate-100 dark:border-slate-800/50 flex items-center justify-center bg-white dark:bg-slate-950 dark:text-slate-700 shadow-lg dark:ring-1 dark:ring-slate-800">
                                <svg className="w-7 h-7 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </div>

                            {/* Availability card — clean, no colored dots */}
                            <motion.div
                                className="absolute -bottom-2 left-4 lg:left-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                            >
                                <motion.div
                                    className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] px-6 py-4 flex items-center gap-4 border border-slate-100 dark:border-slate-800/50 min-w-[220px]"
                                    whileHover={{ y: -3, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.12)' }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                                    <div className="">
                                        <p className="text-sm font-semibold text-slate-800 ">WeaveFlow is taking on new projects.</p>
                                        <p className="text-[10px] text-slate-500 dark:text-slate-600 tracking-wide uppercase">Available</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
