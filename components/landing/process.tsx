"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search className="w-5 h-5" />,
    title: "Discovery",
    description:
      "We quickly map your goals, constraints, and current systems so effort is focused where execution will move the business fastest.",
  },
  {
    number: "02",
    icon: <PenTool className="w-5 h-5" />,
    title: "Strategy",
    description:
      "You get a practical roadmap with priorities, delivery phases, and infrastructure decisions tied to business outcomes.",
  },
  {
    number: "03",
    icon: <Code2 className="w-5 h-5" />,
    title: "Build",
    description:
      "We ship in fast cycles with founder-level communication, so decisions are quick and momentum stays high.",
  },
  {
    number: "04",
    icon: <Rocket className="w-5 h-5" />,
    title: "Launch",
    description:
      "We handle deployment, QA, and handoff with operational clarity, so your team can run the system confidently from day one.",
  },
  {
    number: "05",
    icon: <LineChart className="w-5 h-5" />,
    title: "Optimization",
    description:
      "After launch, we refine flows and systems based on real usage to support scalable growth without added complexity.",
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

export function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]),
    springConfig
  );

  return (
    <section
      ref={ref}
      className="relative bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-amber-500/3 via-transparent to-rose-500/3 blur-3xl" />

      <motion.div
        style={{ opacity, scale }}
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
              Growth Infrastructure Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              How We Help
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              You Grow
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            A strategic partnership model designed for fast execution, operational clarity, and long-term infrastructure thinking.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl border-t border-white/10 bg-linear-to-b from-white/5 to-white/2 backdrop-blur-[2px] hover:from-white/8 hover:to-white/4 transition-all duration-300 text-center lg:text-left h-full">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <span className="text-3xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                        {step.number}
                      </span>
                      <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          custom={6}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex rounded-lg border border-white/20 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/35 transition-colors"
          >
            Discuss Your Growth Infrastructure
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
