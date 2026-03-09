import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function MacBookMockup({ imageSrc, alt = "Project preview", children }) {
    const [imageHeight, setImageHeight] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const imageRef = useRef(null)
    const containerRef = useRef(null)

    // Calculate scroll distance based on aspect ratio difference
    useEffect(() => {
        if (!imageRef.current || !containerRef.current) return

        const updateMeasurements = () => {
            setImageHeight(imageRef.current.offsetHeight)
            setContainerHeight(containerRef.current.offsetHeight)
        }

        updateMeasurements()
        window.addEventListener('resize', updateMeasurements)
        
        // Setup observer for when image actually loads
        const observer = new ResizeObserver(updateMeasurements)
        observer.observe(imageRef.current)

        return () => {
            window.removeEventListener('resize', updateMeasurements)
            observer.disconnect()
        }
    }, [])

    // If the image is taller than the container, we need to scroll it.
    // We calculate exactly how much to move it up (in percentage)
    // so the bottom of the image hits the bottom of the screen.
    const needsScroll = imageHeight > containerHeight && containerHeight > 0
    // e.g. if container is 100px and image is 300px, we need to move it up by 200px.
    // 200px / 300px = 66.6%. Or just let framer-motion use calc() based on 100% of self vs container.
    // The easiest way for a seamless infinite/yoyo scroll without complex JS calculations on resize 
    // is to just use standard y: ["0%", "calc(-100% + Xpx)"] where X is container height.
    // Since we're using framer-motion, we can pass the exact pixel difference:
    const scrollDistance = needsScroll ? -(imageHeight - containerHeight) : 0

    return (
        <div className="relative w-full max-w-5xl mx-auto drop-shadow-2xl">
            {/* ── MacBook Frame (CSS/SVG Hybrid) ── */}
            <div className="relative pt-[62.5%] w-full rounded-t-[20px] lg:rounded-t-[32px] bg-slate-800/90 shadow-inner overflow-hidden border-2 border-slate-800/80 ring-1 ring-white/10">
                
                {/* Screen Mask Area (16:10 approximate) */}
                <div 
                    ref={containerRef}
                    className="absolute top-[4%] left-[4%] right-[4%] bottom-[6%] bg-gray-900 rounded-sm overflow-hidden"
                >
                    {imageSrc ? (
                        <motion.img
                            ref={imageRef}
                            src={imageSrc}
                            alt={alt}
                            className="w-full h-auto will-change-transform" // height auto to preserve aspect ratio
                            animate={needsScroll ? {
                                y: [0, scrollDistance, scrollDistance, 0, 0]
                            } : { y: 0 }}
                            transition={needsScroll ? {
                                duration: 15, // Slow, buttery scroll
                                ease: "linear",
                                times: [0, 0.45, 0.5, 0.95, 1], // Scroll down, pause, scroll up, pause
                                repeat: Infinity,
                                repeatType: "loop"
                            } : {}}
                            loading="lazy"
                            decoding="async"
                            onLoad={(e) => {
                                // Trigger recalculation when image loads naturally
                                if (containerRef.current) {
                                    setImageHeight(e.target.offsetHeight)
                                    setContainerHeight(containerRef.current.offsetHeight)
                                }
                            }}
                        />
                    ) : (
                        children
                    )}
                </div>

                {/* Webcam dot */}
                <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-800/50 border border-black/20" />
            </div>

            {/* ── MacBook Bottom Lip (Keyboard base front) ── */}
            <div className="relative w-[115%] -ml-[7.5%] h-3 lg:h-5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-b-2xl lg:rounded-b-[2rem] shadow-xl flex justify-center -mt-[1px]">
                {/* Trackpad intent/notch */}
                <div className="w-16 lg:w-24 h-full bg-slate-400/30 rounded-t-lg mx-auto" />
            </div>
        </div>
    )
}
