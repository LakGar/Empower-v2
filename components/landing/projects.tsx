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
  },
  {
    title: "Legal AI",
    link: "https://legalai.dev/",
    thumbnail: "/legalai.png",
  },

  {
    title: "Universal AI Services",
    link: "https://universalaiservices.com/",
    thumbnail: "/uais.png",
  },
  {
    title: "Empower",
    link: "https://empower-five.vercel.app/",
    thumbnail: "/empower.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },

  {
    title: "legalAI",
    link: "https://legalai.dev/",
    thumbnail: "/legal.png",
  },
  {
    title: "Robot Combat Federation",
    link: "https://robot-combat-federation.vercel.app/",
    thumbnail: "/rcf.png",
  },
  {
    title: "Phono",
    link: "https://phono-web.vercel.app/",
    thumbnail: "/phono.png",
  },
  {
    title: "Lunina",
    link: "https://lumina-fawn.vercel.app/",
    thumbnail: "/lumina.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "TopShotGolfing",
    link: "https://topshotgolfing.com",
    thumbnail: "/topshot.png",
  },
  {
    title: "SF Playground",
    link: "https://sfplayground.vercel.app/",
    thumbnail: "/sfp.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
