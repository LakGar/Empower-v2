"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
      text: "lakshay@theempowerweb.com",
      href: "mailto:lakshay@theempowerweb.com",
    },
    {
      icon: <Phone size={18} className="text-white/60" />,
      text: "(408) 598-1497",
      href: "tel:+14085981497",
    },
    {
      icon: <MapPin size={18} className="text-white/60" />,
      text: "San Francisco, CA",
    },
  ];

  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 bg-black border border-white/10">
      <div className="max-w-8xl mx-auto p-6 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-16 pb-8 md:pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-3 md:space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-2xl md:text-3xl font-bold">
                Empower
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              A modern web development company specializing in creating
              powerful, scalable, and innovative digital solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">
                {section.title}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-sm md:text-base text-white/70 hover:text-white transition-colors"
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
          <div className="min-w-0">
            <h4 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 min-w-0">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm md:text-base text-white/70 hover:text-white transition-colors min-w-0 flex-1"
                      style={{
                        wordBreak: "break-all",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm md:text-base text-white/70 hover:text-white transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-6 md:my-8" />

        {/* Footer bottom */}
        <div className="flex justify-center items-center text-xs md:text-sm">
          {/* Copyright */}
          <p className="text-white/70 text-center text-xs md:text-sm">
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
