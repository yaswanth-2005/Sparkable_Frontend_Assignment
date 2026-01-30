import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle demo request
    console.log("Demo requested for:", email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image.png"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/10 via-forest-dark/20 to-forest-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-golden animate-pulse" />
          <span className="text-sm text-white/80">
            Now supporting AI agents
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up stagger-1">
          Train and QA your
          <br />
          <span className="text-white">human and AI agents</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white mb-10 animate-slide-up stagger-2">
          Make every customer interaction better, faster, and more consistent
          with the optimization platform for human and AI agents.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 animate-slide-up stagger-3"
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
            See a demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        {/* Trust badges */}
        {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 animate-fade-in stagger-4">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            14-day free trial
          </span>
        </div> */}
      </div>

      {/* Logo Ticker Integration - Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative pt-20 pb-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex animate-marquee transition-opacity">
            {/* First set */}
            <div className="flex shrink-0 gap-16 pr-16 items-center">
              {[
                { name: "FAIRE", style: "tracking-[0.3em] font-light" },
                { name: "ActiveCampaign", style: "font-semibold", suffix: ">" },
                { name: "WorkWhile", style: "font-medium", prefix: "W" },
                { name: "INTERCOM", style: "font-bold tracking-wider" },
                { name: "crypto.com", style: "font-semibold" },
                { name: "Podium", style: "font-bold" },
                { name: "FINOM", style: "font-bold tracking-wider" },
                { name: "RYANAIR", style: "font-bold" },
                { name: "amenitiz", style: "font-light tracking-wide" },
              ].map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-2 text-white whitespace-nowrap"
                >
                  {/* @ts-ignore */}
                  {logo.prefix && (
                    <span className="font-bold">{logo.prefix}</span>
                  )}
                  <span className={`text-lg ${logo.style}`}>{logo.name}</span>
                  {/* @ts-ignore */}
                  {logo.suffix && (
                    <span className="text-lg">{logo.suffix}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Second set (duplicate for scrolling) */}
            <div className="flex shrink-0 gap-16 pr-16 items-center">
              {[
                { name: "FAIRE", style: "tracking-[0.3em] font-light" },
                { name: "ActiveCampaign", style: "font-semibold", suffix: ">" },
                { name: "WorkWhile", style: "font-medium", prefix: "W" },
                { name: "INTERCOM", style: "font-bold tracking-wider" },
                { name: "crypto.com", style: "font-semibold" },
                { name: "Podium", style: "font-bold" },
                { name: "FINOM", style: "font-bold tracking-wider" },
                { name: "RYANAIR", style: "font-bold" },
                { name: "amenitiz", style: "font-light tracking-wide" },
              ].map((logo) => (
                <div
                  key={`${logo.name}-dup`}
                  className="flex items-center gap-2 text-white whitespace-nowrap"
                >
                  {/* @ts-ignore */}
                  {logo.prefix && (
                    <span className="font-bold">{logo.prefix}</span>
                  )}
                  <span className={`text-lg ${logo.style}`}>{logo.name}</span>
                  {/* @ts-ignore */}
                  {logo.suffix && (
                    <span className="text-lg">{logo.suffix}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - adjusted z-index to sit above gradient if needed, or hidden if overlaps */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce bg-transparent z-30">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
