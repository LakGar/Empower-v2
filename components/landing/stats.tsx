"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "20+", label: "Projects shipped" },
  { number: "4-8", label: "Week delivery windows" },
  { number: "3", label: "Core industries served" },
  { number: "100%", label: "Custom implementation" },
];

function AnimatedNumber({
  value,
  suffix = "",
  delay = 0,
}: {
  value: string;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="inline-block"
    >
      {value}
      {suffix && <span className="text-white/60 text-xs">{suffix}</span>}
    </motion.span>
  );
}

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

export function Stats() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
    springConfig,
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30]),
    springConfig,
  );

  return (
    <section
      ref={ref}
      className="relative bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/3 via-transparent to-indigo-500/3 blur-3xl" />

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
              Trust Signals
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              Built for Teams
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Who Need Execution
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            We are trusted by teams that care about conversion, scalability, and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative min-w-0 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-[2px] hover:bg-white/4 hover:border-white/15 transition-all duration-300 text-center"
            >
              <div className="relative z-10 min-w-0 overflow-hidden">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight wrap-break-word">
                  <AnimatedNumber
                    value={stat.number}
                    suffix=""
                    delay={index * 0.1}
                  />
                </div>
                <p className="text-sm text-white/50 font-light tracking-wide wrap-break-word">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
            <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Industries Served</p>
            <p className="text-sm text-white/70 leading-relaxed">
              AI products, robotics organizations, and modern service businesses scaling operations.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
            <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Timeline Expectations</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Most builds launch in 4-8 weeks, with weekly milestones and direct status visibility.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
            <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Credibility Signal</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Founder-led strategy with a specialist delivery team for design, engineering, and systems implementation.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
