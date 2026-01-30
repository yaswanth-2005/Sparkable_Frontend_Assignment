import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { Testimonial } from "../sections/Testimonial";
import { ScrollingText } from "../sections/ScrollingText";
import { TeamGallery } from "../sections/TeamGallery";
import { CTASection } from "../sections/CTASection";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Testimonial />
      <ScrollingText />
      <TeamGallery />
      <CTASection />
    </main>
  );
}
