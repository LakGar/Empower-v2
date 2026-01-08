"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CTA() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="contact"
      className="relative w-full bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/3 via-transparent to-rose-500/3 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div>
            <Link href="/work">
              <Button variant="secondary" size="sm" className="gap-4">
                View Our Work <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl text-center">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                Ready to Build
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
                Web Solutions?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide text-center">
              Let's transform your digital vision into reality. We create
              powerful, scalable web solutions that drive results and exceed
              expectations.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="#contact">
              <Button size="lg" className="gap-4" variant="outline">
                Schedule a Call <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" className="gap-4">
                Start Your Project <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CTA };
