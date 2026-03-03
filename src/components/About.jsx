import { motion } from 'framer-motion'
import aboutImg from '../assets/images/about-portrait.png'

const avatars = [
    { color: 'bg-amber-400', initials: 'JD' },
    { color: 'bg-sky-500', initials: 'AL' },
    { color: 'bg-rose-400', initials: 'MK' },
    { color: 'bg-emerald-500', initials: 'RN' },
    { color: 'bg-violet-500', initials: 'SY' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function About() {
    return (
        <section id="about" className="blueprint-bg relative py-24 lg:py-32 overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gray-200/60" />
            <div className="absolute top-24 right-24 w-52 h-52 rounded-full border border-gray-200/40" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.span
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <span className="w-8 h-px bg-accent" />
                    About Me
                </motion.span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* ── Left Column ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.12 }}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.5rem] text-slate leading-[1.1] tracking-tight"
                        >
                            Engineering
                            <br />
                            <span className="text-stroke">scalable solutions</span>
                            <br />
                            for the modern web
                        </motion.h2>

                        <motion.p variants={fadeUp} className="mt-8 text-slate/50 text-base leading-relaxed max-w-lg">
                            Combining deep technical skills with design intuition to craft digital products that are
                            both powerful under the hood and delightful to use.
                        </motion.p>

                        {/* Overlapping avatars */}
                        <motion.div variants={fadeUp} className="mt-10 flex items-center">
                            <div className="flex -space-x-3">
                                {avatars.map((a, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-12 h-12 rounded-full ${a.color} border-[3px] border-white flex items-center justify-center text-white text-xs font-bold shadow-lg relative`}
                                        style={{ zIndex: avatars.length - i }}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                                    >
                                        {a.initials}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-semibold text-slate">30+ Clients</p>
                                <p className="text-xs text-slate/40">Trusted globally</p>
                            </div>
                        </motion.div>

                        {/* Skill pills */}
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
                            {['React', 'Node.js', 'Laravel', 'TypeScript', 'PostgreSQL', 'AWS'].map((skill) => (
                                <motion.span
                                    key={skill}
                                    className="text-xs font-medium text-slate/60 bg-offwhite px-4 py-2 rounded-full border border-gray-200 cursor-default"
                                    whileHover={{ borderColor: 'rgba(249,115,22,0.3)', color: '#F97316', y: -2 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Right Column — curved image + stat card ── */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div
                            className="overflow-hidden shadow-2xl shadow-slate/10"
                            style={{ borderRadius: '24px 120px 24px 60px' }}
                        >
                            <img src={aboutImg} alt="About" className="w-full h-[420px] lg:h-[520px] object-cover" />
                        </div>

                        {/* Stat card — overlapping bottom-left */}
                        <motion.div
                            className="absolute -bottom-8 -left-4 lg:-left-10 z-20"
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className="bg-white rounded-2xl shadow-2xl shadow-slate/15 p-6 lg:p-8 max-w-[280px] border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-slate/40 uppercase tracking-wider">Track Record</span>
                                </div>
                                <p className="font-heading font-bold text-5xl text-slate">50<span className="text-accent">+</span></p>
                                <p className="text-sm text-slate/50 mt-1">Projects Successfully Delivered</p>
                            </div>
                        </motion.div>

                        {/* Accent circle top-left */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-xl shadow-accent/25">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                            </svg>
                        </div>

                        {/* Floating experience badge */}
                        <motion.div
                            className="absolute top-8 -right-3 lg:-right-6 z-20"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <div className="bg-slate text-white rounded-2xl shadow-xl shadow-slate/20 px-5 py-3 text-center">
                                <p className="font-heading font-bold text-2xl">5+</p>
                                <p className="text-[10px] text-white/50 uppercase tracking-wider">Years Exp.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
