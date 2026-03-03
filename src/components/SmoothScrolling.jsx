import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * SmoothScrolling — Global momentum/inertial scroll wrapper using Lenis.
 *
 * Why Lenis over Framer Motion native scroll?
 * 1. Lenis works WITH the browser scrollbar (no fake scroll container).
 * 2. Fixed/sticky elements (navbar) work out of the box — no z-index fights.
 * 3. Lighter footprint: single lerp loop vs. ResizeObserver + spring + transform.
 * 4. smoothTouch: false avoids hijacking mobile touch (native feel on phones).
 * 5. Plays nicely with Framer Motion animations, useInView, useScroll, etc.
 *
 * Props:
 *   children — the entire app content
 */
export default function SmoothScrolling({ children }) {
    const lenisRef = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,            // Smoothness factor (lower = smoother / more lag)
            duration: 1.2,         // Duration multiplier for scroll deceleration
            smoothWheel: true,     // Enable smooth scrolling on mouse wheel
            smoothTouch: false,    // Keep native touch on mobile
            touchMultiplier: 2,    // Touch scroll speed multiplier
            wheelMultiplier: 1,    // Mouse wheel speed multiplier
        })

        lenisRef.current = lenis

        // Sync with requestAnimationFrame for 60fps
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Expose lenis on window so anchor scrolling can use it
        window.__lenis = lenis

        return () => {
            lenis.destroy()
            window.__lenis = null
        }
    }, [])

    return children
}
