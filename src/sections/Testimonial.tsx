import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "We now know agents meet our quality bar before they ever touch a customer. That's the difference.",
    author: "Marissa Taylor",
    role: "Manager Product Support",
    company: "Podium",
    logo: (
      <div className="flex items-center gap-2 font-bold text-xl text-black">
        <div className="w-6 h-6 bg-black rounded-sm" /> Podium
      </div>
    ),
    image: "/team-3.jpg", // Using existing placeholder or hero image as per user's current assets, ideally should be a specific one
    bgColor: "#e0f2f1", // Closest to bfe7e6 (Teal-ish) - User requested specific hexes
    stats: [
      { value: "50%", label: "Faster time to quality threshold" },
      { value: "33%", label: "Increase in resolution speed" },
    ],
  },
  {
    quote:
      "Solidroad transformed how we approach agent training. The AI simulations are incredibly realistic.",
    author: "Michael Chen",
    role: "Head of Customer Success",
    company: "TechFlow",
    logo: (
      <div className="flex items-center gap-2 font-bold text-xl text-black">
        <div className="w-6 h-6 bg-blue-600 rounded-sm" /> TechFlow
      </div>
    ),
    image: "/team-3.jpg",
    bgColor: "#f9f1cd", // User requested hex
    stats: [
      { value: "45%", label: "Faster onboarding" },
      { value: "3x", label: "CSAT improvement" },
    ],
  },
  {
    quote:
      "Consistency across every region is now possible. verification happens before go-live, not after.",
    author: "Destiny Young",
    role: "Sr. Manager, Quality Programs",
    company: "ActiveCampaign",
    logo: (
      <div className="flex items-center gap-2 font-bold text-xl text-black">
        <div className="w-6 h-6 bg-indigo-600 rounded-sm" /> ActiveCampaign
      </div>
    ),
    image: "/testimonial-person.jpg",
    bgColor: "#ecf0ec", // User requested hex
    stats: [
      { value: "1 Hour", label: "Saved per simulation" },
      { value: "2000+", label: "Hours of training completed" },
    ],
  },
  {
    quote:
      "Training and QA finally work together to improve every conversation.",
    author: "Sarah Jones",
    role: "VP of Support",
    company: "Faire",
    logo: (
      <div className="flex items-center gap-2 font-bold text-xl text-black">
        <div className="w-6 h-6 bg-black rounded-sm" /> Faire
      </div>
    ),
    image: "/testimonial-person.jpg",
    bgColor: "#cbeed3", // User requested hex
    stats: [
      { value: "25%", label: "Reduction in ramp time" },
      { value: "15%", label: "Increase in CSAT" },
    ],
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-12 transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: current.bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
          {/* Left: Image */}
          <div className="relative h-full animate-fade-in">
            <div className="aspect-[4/5] lg:aspect-auto lg:h-full w-full rounded-[2rem] overflow-hidden shadow-sm">
              <img
                src={current.image}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between h-full py-8 space-y-12 animate-slide-up">
            {/* Header: Logo + Nav */}
            <div className="flex items-center justify-between">
              <div>{current.logo}</div>
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-[#facc15] hover:bg-[#eab308] flex items-center justify-center text-black transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-[#facc15] hover:bg-[#eab308] flex items-center justify-center text-black transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quote Body */}
            <div>
              <blockquote className="text-3xl lg:text-4xl font-medium text-black leading-tight mb-8">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={current.image}
                      alt={current.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">
                      {current.author}
                    </div>
                    <div className="text-gray-600 text-xs">{current.role}</div>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors text-sm font-medium text-black">
                  Case study <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Footer: Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
              {current.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${i > 0 ? "border-l border-black/10 pl-8" : ""}`}
                >
                  <span className="text-4xl lg:text-5xl font-bold text-black mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-600 max-w-[150px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
