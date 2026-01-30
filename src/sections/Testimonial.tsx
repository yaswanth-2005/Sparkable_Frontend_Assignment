import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/ui/button'
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "We finally have consistent visibility into quality across every region. And we can verify readiness before agents go live, not after.",
    author: "Destiny Young",
    role: "Sr. Manager, Experience Quality Programs",
    company: "ActiveCampaign",
    image: "/testimonial-person.jpg",
    stats: [
      { value: "1 Hour", label: "Saved per simulation" },
      { value: "2000+", label: "Hours of training completed" },
    ],
  },
  {
    quote: "Solidroad transformed how we approach agent training. The AI simulations are incredibly realistic and our team is more confident than ever.",
    author: "Michael Chen",
    role: "Head of Customer Success",
    company: "TechFlow",
    image: "/team-3.jpg",
    stats: [
      { value: "45%", label: "Faster onboarding" },
      { value: "3x", label: "CSAT improvement" },
    ],
  },
]

export function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 lg:py-32 bg-forest-dark overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={current.image}
                alt={current.author}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            {/* Company badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 px-4 py-2 bg-forest-light rounded-lg border border-white/10 shadow-xl">
              <span className="text-sm text-white/60">{current.company}</span>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Quote icon */}
            <div className="w-12 h-12 rounded-xl bg-golden/20 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6 text-golden" />
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              <div>
                <div className="font-semibold text-white">{current.author}</div>
                <div className="text-sm text-white/60">{current.role}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {current.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-bold text-golden">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full group"
              >
                Case study
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Navigation */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
