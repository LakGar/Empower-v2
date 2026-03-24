"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, ShieldCheck, Clock3, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/15",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Empower",
  title1 = "AI Automation and Custom Software",
  title2 = "for Growing Businesses",
  subtitle = "We help businesses automate workflows, reduce manual work, and build modern software with AI.",
  primaryCtaLabel = "Book a Free Strategy Call",
  primaryCtaHref = "#contact",
  secondaryCtaLabel = "View Our Work",
  secondaryCtaHref = "#projects",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/3 via-transparent to-rose-500/3 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300 ",
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl md:mx-auto px-0 md:px-4">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center items-stretch md:items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-medium"
            >
              <a href={primaryCtaHref}>{primaryCtaLabel}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-black hover:bg-white/10 hover:text-white"
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-sm text-white/45 md:text-center"
          >
            Get a clear roadmap in the first call. No generic pitch decks.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl md:mx-auto"
          >
            <div className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-left md:text-center">
              <p className="flex items-center gap-2 text-xs text-white/55 uppercase tracking-wide mb-1">
                <Clock3 className="h-3.5 w-3.5" />
                Delivery
              </p>
              <p className="text-sm text-white/85">
                4-8 week typical timelines
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-left md:text-center">
              <p className="flex items-center gap-2 text-xs text-white/55 uppercase tracking-wide mb-1">
                <TrendingUp className="h-3.5 w-3.5" />
                Outcome
              </p>
              <p className="text-sm text-white/85">
                Conversion and system performance
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-left md:text-center">
              <p className="flex items-center gap-2 text-xs text-white/55 uppercase tracking-wide mb-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                Focus
              </p>
              <p className="text-sm text-white/85">
                AI, robotics, and service businesses
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
