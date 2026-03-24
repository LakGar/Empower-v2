"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, Wrench, Globe } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-grid";
import { ScheduleCallModal } from "@/components/ui/schedule-call-modal";

const services = [
  {
    Icon: Globe,
    name: "Custom Websites That Convert",
    description:
      "Websites built to create trust quickly, improve conversion, and turn interest into real sales conversations.",
    href: "#contact",
    cta: "Start Building Your Growth Infrastructure",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl" />
    ),
    className: "",
  },
  {
    Icon: Wrench,
    name: "Internal Tools and CRM Systems",
    description:
      "Operational systems that replace manual handoffs with clear workflows, better visibility, and consistent execution.",
    href: "#contact",
    cta: "Get a Technical Growth Audit",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-rose-500 to-pink-500 rounded-full blur-3xl" />
    ),
    className: "",
  },
  {
    Icon: Bot,
    name: "AI-Enhanced Product and Workflow Development",
    description:
      "Practical AI integrations that help teams ship faster, reduce operational friction, and scale without process breakdowns.",
    href: "#contact",
    cta: "Book Strategy Session",
    background: (
      <div className="absolute -right-20 -top-20 opacity-10 w-40 h-40 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl" />
    ),
    className: "",
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
              Core Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              What We
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Build
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Three focused offerings centered on shipping faster, improving conversion, and building infrastructure that scales with your business.
          </p>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(220px,auto)] gap-6">
          {services.map((service) => (
            <BentoCard
              key={service.name}
              {...service}
              onClick={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </motion.div>
      <ScheduleCallModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
