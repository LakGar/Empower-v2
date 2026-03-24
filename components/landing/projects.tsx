"use client";
import React from "react";
import { HeroParallax } from "@/components/blocks/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <section id="projects" className="relative w-full bg-black">
      <HeroParallax products={products} />
    </section>
  );
}
export const products = [
  {
    title: "Ava",
    link: "https://gomoonbeam.com",
    thumbnail: "/ava.png",
    caption:
      "Context: product launch for a fast-moving team. Problem: offer was hard to explain quickly. Solution: rebuilt the site around clear flows and proof. Outcome: stronger positioning and faster launch readiness.",
  },
  {
    title: "Building a Robotics Marketplace Under Real Launch Pressure",
    link: "https://universalaiservices.com/",
    thumbnail: "/uais.png",
    caption:
      "Context: A robotics consultancy preparing for a major industry event needed a digital infrastructure layer to support product visibility, consultations, and future sales workflows. Problem: Their existing web presence did not support product exploration, customer engagement, or structured service offerings, and the event deadline created real launch pressure. Solution: We designed and deployed a full digital marketplace architecture, including product catalog structures, consultation booking flows, and scalable backend systems built for operational use, not just presentation. Outcome: The consultancy gained a structured digital foundation to present offerings, engage potential customers, and continue evolving their sales pipeline after the event.",
  },
  {
    title: "Robot Combat Federation",
    link: "https://robot-combat-federation.vercel.app/",
    thumbnail: "/rcf.png",
    caption:
      "Context: robotics league managing events and registrations. Problem: fragmented operations across tools. Solution: central platform for event pages and workflows. Outcome: smoother operations and less coordination overhead.",
  },
  {
    title: "legalAI",
    link: "https://legalai.dev/",
    thumbnail: "/legalai.png",
    caption:
      "Context: legal-tech product entering market. Problem: complex workflow value was difficult to communicate. Solution: product-facing website and clearer user journey. Outcome: faster onboarding conversations with stakeholders.",
  },

  {
    title: "Empower",
    link: "https://empower-five.vercel.app/",
    thumbnail: "/empower.png",
    caption:
      "Context: services business refining positioning. Problem: generic agency messaging reduced trust. Solution: authority-led messaging and structured conversion path. Outcome: higher quality inquiries and better fit clients.",
  },
  {
    title: "Lilia",
    link: "https://liliadurham.com/",
    thumbnail: "/lilia.png",
    caption:
      "Context: personal brand with premium offer. Problem: narrative lacked conversion structure. Solution: rebuilt page hierarchy around trust and action. Outcome: clearer offer perception and stronger booking intent.",
  },
  {
    title: "Coco",
    link: "https://joincoco.app/",
    thumbnail: "/coco.png",
    caption:
      "Context: early product validating demand. Problem: disconnect between product story and go-to-market page. Solution: aligned brand site with product outcomes. Outcome: faster market communication and cleaner handoff to sales.",
  },
  {
    title: "Lunina",
    link: "https://lumina-fawn.vercel.app/",
    thumbnail: "/lumina2.png",
    caption:
      "Context: new brand preparing launch. Problem: beautiful visuals but weak operational path for inquiries. Solution: introduced conversion-focused page logic. Outcome: better lead capture and clearer next steps for users.",
  },
  {
    title: "Phono",
    link: "https://phono-web.vercel.app/",
    thumbnail: "/phono.png",
    caption:
      "Context: product and web presence needed consistency. Problem: fragmented user experience across touchpoints. Solution: unified digital system and messaging. Outcome: improved clarity across product and acquisition channels.",
  },
  {
    title: "Pupa Ventures ",
    link: "https://pupa-ventures.vercel.app",
    thumbnail: "/legal.png",
    caption:
      "Context: venture initiative launching multiple offerings. Problem: difficult to present direction without operational confusion. Solution: structured website system with clearer routes. Outcome: easier partner and client communication.",
  },

  {
    title: "TopShotGolfing",
    link: "https://topshotgolfing.com",
    thumbnail: "/topshot.png",
    caption:
      "Context: service business improving local acquisition. Problem: site lacked trust signals and conversion flow. Solution: rebuilt pages around services and action paths. Outcome: stronger local credibility and smoother inquiries.",
  },
  {
    title: "SF Playground",
    link: "https://sfplayground.vercel.app/",
    thumbnail: "/sfplayground.png",
    caption:
      "Context: community platform with active users. Problem: discovery and navigation created friction. Solution: simplified structure and core user paths. Outcome: better usability and faster access to key actions.",
  },

  {
    title: "Pupa Ventures_ ",
    link: "https://pupa-ventures.vercel.app",
    thumbnail: "/pupa.png",
    caption:
      "Context: growth-stage brand refining online infrastructure. Problem: scattered assets slowed execution. Solution: consolidated site system and clearer architecture. Outcome: faster iteration cycles and operational clarity.",
  },
];
