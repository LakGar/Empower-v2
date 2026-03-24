import { HeroGeometric } from "@/components/ui/shape-landing-hero";

function Hero() {
  return (
    <HeroGeometric
      badge="EmpowerWeb"
      title1="Websites and Digital Systems"
      title2="Built to Help Modern Companies Move Faster"
      subtitle="We partner with growing teams to ship production-ready products quickly, build operational infrastructure that removes friction, and align technical execution with real business priorities."
      primaryCtaLabel="Book a Strategy Call"
      primaryCtaHref="#contact"
      secondaryCtaLabel="Get Your Build Roadmap"
      secondaryCtaHref="#projects"
    />
  );
}

export { Hero };
