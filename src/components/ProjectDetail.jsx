import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import MacBookMockup from './MacBookMockup'
import Contact from './Contact'
import suryakshana from '../assets/images/suryakshana.jpeg'
import resiklaundry from '../assets/images/resik-laundry.png'

/* Placeholder imports until real full-page images are provided.
   You would normally import highly vertical PNGs here. */
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'

// Ganti nama keys-nya jadi '1', '2', '3', '4' sesuai ID di ProjectsPage
const projectsData = {
    '1': {
        title: 'Saintara',
        subtitle: 'Comprehensive SaaS platform with real-time analytics.',
        description: 'Saintara is a full-stack personality assessment application built for scale...',
        techs: ['Laravel Breeze', 'React', 'Inertia.js', 'Tailwind'],
        liveUrl: 'https://github.com/saublues/saintara',
        mockupImg: project1, 
    },
    '2': {
        title: 'ReCircle',
        subtitle: 'Student marketplace for sustainable commerce.',
        description: 'ReCircle connects university students to effortlessly buy and sell pre-loved items...',
        techs: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
        liveUrl: 'https://github.com/saublues/recircle',
        mockupImg: project2, 
    },
    '3': {
        title: 'Resik Laundry',
        subtitle: 'Serverless booking UI on Google Apps Script.',
        description: 'A completely serverless booking interface powered entirely by Google Apps Script...',
        techs: ['Google Apps Script', 'React', 'Tailwind CSS'],
        liveUrl: 'https://github.com/saublues/resik-laundry',
        mockupImg: resiklaundry, // Sesuaikan variabel image-nya
    },
    '4': {
        title: 'Surya Kshana',
        subtitle: 'CLI Railway Management',
        description: 'A Python terminal application featuring role-based access for efficient train schedule tracking...',
        techs: ['Python', 'CLI'],
        liveUrl: '#',
        mockupImg: suryakshana, // Sesuaikan variabel image-nya
    }
}

const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.4 } },
}

const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.7 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function ProjectDetail() {
    const { id } = useParams()
    const project = projectsData[id]

    useEffect(() => {
        // Enforce scroll-to-top on mount since this is a new route
        // Fallback for when Lenis isn't immediate enough
        window.scrollTo(0, 0)
    }, [id])

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-slate font-heading">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/projects" className="text-accent hover:underline">Return to Projects</Link>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white min-h-screen"
        >
            <Header />

            <main className="pt-32 lg:pt-40 pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Back link */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate/40 hover:text-accent transition-colors mb-12">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* ── Asymmetrical Two-Column Layout ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
                        
                        {/* ── Left Sticky Column (Content) ── */}
                        <motion.div 
                            className="lg:col-span-5 lg:sticky top-40"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1 variants={itemVariants} className="font-heading font-bold text-5xl md:text-6xl text-slate leading-[1.1] tracking-tight">
                                {project.title}
                            </motion.h1>
                            
                            <motion.p variants={itemVariants} className="mt-4 text-xl text-slate border-l-2 border-accent pl-4 font-medium leading-relaxed">
                                {project.subtitle}
                            </motion.p>

                            <motion.p variants={itemVariants} className="mt-8 text-base text-slate/60 leading-relaxed font-body">
                                {project.description}
                            </motion.p>

                            {/* Tech Stack (1px bordered) */}
                            <motion.div variants={itemVariants} className="mt-12">
                                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate/30 mb-4">
                                    Technology Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techs.map(tech => (
                                        <span key={tech} className="px-4 py-2 border border-slate/10 rounded-full text-xs font-semibold text-slate/70 bg-slate/[0.02]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* CTA Action */}
                            <motion.div variants={itemVariants} className="mt-12">
                                <a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 bg-accent text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-accent/25 hover:shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1"
                                >
                                    Visit Live Site
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* ── Right Column (Visuals / MacBook) ── */}
                        <motion.div 
                            className="lg:col-span-7"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        >
                            <MacBookMockup imageSrc={project.mockupImg} alt={`${project.title} Interface Mockup`} />
                            
                            {/* Optional: Add extra mobile mockups or descriptive grids below the macbook here */}
                            <div className="mt-16 grid grid-cols-2 gap-4">
                                <div className="bg-slate/[0.02] border border-slate/10 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                                    <span className="text-xs text-slate/30 tracking-widest uppercase font-semibold">Mobile View (TBD)</span>
                                </div>
                                <div className="bg-slate/[0.02] border border-slate/10 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                                    <span className="text-xs text-slate/30 tracking-widest uppercase font-semibold">Feature Detail (TBD)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Contact />
        </motion.div>
    )
}
