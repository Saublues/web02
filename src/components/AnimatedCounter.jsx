import { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

/**
 * AnimatedCounter — efficient 60fps counter that avoids React re-renders.
 * Uses framer-motion's MotionValue + useSpring instead of setState.
 * The spring interpolation is done entirely outside of React's render cycle.
 *
 * @param {number}  target    – Number to count up to
 * @param {string}  suffix    – Appended string (e.g. "+")
 * @param {number}  duration  – Approximate duration in seconds
 * @param {string}  className – Tailwind classes
 */
export default function AnimatedCounter({
    target,
    suffix = '',
    duration = 1.8,
    className = '',
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    // MotionValue starts at 0, spring-animates to target — no re-renders
    const motionVal = useMotionValue(0)
    const springVal = useSpring(motionVal, {
        stiffness: 80,
        damping: 30,
        duration: duration * 1000,
    })

    // Kick off animation when in view
    useEffect(() => {
        if (isInView) {
            motionVal.set(target)
        }
    }, [isInView, target, motionVal])

    // Update the DOM directly — zero React re-renders
    useEffect(() => {
        const unsubscribe = springVal.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Math.round(latest)}${suffix}`
            }
        })
        return unsubscribe
    }, [springVal, suffix])

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            0{suffix}
        </motion.span>
    )
}
