import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo requested for:', email)
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta-bg.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark/80 to-forest-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/60 via-transparent to-forest-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Raise the bar for every
          <br />
          <span className="gradient-text">customer interaction</span>
        </h2>

        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          Join thousands of CX teams using Solidroad to transform their agent training and quality assurance.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/40 rounded-full focus:border-golden focus:ring-golden/20"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-golden hover:bg-golden-light text-forest-dark font-semibold px-6 py-4 rounded-full transition-all hover:shadow-glow-lg flex items-center justify-center gap-2 group"
          >
            Book a demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free 14-day trial
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No setup required
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  )
}
