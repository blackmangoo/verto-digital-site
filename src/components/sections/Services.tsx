"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

const services = [
  {
    number: "01",
    title: "High-Conversion Websites",
    description:
      "Sites that load fast, read well, and make the phone ring. We build premium digital storefronts that turn casual visitors into paying customers.",
  },
  {
    number: "02",
    title: "AI Reception & Lead Assistants",
    description:
      "An assistant that picks up when you can\u2019t \u2014 and qualifies the lead before you call back.",
  },
  {
    number: "03",
    title: "WhatsApp Automation",
    description:
      "Automated follow-ups that feel personal, sent at the right time, on the channel your customers use.",
  },
  {
    number: "04",
    title: "Online Ordering & Booking",
    description:
      "Custom apps and portals for restaurants, clinics, and salons. Ditch the 30% commission fees from delivery apps and own your customer data directly.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = sectionRef.current?.querySelectorAll(".service-row");
      if (!rows) return;

      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-night text-stone py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <span className="eyebrow-light block mb-5">
            What We Do
          </span>
          <h2 className="headline text-[clamp(28px,4vw,48px)] text-stone">
            Four things. Done properly.
          </h2>
        </div>

        {/* Service rows */}
        <div className="border-t border-white/[0.06]">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-row group border-b border-white/[0.06] py-10 lg:py-12 hover:pl-2 transition-all duration-500 cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-4 lg:gap-12 items-start">
                <span className="text-[13px] text-grey group-hover:text-umber transition-colors duration-500 font-medium">
                  {service.number}
                </span>
                <h3 className="text-[20px] lg:text-[24px] font-medium tracking-tight text-stone">
                  {service.title}
                </h3>
                <p className="text-[15px] text-grey-light leading-[1.75] lg:max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
