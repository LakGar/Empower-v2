"use client";

import { motion } from "framer-motion";
import { Clock3, Layers, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    name: "Universal AI Services",
    clientContext:
      "Early-stage AI services company entering a competitive market.",
    problem:
      "Traffic was not converting and the offer was unclear to buyers with active budgets.",
    solution:
      "Repositioned messaging, rebuilt the website around conversion flows, and implemented a lead capture system tied to inquiry routing.",
    outcome:
      "Clearer pipeline quality and faster sales conversations because prospects arrived pre-qualified.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "CRM Integration"],
    timeline: "4 weeks",
  },
  {
    name: "Robot Combat Federation",
    clientContext:
      "A robotics league needed a platform for events, registrations, and sponsor visibility.",
    problem:
      "Operations were fragmented across tools, causing delays and manual coordination before each event.",
    solution:
      "Built a structured platform with event pages, registration flows, and centralized content operations.",
    outcome:
      "Smoother event operations and a more credible digital presence for competitors, sponsors, and fans.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Automation Workflows"],
    timeline: "6 weeks",
  },
  {
    name: "Legal AI Product",
    clientContext:
      "A legal-tech team was launching AI-assisted research and document workflows.",
    problem:
      "They needed a product and go-to-market experience that balanced trust, clarity, and speed.",
    solution:
      "Delivered product UX, marketing site architecture, and workflow logic aligned to legal use cases.",
    outcome:
      "Faster onboarding narrative for users and a stronger foundation for iterative product releases.",
    techStack: ["React", "Next.js", "API Integrations", "Workflow Design"],
    timeline: "5 weeks",
  },
];

export function CaseStudies() {
  return (
    <section
      id="projects"
      className="relative bg-black py-20 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/3 via-transparent to-cyan-500/3 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
            <span className="text-sm text-white/60 tracking-wide">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              Systems Built for
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Real Business Outcomes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Each engagement focuses on conversion, scalability, and operational
            efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-7 backdrop-blur-[2px]"
            >
              <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
                Client Context
              </p>
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                {study.name}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                {study.clientContext}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                    Business Problem
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                    Solution Built
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2 flex items-center gap-2">
                    <Layers className="h-3.5 w-3.5" />
                    Tech Stack
                  </p>
                  <p className="text-xs text-white/60">
                    {study.techStack.join(" · ")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2 flex items-center justify-end gap-2">
                    <Clock3 className="h-3.5 w-3.5" />
                    Timeline
                  </p>
                  <p className="text-sm text-white/80">{study.timeline}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-linear-to-r from-white/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-white text-xl font-semibold tracking-tight">
              Want this structure for your business?
            </p>
            <p className="text-sm text-white/50 mt-1">
              Get a technical growth audit focused on conversion and systems.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get a Technical Growth Audit
            <TrendingUp className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
