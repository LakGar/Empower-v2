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
    caption: "Web product and marketing site.",
  },
  {
    title: "Universal AI Services",
    link: "https://universalaiservices.com/",
    thumbnail: "/uais.png",
    caption: "AI services company website and positioning.",
  },
  {
    title: "Robot Combat Federation",
    link: "https://robot-combat-federation.vercel.app/",
    thumbnail: "/rcf.png",
    caption: "Event and league platform for robot combat.",
  },
  {
    title: "legalAI",
    link: "https://legalai.dev/",
    thumbnail: "/legalai.png",
    caption: "Legal AI product for document and research workflows.",
  },

  {
    title: "Empower",
    link: "https://empower-five.vercel.app/",
    thumbnail: "/empower.png",
    caption: "Consulting and services landing page.",
  },
  {
    title: "Lilia",
    link: "https://liliadurham.com/",
    thumbnail: "/lilia.png",
    caption: "Landing and product experience.",
  },
  {
    title: "Coco",
    link: "https://joincoco.app/",
    thumbnail: "/coco.png",
    caption: "Web application and brand site.",
  },
  {
    title: "Lunina",
    link: "https://lumina-fawn.vercel.app/",
    thumbnail: "/lumina2.png",
    caption: "Landing and product experience.",
  },
  {
    title: "Phono",
    link: "https://phono-web.vercel.app/",
    thumbnail: "/phono.png",
    caption: "Web application and brand site.",
  },
  {
    title: "Pupa Ventures ",
    link: "https://pupa-ventures.vercel.app",
    thumbnail: "/legal.png",
    caption: "Product or brand site.",
  },

  {
    title: "TopShotGolfing",
    link: "https://topshotgolfing.com",
    thumbnail: "/topshot.png",
    caption: "Golf business website.",
  },
  {
    title: "SF Playground",
    link: "https://sfplayground.vercel.app/",
    thumbnail: "/sfplayground.png",
    caption: "Local discovery or community platform.",
  },

  {
    title: "Pupa Ventures_ ",
    link: "https://pupa-ventures.vercel.app",
    thumbnail: "/pupa.png",
    caption: "Product or brand site.",
  },
];
