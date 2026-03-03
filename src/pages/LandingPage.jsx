import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import SneakPeek from '../components/SneakPeek'
import Contact from '../components/Contact'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function LandingPage() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Header />
            <main>
                <Hero />
                <About />
                <SneakPeek />
                <Contact />
            </main>
        </motion.div>
    )
}
