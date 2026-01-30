import { useEffect, useRef, useState } from 'react'
import { Award, Shield, Zap, Users } from 'lucide-react'

const teamImages = [
  { src: '/team-1.jpg', alt: 'Team collaboration', size: 'large' },
  { src: '/team-2.jpg', alt: 'Customer support agent', size: 'tall' },
  { src: '/team-3.jpg', alt: 'Team member', size: 'square' },
  { src: '/team-4.jpg', alt: 'Team member', size: 'tall' },
]

const badges = [
  { icon: Award, label: 'Built by CX experts', description: 'Our team brings deep experience from category-leading CX companies.' },
  { icon: Shield, label: 'Enterprise-ready', description: 'SOC 2 and ISO 27001 certified with strict security protocols.' },
  { icon: Zap, label: 'Fast & reliable', description: 'Built for speed, clarity, and operational excellence.' },
  { icon: Users, label: 'Made for your stack', description: 'Integrates seamlessly with your existing CX tech stack.' },
]

export function TeamGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="customers"
      className="relative py-24 lg:py-32 bg-forest-dark overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built by CX experts
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Our team brings deep experience from category-leading CX companies. 
            That expertise is translated into a platform built for speed, clarity, and operational excellence.
          </p>
        </div>

        {/* Image Gallery */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {teamImages.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl group ${
                image.size === 'large' ? 'col-span-2 row-span-2' : 
                image.size === 'tall' ? 'row-span-2' : ''
              }`}
            >
              <div className={`${
                image.size === 'large' ? 'aspect-square' : 
                image.size === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="group p-6 rounded-xl bg-forest-light/50 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center mb-4 group-hover:bg-teal/30 transition-colors">
                <badge.icon className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-semibold text-white mb-2">{badge.label}</h3>
              <p className="text-sm text-white/50">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
