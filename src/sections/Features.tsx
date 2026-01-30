import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Review 100% of interactions in seconds.",
    description:
      "See the full picture of customer interactions across phone, live chat, video, and email support, at a glance.",
    color: "bg-pastel-yellow",
    mockup: (
      <div className="w-full bg-white rounded-xl shadow-sm p-4 space-y-3">
        <div className="w-full h-4 bg-gray-100 rounded animate-pulse" />
        <div className="w-3/4 h-4 bg-gray-100 rounded animate-pulse" />
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-medium text-gray-500">
            Auto QA score
          </span>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-xs font-bold text-yellow-700">80</span>
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-full h-2 bg-gray-100 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-full h-2 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Generate custom trainings for agents.",
    description:
      "Coach reps with AI simulations that look, act, and sound like your real customers.",
    color: "bg-pastel-blue",
    mockup: (
      <div className="w-full bg-white rounded-xl shadow-sm p-4 overflow-hidden relative">
        <div className="text-xs font-semibold text-gray-400 mb-3">
          Training Plan
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            SG
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Simon Gregory</div>
            <div className="text-[10px] text-gray-500">
              QA score ↗ 125 this week
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg">
            <div className="w-1 h-4 bg-blue-400 rounded-full" />
            <span className="text-xs text-gray-600 font-medium">
              Resolving Login Issues
            </span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg">
            <div className="w-1 h-4 bg-purple-400 rounded-full" />
            <span className="text-xs text-gray-600 font-medium">
              Tech-Savvy Customers
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Watch customer satisfaction increase.",
    description:
      "QA and training work together to improve every conversation, whether human or AI.",
    color: "bg-pastel-green",
    mockup: (
      <div className="w-full bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full min-h-[140px]">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs font-semibold text-gray-400">
            Conversation performance
          </div>
        </div>
        <div className="flex items-end justify-around h-24 gap-2">
          <div className="w-8 bg-green-500 rounded-t-lg h-[60%]" />
          <div className="w-8 bg-teal-600 rounded-t-lg h-[40%]" />
          <div className="w-8 bg-green-500 rounded-t-lg h-[75%]" />
          <div className="w-8 bg-teal-600 rounded-t-lg h-[85%]" />
          <div className="w-8 bg-green-500 rounded-t-lg h-[55%] opacity-50" />
        </div>
      </div>
    ),
  },
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
      { threshold: 0.1 },
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
      className="relative py-24 bg-[#f9f9f9] lg:py-32" // White background as requested
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-4">
            Close the loop from customer
            <br />
            insight to agent improvement
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group flex flex-col overflow-hidden rounded-[2rem] transition-all duration-700 ${feature.color} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Top: Mockup Area */}
              <div className="p-8 pb-0 flex-1 flex items-end justify-center">
                <div className="w-full transform transition-transform group-hover:scale-105 duration-500 origin-bottom">
                  {feature.mockup}
                </div>
              </div>

              {/* Bottom: Text Content */}
              <div className="p-8 pt-6">
                <h3 className="text-2xl font-bold text-black mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
