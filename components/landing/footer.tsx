"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  // Footer link data
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "Frontend Development", href: "#services" },
        { label: "Backend Development", href: "#services" },
        { label: "Full Stack Solutions", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#about" },
        { label: "Portfolio", href: "/work" },
        {
          label: "Contact",
          href: "#contact",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-white/60" />,
      text: "hello@empower.dev",
      href: "mailto:hello@empower.dev",
    },
    {
      icon: <Phone size={18} className="text-white/60" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={18} className="text-white/60" />,
      text: "San Francisco, CA",
    },
  ];

  // Social media icons - Update these with your actual social media links
  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/company/empower" },
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/LakGar" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://twitter.com/empower" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/empower" },
    { icon: <Globe size={20} />, label: "Website", href: "https://empowerv2.vercel.app" },
  ];

  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden m-8 bg-black border border-white/10">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-3xl font-bold">Empower</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              A modern web development company specializing in creating
              powerful, scalable, and innovative digital solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-white/40 animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 hover:text-white transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-white/60">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/70 text-center md:text-left">
            &copy; {new Date().getFullYear()} Empower. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-120 -mt-52 -mb-36">
        <TextHoverEffect text="EMPOWER" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
