"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScheduleCallModal } from "@/components/ui/schedule-call-modal";
import { ContactModal } from "@/components/ui/contact-modal";

function CTA() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
        <div className="flex gap-6 md:gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col w-full">
            <h2 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight max-w-4xl text-center">
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

            <p className="text-sm md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide text-center px-2">
              Let's transform your digital vision into reality. We create
              powerful, scalable web solutions that drive results and exceed
              expectations.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Button
              size="lg"
              className="gap-4 w-full md:w-auto"
              variant="outline"
              onClick={() => setIsScheduleModalOpen(true)}
            >
              Schedule a Call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              className="gap-4 w-full md:w-auto"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your Project <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <ScheduleCallModal
        open={isScheduleModalOpen}
        onOpenChange={setIsScheduleModalOpen}
      />
      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  );
}

export { CTA };
