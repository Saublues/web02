import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop — resets scroll position on every route change.
 * Uses Lenis `scrollTo(0, { immediate: true })` when available,
 * falling back to native `window.scrollTo`.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        // Lenis: instant teleport to top (no animation)
        if (window.__lenis) {
            window.__lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [pathname])

    return null
}
