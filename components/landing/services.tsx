"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Palette, Zap, Globe, Smartphone, Database } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ScheduleCallModal } from "@/components/ui/schedule-call-modal";

const services = [
  {
    Icon: Code,
    name: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Palette,
    name: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that engage users and drive conversions with a focus on user experience.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-rose-500 to-pink-500 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Zap,
    name: "Performance Optimization",
    description:
      "Lightning-fast websites optimized for speed, SEO, and user experience. Every detail matters.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-amber-500 to-yellow-500 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Globe,
    name: "Full Stack Solutions",
    description:
      "End-to-end development from frontend to backend, ensuring seamless integration and scalability.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Smartphone,
    name: "Mobile Development",
    description:
      "Responsive designs and mobile-first approaches that work flawlessly across all devices and screen sizes.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-violet-500 to-indigo-500 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export function Services() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
    springConfig
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]),
    springConfig
  );

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/3 via-transparent to-rose-500/3 blur-3xl" />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
            <span className="text-sm text-white/60 tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              What We
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Offer
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Comprehensive web development services to bring your digital vision
            to life
          </p>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto">
          <BentoGrid className="lg:grid-rows-3">
            {services.map((service) => (
              <BentoCard
                key={service.name}
                {...service}
                onClick={() => setIsModalOpen(true)}
              />
            ))}
          </BentoGrid>
        </div>
      </motion.div>
      <ScheduleCallModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
