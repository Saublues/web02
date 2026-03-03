import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Header from '../components/Header'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import heroImg from '../assets/images/hero-portrait.png'
import aboutImg from '../assets/images/about-portrait.png'

/* ── Data ─────────────────────────────────────────── */
const allProjects = [
    {
        id: 1,
        title: 'Saintara',
        tag: 'Laravel Breeze + React + Inertia',
        category: 'Full-Stack',
        description: 'Character Testing App — a personality assessment platform built with Laravel Breeze, React, and Inertia.js.',
        image: project1,
        span: 'md:col-span-2',
        radius: '24px 80px 24px 24px',
    },
    {
        id: 2,
        title: 'ReCircle',
        tag: 'Full-Stack Marketplace',
        category: 'Full-Stack',
        description: 'Student Preloved Marketplace — connecting IPB University students to buy and sell pre-loved items sustainably.',
        image: project2,
        span: '',
        radius: '60px 24px 24px 60px',
    },
    {
        id: 3,
        title: 'Resik Laundry',
        tag: 'React + Node.js',
        category: 'Full-Stack',
        description: 'Automated Laundry Booking System — streamlined scheduling, tracking, and payment for campus laundry services.',
        image: project3,
        span: '',
        radius: '24px 24px 80px 24px',
    },
    {
        id: 4,
        title: 'DataVault Analytics',
        tag: 'Python + React',
        category: 'Data',
        description: 'Real-time data pipeline dashboard for enterprise analytics and decision-making.',
        image: heroImg,
        span: '',
        radius: '80px 24px 24px 24px',
    },
    {
        id: 5,
        title: 'MediConnect',
        tag: 'Node.js + Vue',
        category: 'Frontend',
        description: 'Healthcare platform connecting patients with providers through secure telemedicine.',
        image: aboutImg,
        span: 'md:col-span-2',
        radius: '24px 60px 60px 24px',
    },
    {
        id: 6,
        title: 'DevOps Board',
        tag: 'TypeScript + AWS',
        category: 'Frontend',
        description: 'Cloud infrastructure monitoring dashboard with real-time alerts and CI/CD metrics.',
        image: project1,
        span: '',
        radius: '60px 60px 24px 24px',
    },
]

const filters = ['All', 'Full-Stack', 'Frontend', 'Data']

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ── Component ────────────────────────────────────── */
export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [hoveredId, setHoveredId] = useState(null)

    // Parallax scroll for the header
    const { scrollY } = useScroll()
    const headerY = useTransform(scrollY, [0, 400], [0, 120])
    const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

    const filtered =
        activeFilter === 'All'
            ? allProjects
            : allProjects.filter((p) => p.category === activeFilter)

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Header />

            <section className="blueprint-bg min-h-screen overflow-hidden">
                {/* ── Parallax Hero Header ─────────────────── */}
                <div className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full border border-gray-200/30" />
                    <div className="absolute top-28 right-[12%] w-56 h-56 rounded-full border border-gray-200/20" />
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/[0.03]" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div style={{ y: headerY, opacity: headerOpacity }}>
                            <motion.span
                                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                <span className="w-8 h-px bg-accent" />
                                Portfolio
                            </motion.span>

                            <motion.h1
                                className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-slate tracking-tighter leading-[0.9]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Selected
                            </motion.h1>
                            <motion.h1
                                className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-stroke tracking-tighter leading-[0.9] mt-1"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Works
                            </motion.h1>

                            <motion.p
                                className="mt-8 max-w-lg text-base text-slate/50 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                A complete showcase of projects across the full stack&nbsp;&mdash;
                                from system architecture to pixel-perfect interfaces.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* ── Sticky content area ──────────────────── */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
                    {/* Filter Tabs */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-14"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className="relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 cursor-pointer"
                                style={{ color: activeFilter === f ? '#fff' : 'rgba(30,41,59,0.5)' }}
                            >
                                {activeFilter === f && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-slate rounded-full shadow-lg shadow-slate/15"
                                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                    />
                                )}
                                <span className="relative z-10">{f}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* ── 3D Tilt Masonry Grid ───────────────── */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" layout>
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    className={project.span}
                                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                    animate={{
                                        opacity: hoveredId && hoveredId !== project.id ? 0.35 : 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            delay: idx * 0.07,
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                        y: 20,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Tilt
                                        tiltMaxAngleX={8}
                                        tiltMaxAngleY={8}
                                        glareEnable={true}
                                        glareMaxOpacity={0.08}
                                        glareColor="#F97316"
                                        glarePosition="all"
                                        glareBorderRadius="24px"
                                        scale={1.02}
                                        transitionSpeed={1500}
                                        className="h-full"
                                    >
                                        <div
                                            className="group relative bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer h-full"
                                            style={{ borderRadius: project.radius }}
                                            onMouseEnter={() => setHoveredId(project.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                        >
                                            {/* Image with hover scale */}
                                            <div className="relative overflow-hidden">
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className={`w-full object-cover transition-transform duration-700 ease-out ${project.span ? 'h-60 md:h-80' : 'h-56 md:h-64'
                                                        }`}
                                                    style={{
                                                        transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)',
                                                    }}
                                                />

                                                {/* Gradient overlay */}
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/30 to-transparent transition-opacity duration-500"
                                                    style={{ opacity: hoveredId === project.id ? 1 : 0 }}
                                                />

                                                {/* Tag pill */}
                                                <div className="absolute top-4 left-4 z-10">
                                                    <span className="text-[11px] font-semibold text-white bg-accent px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
                                                        {project.tag}
                                                    </span>
                                                </div>

                                                {/* "View Case Study" — slides up from bottom */}
                                                <AnimatePresence>
                                                    {hoveredId === project.id && (
                                                        <motion.div
                                                            className="absolute bottom-0 left-0 right-0 p-5 z-10"
                                                            initial={{ y: 30, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            exit={{ y: 30, opacity: 0 }}
                                                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                                        >
                                                            <motion.span
                                                                className="inline-flex items-center gap-2 bg-white text-slate text-sm font-semibold px-6 py-3 rounded-full shadow-xl cursor-pointer"
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.97 }}
                                                            >
                                                                View Case Study
                                                                <svg className="w-4 h-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                </svg>
                                                            </motion.span>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 relative">
                                                <div className="absolute top-0 right-6 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-md shadow-accent/30" />
                                                <div className="flex items-center justify-between gap-4 mb-2">
                                                    <h3 className="font-heading font-bold text-lg text-slate group-hover:text-accent transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <span className="shrink-0 text-[10px] font-semibold text-slate/40 bg-offwhite px-3 py-1 rounded-full">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate/50 leading-relaxed">{project.description}</p>
                                            </div>
                                        </div>
                                    </Tilt>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Back link */}
                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link to="/">
                            <motion.span
                                className="inline-flex items-center gap-3 text-slate/50 hover:text-accent text-sm font-medium cursor-pointer transition-colors"
                                whileHover={{ x: -4 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
