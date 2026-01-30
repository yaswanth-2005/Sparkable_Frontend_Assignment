import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  MessageSquare,
  TrendingUp,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Review 100% of interactions in seconds.",
    description:
      "See the full picture of customer interactions across phone, live chat, video, and email support, at a glance.",
    color: "from-teal to-teal-light",
  },
  {
    icon: MessageSquare,
    title: "Generate custom trainings for agents.",
    description:
      "Coach reps with AI simulations that look, act, and sound like your real customers.",
    color: "from-golden to-golden-light",
  },
  {
    icon: TrendingUp,
    title: "Watch customer satisfaction increase.",
    description:
      "QA and training work together to improve every conversation, whether human or AI.",
    color: "from-mint to-cream",
  },
];

const stats = [
  { icon: Users, value: "10K+", label: "Agents trained" },
  { icon: Zap, value: "80%", label: "Faster QA" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-24 lg:py-32 bg-forest-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Close the loop from customer
            <br />
            <span className="gradient-text">insight to agent improvement</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-forest-light/50 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-forest-dark" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 lg:gap-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/5"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-teal" />
                </div>
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
