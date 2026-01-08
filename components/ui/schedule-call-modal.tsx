"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Globe,
  Link as LinkIcon,
  MessageSquare,
  ArrowRight,
  Loader2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScheduleCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "form" | "calendly";

export function ScheduleCallModal({
  open,
  onOpenChange,
}: ScheduleCallModalProps) {
  const [step, setStep] = React.useState<Step>("form");
  const [calendlyLoaded, setCalendlyLoaded] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    website: "",
    links: "",
    info: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Get Calendly URL from environment variable
  const calendlyUrl = React.useMemo(
    () =>
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/lakgarg2002",
    []
  );

  // Build Calendly URL with pre-filled data
  const calendlyUrlWithData = React.useMemo(() => {
    const params = new URLSearchParams();
    params.append("name", formData.name);
    if (formData.email) {
      params.append("email", formData.email);
    }
    if (formData.website) {
      params.append("a1", formData.website);
    }
    if (formData.links) {
      params.append("a2", formData.links);
    }
    if (formData.info) {
      params.append("a3", formData.info);
    }
    return `${calendlyUrl}?${params.toString()}`;
  }, [calendlyUrl, formData]);

  const calendlyWidgetRef = React.useRef<HTMLDivElement>(null);

  // Load Calendly script and CSS when modal opens
  React.useEffect(() => {
    if (open) {
      // Load Calendly CSS
      const existingLink = document.querySelector(
        'link[href="https://assets.calendly.com/assets/external/widget.css"]'
      );
      if (!existingLink) {
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }

      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          // Wait a moment for Calendly to be fully initialized
          setTimeout(() => {
            setCalendlyLoaded(true);
          }, 100);
        };
        script.onerror = () => {
          console.error("Failed to load Calendly script");
        };
        document.body.appendChild(script);
      } else {
        // Script already exists, check if Calendly is available
        if (window.Calendly) {
          setCalendlyLoaded(true);
        } else {
          // Wait a bit for Calendly to be available
          const checkCalendly = setInterval(() => {
            if (window.Calendly) {
              setCalendlyLoaded(true);
              clearInterval(checkCalendly);
            }
          }, 100);
          return () => clearInterval(checkCalendly);
        }
      }
    }
  }, [open]);

  // Initialize Calendly widget when step changes to calendly and script is loaded
  React.useEffect(() => {
    if (step === "calendly" && calendlyLoaded) {
      const initWidget = () => {
        if (!calendlyWidgetRef.current) {
          return;
        }

        if (!window.Calendly) {
          setTimeout(initWidget, 200);
          return;
        }

        try {
          // Clear any existing content
          calendlyWidgetRef.current.innerHTML = "";

          // Small delay to ensure DOM is ready
          setTimeout(() => {
            if (calendlyWidgetRef.current && window.Calendly) {
              window.Calendly.initInlineWidget({
                url: calendlyUrlWithData,
                parentElement: calendlyWidgetRef.current,
              });
            }
          }, 100);
        } catch (error) {
          console.error("Error initializing Calendly widget:", error);
          // Retry after a delay
          setTimeout(() => {
            if (window.Calendly && calendlyWidgetRef.current) {
              calendlyWidgetRef.current.innerHTML = "";
              window.Calendly.initInlineWidget({
                url: calendlyUrlWithData,
                parentElement: calendlyWidgetRef.current,
              });
            }
          }, 1000);
        }
      };

      // Wait for DOM to be ready and Calendly to be available
      const timer = setTimeout(initWidget, 500);
      return () => clearTimeout(timer);
    }
  }, [step, calendlyLoaded, calendlyUrlWithData]);

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after modal closes
    setTimeout(() => {
      setStep("form");
      setFormData({ name: "", email: "", website: "", links: "", info: "" });
      setErrors({});
    }, 300);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep("calendly");
    }
  };

  if (!calendlyUrl) {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-black/95 backdrop-blur-xl p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl">
            <VisuallyHidden.Root>
              <Dialog.Title>Schedule a Call</Dialog.Title>
              <Dialog.Description>
                Calendly URL not configured
              </Dialog.Description>
            </VisuallyHidden.Root>
            <div className="relative">
              <Dialog.Close
                onClick={handleClose}
                className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10"
              >
                <X className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
                <span className="sr-only">Close</span>
              </Dialog.Close>
              <div className="p-8 text-center">
                <p className="text-white/60">
                  Calendly URL not configured. Please set
                  NEXT_PUBLIC_CALENDLY_URL in your environment variables.
                </p>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-black/95 backdrop-blur-xl p-0 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl overflow-hidden">
          <VisuallyHidden.Root>
            <Dialog.Title>Schedule a Call</Dialog.Title>
            <Dialog.Description>
              Fill out the form and select a time to schedule your call
            </Dialog.Description>
          </VisuallyHidden.Root>
          <div className="relative">
            <Dialog.Close
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-black/50 backdrop-blur-sm p-2"
            >
              <X className="h-5 w-5 text-white hover:text-white transition-colors" />
              <span className="sr-only">Close</span>
            </Dialog.Close>

            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-12"
                >
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Tell us about your project
                    </h2>
                    <p className="text-white/60 mb-8">
                      Help us prepare for our call by sharing some details
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/80 text-sm font-medium">
                          <User className="h-4 w-4" />
                          <span>Your Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/80 text-sm font-medium">
                          <Mail className="h-4 w-4" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email)
                              setErrors({ ...errors, email: "" });
                          }}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/80 text-sm font-medium">
                          <Globe className="h-4 w-4" />
                          <span>Current Website (Optional)</span>
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              website: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/80 text-sm font-medium">
                          <LinkIcon className="h-4 w-4" />
                          <span>
                            Other Links (If you don&apos;t have a website)
                          </span>
                        </label>
                        <input
                          type="text"
                          value={formData.links}
                          onChange={(e) =>
                            setFormData({ ...formData, links: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                          placeholder="Social media, portfolio, or any relevant links"
                        />
                        <p className="text-white/40 text-xs">
                          Share any links that help us understand your project
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/80 text-sm font-medium">
                          <MessageSquare className="h-4 w-4" />
                          <span>Relevant Information (Optional)</span>
                        </label>
                        <textarea
                          value={formData.info}
                          onChange={(e) =>
                            setFormData({ ...formData, info: e.target.value })
                          }
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all resize-none"
                          placeholder="Tell us about your project goals, timeline, or any specific requirements..."
                        />
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="gap-2 bg-white text-black hover:bg-white/90"
                        >
                          Continue to Schedule
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}

              {step === "calendly" && (
                <motion.div
                  key="calendly"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[600px] md:h-[700px] relative"
                  style={{ position: "relative" }}
                >
                  {calendlyLoaded ? (
                    <>
                      <div className="absolute top-4 left-4 z-40">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setStep("form")}
                          className="text-white/60 hover:text-white bg-black/50 backdrop-blur-sm"
                        >
                          ← Back
                        </Button>
                      </div>
                      <div
                        key={calendlyUrlWithData}
                        ref={calendlyWidgetRef}
                        className="calendly-inline-widget h-full w-full"
                        style={{
                          minWidth: "320px",
                          height: "100%",
                          position: "relative",
                        }}
                      />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="flex flex-col items-center gap-4">
                        <Loader2 className="h-8 w-8 text-white/60 animate-spin" />
                        <div className="text-white/60">Loading calendar...</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
    };
  }
}
