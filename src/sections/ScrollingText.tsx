import { useEffect, useRef, useState } from "react";

const images = [
  "/team-3.jpg",
  "/team-1.jpg",
  "/team-4.jpg",
  "/team-2.jpg",
  "/team-3.jpg", // Repeating for length
  "/team-1.jpg",
  "/team-4.jpg",
];

export function ScrollingText() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when top of section hits bottom of screen, 1 when bottom of section hits top of screen
      // For a smoother effect, we can just track absolute position relative to viewport

      // Only animate if in view (with some buffer)
      if (top < windowHeight && top > -height) {
        // Create a value that moves from 0 to X based on scroll
        // map range start (top = windowHeight) to end (top = -height)

        const distFromBottom = windowHeight - top;
        const moveSpeed = 0.3; // Adjustable speed

        setOffset(distFromBottom * moveSpeed);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updatePosition(); // Initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#f9f9f9] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#235524] leading-[1.15] text-left mx-auto">
          CX teams use Solidroad to raise the quality bar on every customer
          interaction, unifying human and AI agents in one optimization layer
          that continuously improves performance across all conversations.
        </h2>
      </div>

      {/* Image Strip */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 items-center w-max px-4 transition-transform duration-75 ease-out will-change-transform"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-sm shrink-0 ${index % 2 === 0 ? "w-64 h-80" : "w-80 h-64"} ${index % 3 === 0 ? "mt-8" : "mb-8"} hover:scale-[1.02] transition-transform duration-500`}
            >
              <img
                src={src}
                alt={`Team member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicate for continuity if needed, strictly based on user's screenshot having a long strip */}
          {images.map((src, index) => (
            <div
              key={`dup-${index}`}
              className={`relative rounded-2xl overflow-hidden shadow-sm shrink-0 ${index % 2 === 0 ? "w-64 h-80" : "w-80 h-64"} ${index % 3 === 0 ? "mt-8" : "mb-8"} hover:scale-[1.02] transition-transform duration-500`}
            >
              <img
                src={src}
                alt={`Team member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
