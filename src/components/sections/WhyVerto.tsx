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
    <section ref={ref} id="about" className="py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="max-w-3xl">
          <span className="eyebrow block mb-5" data-reveal>
            Why Us
          </span>
          <h2
            className="headline text-[clamp(28px,4vw,48px)] text-ink mb-20 lg:mb-28"
            data-reveal
          >
            Not bigger. Better.
          </h2>

          <div className="space-y-20 lg:space-y-24">
            {differentiators.map((item) => (
              <div
                key={item.number}
                data-reveal
                className="relative pl-20 lg:pl-28"
              >
                {/* Watermark number */}
                <span className="absolute left-0 top-0 text-[64px] lg:text-[80px] font-serif leading-none text-stone-dark select-none">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-[20px] lg:text-[24px] font-medium tracking-tight text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-grey leading-[1.75] max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
