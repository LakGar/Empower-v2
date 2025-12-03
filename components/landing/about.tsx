"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Target, Award, Heart, Users } from "lucide-react";

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Mission-Driven",
    description:
      "We're committed to delivering solutions that exceed expectations and drive real business results.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Excellence",
    description:
      "Quality is at the heart of everything we do. We strive for perfection in every project.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Passion",
    description:
      "We love what we do, and it shows in our dedication to creating exceptional digital experiences.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring your vision becomes reality.",
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

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const leftX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]),
    springConfig
  );
  const rightX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]),
    springConfig
  );

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/3 via-transparent to-cyan-500/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            style={{ x: leftX }}
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
              <span className="text-sm text-white/60 tracking-wide">
                About Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                Building Digital
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
                Experiences
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/40 mb-6 leading-relaxed font-light tracking-wide max-w-2xl">
              We are a modern web development company specializing in creating
              powerful, scalable, and innovative digital solutions. We combine
              technical expertise with creative vision to deliver exceptional
              results.
            </p>
            <p className="text-base sm:text-lg text-white/40 leading-relaxed font-light tracking-wide max-w-2xl">
              Our team of passionate developers and designers work together to
              transform ideas into stunning, high-performance websites and
              applications that users love.
            </p>
          </motion.div>

          <motion.div style={{ x: rightX }} className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl border-t border-white/10 bg-linear-to-b from-white/5 to-white/2 backdrop-blur-[2px] hover:from-white/8 hover:to-white/4 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-white/90 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
