'use client'

import { useEffect, useRef } from 'react'

export default function ReadingProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateProgress = () => {
      if (progressRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? scrollTop / docHeight : 0
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    // Update on scroll with throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 bg-neon z-[70] origin-left will-change-transform"
      style={{ transform: 'scaleX(0)' }}
    />
  )
}
