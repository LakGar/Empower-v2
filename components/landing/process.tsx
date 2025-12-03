"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search className="w-5 h-5" />,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a strategic plan.",
  },
  {
    number: "02",
    icon: <PenTool className="w-5 h-5" />,
    title: "Design",
    description:
      "Our designers create beautiful, user-friendly interfaces that align with your brand and goals.",
  },
  {
    number: "03",
    icon: <Code2 className="w-5 h-5" />,
    title: "Development",
    description:
      "We build your solution using the latest technologies, ensuring performance and scalability.",
  },
  {
    number: "04",
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Testing",
    description:
      "Rigorous testing ensures your product works flawlessly across all devices and browsers.",
  },
  {
    number: "05",
    icon: <Rocket className="w-5 h-5" />,
    title: "Launch",
    description:
      "We deploy your solution and provide ongoing support to ensure continued success.",
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
              Our Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              How We
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Work
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            A proven methodology that ensures successful project delivery
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
      </motion.div>
    </section>
  );
}
