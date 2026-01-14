"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScheduleCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScheduleCallModal({
  open,
  onOpenChange,
}: ScheduleCallModalProps) {
  // Get Calendly URL from environment variable
  const calendlyUrl = React.useMemo(
    () =>
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/lakgarg2002",
    []
  );

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-black/95 backdrop-blur-xl p-6 md:p-8 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl">
        <VisuallyHidden.Root>
          <Dialog.Title>Schedule a Call</Dialog.Title>
          <Dialog.Description>
            Book a time to discuss your project with us
          </Dialog.Description>
        </VisuallyHidden.Root>
        <div className="relative">
          <Dialog.Close
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-black/50 backdrop-blur-sm p-2"
          >
            <X className="h-5 w-5 text-white hover:text-white transition-colors" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-8"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Schedule a Call
                </h2>
                <p className="text-white/60 text-sm md:text-base">
                  Book a time that works for you to discuss your project
                </p>
              </div>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  className="w-full gap-2 bg-white text-black hover:bg-white/90"
                >
                  <Calendar className="h-5 w-5" />
                  Open Calendly
                </Button>
              </a>

              <p className="text-white/40 text-xs">
                You&apos;ll be redirected to our Calendly page to select a time
              </p>
            </div>
          </motion.div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  );
}
