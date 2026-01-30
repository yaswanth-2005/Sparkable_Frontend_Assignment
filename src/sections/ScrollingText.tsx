import { useEffect, useRef, useState } from 'react'

const scrollingText = "CX teams use Solidroad to raise the quality bar on every customer interaction, unifying human and AI agents in one optimization layer that continuously improves performance across all conversations."

export function ScrollingText() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-forest-dark overflow-hidden"
    >
      {/* Scrolling text container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-forest-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-forest-dark to-transparent z-10" />

        {/* Scrolling text */}
        <div 
          className={`flex whitespace-nowrap transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="animate-scroll-text flex items-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20 px-8">
              {scrollingText}
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20 px-8">
              {scrollingText}
            </span>
          </div>
          <div className="animate-scroll-text flex items-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20 px-8">
              {scrollingText}
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20 px-8">
              {scrollingText}
            </span>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
