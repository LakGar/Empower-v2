"use client";
import { useState } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScheduleCallModal } from "@/components/ui/schedule-call-modal";
import { ContactModal } from "@/components/ui/contact-modal";

function CTA() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/3 via-transparent to-rose-500/3 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 ">
        <div className="flex gap-6 md:gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col w-full justify-center items-center">
            <h2 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight max-w-4xl text-center">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                Plan Your Next
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
                Digital Move
              </span>
            </h2>

            <p className="text-sm md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide text-center px-2">
              We will map your highest-impact build opportunities and define the system roadmap needed to ship with speed and confidence.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto items-center">
            <Button
              size="lg"
              className="gap-2 w-full md:w-auto bg-white text-black hover:bg-white/90"
              onClick={() => setIsScheduleModalOpen(true)}
            >
              Book a Founder Strategy Call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full md:w-auto border-white/20 text-black"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get Your System Roadmap
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
