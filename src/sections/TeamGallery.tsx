import { Check } from "lucide-react";

export function TeamGallery() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Built by CX experts */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <div className="flex justify-end mb-8">
              {/* Abstract 3D Speech Bubble representation */}
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-green-400 rounded-2xl transform -rotate-12 translate-y-2 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-2xl transform -rotate-6 shadow-lg flex items-center justify-center">
                  <div className="w-20 h-2 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Built by CX experts
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team brings deep experience from category-leading CX
                companies. That expertise is translated into a platform built
                for speed, clarity, and operational excellence.
              </p>
            </div>
          </div>

          {/* Card 2: Nature Image */}
          <div className="rounded-[2rem] overflow-hidden min-h-[400px] shadow-sm group relative">
            <img
              src="/image.png"
              alt="Nature landscape"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Card 3: Engineered for enterprises */}
          <div className="bg-[#fffbeb] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-yellow-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <div className="flex justify-start mb-8 pl-8 pt-8">
              {/* Abstract 3D Safe/Lock representation */}
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-green-600/10 rounded-xl transform rotate-6 scale-90" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-xl flex items-center justify-center border-b-8 border-green-700">
                  <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
                    <div className="w-4 h-8 bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Engineered for enterprises
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Enterprise-ready by design, Solidroad is SOC 2 and ISO 27001
                certified and adheres to strict security protocols to safeguard
                your data.
              </p>
            </div>
          </div>

          {/* Card 4: Made for your CX stack */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Made for your <br /> CX stack
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Solidroad integrates with your CX tech stack, connecting quality
                improvements across your entire agent ecosystem.
              </p>
            </div>

            {/* Integration Badges Marquee-ish */}
            <div className="flex flex-wrap gap-3">
              {[
                "Zendesk",
                "Intercom",
                "Gladly",
                "Gong",
                "Notion",
                "HelpScout",
                "Gorgias",
                "Aircall",
              ].map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full border border-gray-100"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {tool}
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
