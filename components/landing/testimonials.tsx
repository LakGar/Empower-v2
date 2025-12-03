"use client";

import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The website they built for us is absolutely stunning. The modern design and smooth performance have significantly increased our online conversions.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Marketing Director",
  },
  {
    text: "Working with them was seamless. They delivered a fast, responsive website that perfectly captures our brand identity and vision.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "CEO",
  },
  {
    text: "Their attention to detail and technical expertise is outstanding. Our new web application has transformed how we serve our customers.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Product Manager",
  },
  {
    text: "The team understood our needs perfectly and delivered beyond expectations. The website is fast, beautiful, and user-friendly.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Founder",
  },
  {
    text: "Incredible work! They built us a scalable platform that has grown with our business. Highly professional and reliable.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "CTO",
  },
  {
    text: "The development process was smooth and collaborative. They delivered a modern, high-performance website on time and on budget.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Operations Manager",
  },
  {
    text: "Our new website has dramatically improved our online presence. The design is beautiful and the user experience is exceptional.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Brand Manager",
  },
  {
    text: "They transformed our outdated website into a modern, conversion-focused platform. Our sales have increased significantly since launch.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Director",
  },
  {
    text: "Outstanding web development services! They created an e-commerce platform that's both powerful and easy to manage.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="relative bg-black py-20 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/3 via-transparent to-pink-500/3 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.4, 0.25, 1] as const,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
            <span className="text-sm text-white/60 tracking-wide">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
              What Our
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
              Clients Say
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
