import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import project1 from '../assets/images/project-1.png';
import recircle from '../assets/images/recircle.jpeg';
import project3 from '../assets/images/project-3.png';

const projects = [
    {
        title: 'Saintara App',
        tag: 'Laravel + React',
        description: 'A comprehensive SaaS platform with real-time analytics and multi-tenant architecture.',
        image: project1,
        large: true,
        radius: '24px 80px 24px 24px',
        link: '/projects/saintara-app',
        techs: ['La', 'Re', 'TW'],
    },
    {
        title: 'ReCircle',
        tag: 'Laravel + Inertia',
        description: 'Student marketplace solution — connecting university students to buy and sell pre-loved items.',
        image: recircle,
        large: false,
        radius: '60px 24px 24px 60px',
        link: '/projects/recircle',
        techs: ['La', 'In', 'Re'],
    },
    {
        title: 'Resik Laundry',
        tag: 'Google Apps Script',
        description: 'Serverless laundry booking UI — lightweight interface powered entirely by Google Apps Script.',
        image: project3,
        large: false,
        radius: '24px 24px 80px 24px',
        link: '/projects/resik-laundry',
        techs: ['GS', 'JS', 'CSS'],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative bg-slate-900 dark:bg-slate-100 py-24 lg:py-32 overflow-hidden z-20">
            {/* Background decorations - STRICTLY pointer-events-none to prevent blocking clicks */}
            <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-[-1]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl z-[-1]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04] z-[-1]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                            <span className="w-8 h-px bg-accent" />
                            Our Projects
                        </span>
                        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white dark:text-slate-900 leading-tight">
                            Featured
                            <br />
                            <span className="text-stroke-dark dark:text-stroke">Works</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm text-white/40 dark:text-slate-500 leading-relaxed">
                        A curated selection of projects that showcase expertise across the
                        full development stack — from architecture to pixel-perfect UI.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`project-card-${project.title}`}
                            key={project.title}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer relative bg-white/[0.04] dark:bg-white/10 backdrop-blur-sm border border-white/10 dark:border-slate-300 overflow-hidden transition-transform duration-500 hover:-translate-y-2 will-change-transform ${project.large ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                            style={{ borderRadius: project.radius }}
                        >
                            {/* Image container */}
                            <div className="relative overflow-hidden line-clamp-none pointer-events-none">
                                <motion.img
                                    layoutId={`project-image-${project.title}`}
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform ${project.large ? 'h-64 lg:h-72' : 'h-56'}`}
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                
                                {/* Tag pill */}
                                <div className="absolute bottom-4 left-4 z-10">
                                    <span className="text-[11px] font-semibold text-white bg-accent px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative pointer-events-none">
                                <motion.h3 layoutId={`project-title-${project.title}`} className="font-heading font-bold text-xl text-white dark:text-slate-900 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </motion.h3>
                                <p className="text-sm text-white/40 dark:text-slate-500 leading-relaxed mt-2">
                                    {project.description}
                                </p>

                                {/* Tech & Info */}
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <div className="flex gap-2">
                                        {project.techs.map((t) => (
                                            <div key={t} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 dark:border-slate-300 dark:text-slate-600 flex items-center justify-center text-[10px] font-bold text-white/60">
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/30 dark:text-slate-400 ml-auto group-hover:text-accent dark:group-hover:text-accent transition-colors flex items-center gap-1">
                                        Discover 
                                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "See all" link */}
                <div className="mt-14 text-center relative z-20">
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-3 bg-white/[0.06] dark:bg-slate-200 hover:bg-accent text-white dark:text-slate-900 text-sm font-semibold px-8 py-4 rounded-full border border-white/10 dark:border-slate-300 hover:border-accent dark:hover:border-accent transition-all duration-400 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
                    >
                        View All Projects
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Premium Detail Modal (Expand Effect) - Strict AnimatePresence implementation */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-auto"
                    >
                        {/* Dimmer backdrop - strict click detection to close */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-800/95 backdrop-blur-md cursor-pointer pointer-events-auto"
                        />
                        
                        {/* Modal Container */}
                        <motion.div 
                            layoutId={`project-card-${selectedProject?.title}`}
                            className="relative w-full max-w-6xl h-[90vh] md:h-auto md:max-h-[85vh] bg-slate-900 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-slate-700/50 flex flex-col md:flex-row z-10 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close (X) button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedProject(null);
                                }}
                                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/30 hover:bg-accent rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/10 transition-colors pointer-events-auto cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left Visual Area */}
                            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black/50 shrink-0 select-none">
                                <motion.img
                                    layoutId={`project-image-${selectedProject?.title}`}
                                    src={selectedProject?.image}
                                    alt={selectedProject?.title || 'Project'}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate via-transparent to-transparent opacity-90 md:hidden" />
                            </div>

                            {/* Right Content Area */}
                            <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 overflow-y-auto flex flex-col justify-center">
                                <span className="inline-block self-start text-xs font-semibold text-white bg-accent px-4 py-1.5 rounded-full shadow-lg shadow-accent/30 mb-6">
                                    {selectedProject?.tag}
                                </span>
                                
                                <motion.h3 layoutId={`project-title-${selectedProject?.title}`} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-[1.1]">
                                    {selectedProject?.title}
                                </motion.h3>

                                <p className="text-base text-white/60 leading-relaxed font-body mb-10">
                                    {selectedProject?.description}
                                </p>

                                <div className="mb-12">
                                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
                                        Core Technologies
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject?.techs?.map((tech) => (
                                            <span key={tech} className="px-4 py-2 border border-white/10 rounded-full text-xs font-semibold text-white/70 bg-white/[0.04]">
                                                {tech === 'La' ? 'Laravel' : tech === 'Re' ? 'React' : tech === 'TW' ? 'Tailwind CSS' : tech === 'In' ? 'Inertia.js' : tech === 'GS' ? 'Google Apps Script' : tech === 'JS' ? 'Vanilla JS' : tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Navigate to the full Detail Page route we built */}
                                <div>
                                    <Link
                                        to={selectedProject?.link}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProject(null);
                                        }}
                                        className="group inline-flex items-center gap-3 bg-accent text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-accent/25 hover:shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1 pointer-events-auto cursor-pointer"
                                    >
                                        Read Full Case Study
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
