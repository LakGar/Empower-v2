"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "./case-study-card";


export function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <div ref={ref} className="relative min-h-screen bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/3 via-transparent to-rose-500/3 blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
            <span className="text-sm text-white/60 tracking-wide">Our Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              View Our
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Work
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed font-light tracking-wide">
            Explore our portfolio of cutting-edge web applications and digital
            solutions. Each project includes design direction, color palettes, typography,
            and technical implementation details.
          </p>
        </div>
      </motion.div>

      {/* Case Studies Grid */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-4 md:px-6 pb-20 md:pb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 md:px-6 pb-20 md:pb-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your digital vision to life.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Get In Touch
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}


