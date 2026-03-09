import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import project1 from '../assets/images/project-1.png'
import vora from '../assets/images/vora.jpeg'
import recircle from '../assets/images/recircle.jpeg'
import project3 from '../assets/images/project-3.png'
import heroImg from '../assets/images/hero-portrait.png'

/* ── Project Data ────────────────────────────────── */
const featured = [
   {
        id: 7,
        title: 'Vora',
        tag: 'Laravel · React · Tailwind · Supabase',
        description: 'Premium Furniture E-Commerce — A minimalist digital storefront featuring seamless checkout, robust inventory management, and immersive product showcases.',
        image: vora,
        span: 'md:col-span-2',
        radius: '24px 80px 24px 24px',
    },
    {
        id: 2,
        title: 'ReCircle',
        tag: 'Laravel · Inertia',
        description: 'Student Marketplace Solution — connecting university students to buy and sell pre-loved items sustainably.',
        image: recircle,
        span: '',
        radius: '60px 24px 24px 60px',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

/* ── Component ───────────────────────────────────── */
export default function SneakPeek() {
    const navigate = useNavigate();

    return (
        <section id="projects" className="relative bg-slate-900 dark:bg-slate-100 py-24 lg:py-32 overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <div>
                        <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                            <span className="w-8 h-px bg-accent" />
                            Selected Works
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white dark:text-slate-900 leading-tight">
                            Case
                            <br />
                            <span className="text-stroke-dark dark:text-stroke">Studies</span>
                        </motion.h2>
                    </div>
                    <motion.p variants={fadeUp} className="max-w-sm text-sm text-white/40 dark:text-slate-500 leading-relaxed">
                        A curated selection of projects we&apos;ve shipped — from full-stack platforms to serverless micro-apps.
                    </motion.p>
                </motion.div>

                {/* Bento-Box Grid — 4 projects */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5 group/grid">
                    {featured.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className={`group/card relative bg-white/[0.04] dark:bg-white/10 backdrop-blur-sm border border-white/10 dark:border-slate-300 overflow-hidden cursor-pointer will-change-transform ${project.span}`}
                            style={{ borderRadius: project.radius }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{
                                scale: 1.02,
                                y: -6,
                                transition: { type: 'spring', stiffness: 400, damping: 25 },
                            }}
                            onClick={() => navigate('/projects/' + project.id)}
                        >
                            {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 will-change-transform ${project.span ? 'h-56 md:h-72' : 'h-52 md:h-60'
                                            }`}
                                        loading="lazy"
                                        decoding="async"
                                        width={800}
                                        height={600}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-500" />

                                    {/* Tag pill */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[11px] font-semibold text-white bg-accent px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
                                            {project.tag}
                                        </span>
                                    </div>

                                    {/* Arrow — appears on hover */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                                        <svg className="w-4 h-4 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="p-5 relative">
                                    <div className="absolute top-0 right-5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-md shadow-accent/30" />
                                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-900 group-hover/card:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-14 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Link to="/projects">
                        <motion.span
                            className="inline-flex items-center gap-3 bg-accent text-white text-base font-semibold px-10 py-5 rounded-full shadow-xl shadow-accent/25 cursor-pointer"
                            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 20px 40px -8px rgba(249,115,22,0.35)' }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                            Explore All Projects
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
