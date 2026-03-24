import { HeroGeometric } from "@/components/ui/shape-landing-hero";

function Hero() {
  return (
    <HeroGeometric
      badge="EmpowerWeb"
      title1="Digital Infrastructure for AI, Robotics,"
      title2="and Modern Service Businesses"
      subtitle="We design and ship websites, internal tools, and operational systems that help growing companies move faster from idea to execution."
      primaryCtaLabel="Book a Strategy Call"
      primaryCtaHref="#contact"
      secondaryCtaLabel="View Case Study"
      secondaryCtaHref="#projects"
    />
  );
}

export { Hero };
