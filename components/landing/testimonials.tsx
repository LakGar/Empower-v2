"use client";

import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "We needed a website that could convert technical buyers, not just look good. EmpowerWeb restructured our messaging and funnel, and inbound calls became much more qualified within the first month.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "A. Rahman",
    role: "Founder, AI Services Company (4-week build)",
  },
  {
    text: "Our operations were spread across docs and manual follow-ups. The internal system they built gave our team one source of truth and reduced turnaround time across key workflows.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "N. Khan",
    role: "Operations Lead, Robotics Organization (6-week rollout)",
  },
  {
    text: "They understood both product and business constraints quickly. We launched with a clearer offer, cleaner UX, and a much stronger foundation for scaling.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "M. Shah",
    role: "Co-Founder, Legal Tech Product (5-week launch)",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-black py-20 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/3 via-transparent to-pink-500/3 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.4, 0.25, 1] as const,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
            <span className="text-sm text-white/60 tracking-wide">
              Client Proof
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              Trusted by
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Growth-Focused Teams
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Testimonials from teams that hired us for revenue, systems, and delivery speed.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={20} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
