"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const differentiators = [
  {
    number: "01",
    title: "Fewer clients, better work.",
    description:
      "We take on a limited number of projects at a time. Every business we work with gets our full attention, not a junior on autopilot.",
  },
  {
    number: "02",
    title: "Direct access to the people building.",
    description:
      "No account managers, no ticket queues. You talk to the people writing the code and designing the systems.",
  },
  {
    number: "03",
    title: "We don\u2019t disappear after launch.",
    description:
      "Most agencies ship and move on. We stay \u2014 monitoring, optimising, and picking up the phone when something needs fixing.",
  },
  {
    number: "04",
    title: "This site is the proof.",
    description:
      "We use the same tools, standards, and attention to detail on our own site that we bring to yours. No shortcuts.",
  },
];

export default function WhyVerto() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.15 });

  return (
    <section ref={ref} id="about" className="py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-20" data-reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey">
            Why Us
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-charcoal">
            Not bigger. Better.
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {differentiators.map((item) => (
            <div
              key={item.number}
              data-reveal
              className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 lg:gap-8"
            >
              <span className="text-5xl lg:text-6xl font-serif text-cream-dark">
                {item.number}
              </span>
              <div>
                <h3 className="text-xl lg:text-2xl font-medium tracking-tight text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-grey leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
