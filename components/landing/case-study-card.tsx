"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Palette, Type, Code, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CaseStudy } from "@/data/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-[2px] hover:border-white/20 transition-all duration-300">
        {/* Main Card Content */}
        <div className="relative">
          {/* Image Header */}
          <Link
            href={caseStudy.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-[300px] overflow-hidden"
          >
            <Image
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-2">
                <span className="text-xs text-white/60 uppercase tracking-wider">
                  {caseStudy.clientType}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{caseStudy.title}</h3>
              <p className="text-sm text-white/80">{caseStudy.subtitle}</p>
            </div>
          </Link>

          {/* Quick Info Section */}
          <div className="p-6 space-y-4">
            {/* Design Direction */}
            <div>
              <p className="text-sm text-white/60 mb-2">Design Direction</p>
              <p className="text-sm text-white/90 leading-relaxed">{caseStudy.designDirection}</p>
            </div>

            {/* Color Palette Preview */}
            <div>
              <p className="text-sm text-white/60 mb-3 flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Color Palette
              </p>
              <div className="flex gap-2 flex-wrap">
                {caseStudy.colorScheme.slice(0, 4).map((color, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-white/70">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Preview */}
            <div>
              <p className="text-sm text-white/60 mb-2 flex items-center gap-2">
                <Type className="h-4 w-4" />
                Typography
              </p>
              <div className="text-xs text-white/70 space-y-1">
                <p><span className="text-white/50">Headings:</span> {caseStudy.typography.headings}</p>
                <p><span className="text-white/50">Body:</span> {caseStudy.typography.body}</p>
              </div>
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-white/80 hover:text-white"
            >
              <span>{isExpanded ? "Show Less" : "View Full Case Study"}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10"
          >
            <div className="p-6 space-y-6">
              {/* Project Goal */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Project Goal</h4>
                <p className="text-sm text-white/70 leading-relaxed">{caseStudy.projectGoal}</p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.deliverables.map((deliverable, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* UX Decisions */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">UX Decisions</h4>
                <ul className="space-y-2">
                  {caseStudy.uxDecisions.map((decision, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Outcome</h4>
                <ul className="space-y-2">
                  {caseStudy.outcome.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why This Works */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">Why This Works</h4>
                <p className="text-sm text-white/70 leading-relaxed italic">"{caseStudy.whyThisWorks}"</p>
              </div>

              {/* View Live Site */}
              <Link
                href={caseStudy.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors text-sm"
              >
                View Live Site
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}



