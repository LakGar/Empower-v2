import { CTA } from "@/components/landing/cta";
import HoverFooter from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HeroParallaxDemo } from "@/components/landing/projects";
import Testimonials from "@/components/landing/testimonials";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Process } from "@/components/landing/process";
import { Stats } from "@/components/landing/stats";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Services />
      <About />
      <HeroParallaxDemo />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
      <HoverFooter />
    </div>
  );
}
