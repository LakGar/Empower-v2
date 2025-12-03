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

// TODO: Replace with your actual project portfolio
// Update these with real projects, screenshots, and links
export const products = [
  {
    title: "E-Commerce Platform",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Mobile App",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    title: "Corporate Website",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  },
  {
    title: "Web Application",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
  {
    title: "Portfolio Site",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
];
