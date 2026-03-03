import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'

const featured = [
    {
        title: 'Saintara',
        tag: 'Laravel Breeze + React + Inertia',
        description: 'Character Testing App — a personality assessment platform built with Laravel Breeze, React, and Inertia.js for seamless SPA-like experiences.',
        image: project1,
        radius: '24px 80px 24px 24px',
    },
    {
        title: 'ReCircle',
        tag: 'Full-Stack Marketplace',
        description: 'Student Preloved Marketplace — connecting IPB University students to buy and sell pre-loved items sustainably.',
        image: project2,
        radius: '60px 24px 24px 60px',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function SneakPeek() {
    return (
        <section id="projects" className="relative bg-slate py-24 lg:py-32 overflow-hidden">
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
                            My Projects
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                            Featured
                            <br />
                            <span className="text-stroke-dark">Works</span>
                        </motion.h2>
                    </div>
                    <motion.p variants={fadeUp} className="max-w-sm text-sm text-white/40 leading-relaxed">
                        A curated selection of projects built during my studies and freelance work at IPB University.
                    </motion.p>
                </motion.div>

                {/* 2 featured cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featured.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm border border-white/10 overflow-hidden transition-colors duration-500"
                            style={{ borderRadius: project.radius }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: idx * 0.15, duration: 0.7, ease: 'easeOut' }}
                            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <svg className="w-4 h-4 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[11px] font-semibold text-white bg-accent px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <div className="absolute top-0 right-6 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-md shadow-accent/30" />
                                <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/40 leading-relaxed mt-2">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
