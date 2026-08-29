"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { Globe, Bot, MessageCircle, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Sites that load fast, read well, and make the phone ring. Built with care, not from a template.",
  },
  {
    icon: Bot,
    title: "AI Reception & Lead Assistants",
    description:
      "An assistant that picks up when you can\u2019t \u2014 and qualifies the lead before you call back.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Automated follow-ups that feel personal, sent at the right time, on the channel your customers actually use.",
  },
  {
    icon: BarChart3,
    title: "Business Automation & Reporting",
    description:
      "Less paperwork, more clarity. Dashboards that tell you what\u2019s working and what needs attention.",
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={ref} id="services" className="py-32 lg:py-40 bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20" data-reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey-light">
            What We Do
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
            Four things. Done properly.
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-reveal
                className="group bg-charcoal p-10 lg:p-14 hover:bg-charcoal-light transition-colors duration-500"
              >
                <Icon
                  className="w-6 h-6 text-brass mb-8 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-medium tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-warm-grey-light leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
