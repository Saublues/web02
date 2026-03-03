import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';

const projects = [
    {
        title: 'Saintara App',
        tag: 'Laravel + React',
        description: 'A comprehensive SaaS platform with real-time analytics and multi-tenant architecture.',
        image: project1,
        large: true,
        radius: '24px 80px 24px 24px',
    },
    {
        title: 'FinPay Mobile',
        tag: 'React Native',
        description: 'Fintech mobile app with secure payment processing and intuitive dashboard.',
        image: project2,
        large: false,
        radius: '60px 24px 24px 60px',
    },
    {
        title: 'Luxe Commerce',
        tag: 'Next.js + Stripe',
        description: 'Premium e-commerce experience with personalised recommendations and seamless checkout.',
        image: project3,
        large: false,
        radius: '24px 24px 80px 24px',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative bg-slate py-24 lg:py-32 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            {/* Large decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                            <span className="w-8 h-px bg-accent" />
                            Our Projects
                        </span>
                        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                            Featured
                            <br />
                            <span className="text-stroke-dark">Works</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm text-white/40 leading-relaxed">
                        A curated selection of projects that showcase expertise across the
                        full development stack — from architecture to pixel-perfect UI.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 ${project.large ? 'lg:col-span-2 lg:row-span-1' : ''
                                }`}
                            style={{ borderRadius: project.radius }}
                        >
                            {/* Image container with circular overlay element */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.large ? 'h-64 lg:h-72' : 'h-56'
                                        }`}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Circular accent element */}
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-accent hover:border-accent">
                                    <svg className="w-4 h-4 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Tag pill — floating over image bottom */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[11px] font-semibold text-white bg-accent px-4 py-1.5 rounded-full shadow-lg shadow-accent/30">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                {/* Circular decorative dot */}
                                <div className="absolute top-0 right-6 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-md shadow-accent/30" />

                                <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/40 leading-relaxed mt-2">
                                    {project.description}
                                </p>

                                {/* Bottom row with fake tech icons */}
                                <div className="mt-4 flex items-center gap-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-7 h-7 rounded-full bg-white/10 border border-white/10" />
                                    ))}
                                    <span className="text-[10px] text-white/30 ml-auto">View Case Study →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "See all" link */}
                <div className="mt-14 text-center">
                    <a
                        href="#"
                        className="group inline-flex items-center gap-3 bg-white/[0.06] hover:bg-accent text-white text-sm font-semibold px-8 py-4 rounded-full border border-white/10 hover:border-accent transition-all duration-400 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
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
                    </a>
                </div>
            </div>
        </section>
    );
}
