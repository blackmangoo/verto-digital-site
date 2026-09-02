"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const differentiators = [
  {
    number: "01",
    title: "We do the heavy lifting.",
    description:
      "No technical headaches. We don't just hand you software and walk away. We build it, launch it, and manage it so you can focus entirely on running your business.",
  },
  {
    number: "02",
    title: "Ready-to-launch solutions.",
    description:
      "We don't deal in endless meetings and 6-month timelines. We build working, premium systems fast, so you can start getting customers online this week.",
  },
  {
    number: "03",
    title: "Month two matters more than month one.",
    description:
      "Anyone can launch a site. We stick around for the part most agencies skip \u2014 monitoring, optimising, and picking up the phone when something breaks at 11pm.",
  },
  {
    number: "04",
    title: "Built for Pakistan, not imported.",
    description:
      "We understand local business because we are one. Lahore traffic, load-shedding uptime, WhatsApp-first customers \u2014 we build for the real conditions, not a Silicon Valley playbook.",
  },
];

export default function WhyVerto() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.15 });

  return (
    <section ref={ref} className="py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="max-w-3xl">
          <span className="eyebrow block mb-5" data-reveal>
            Why Us
          </span>
          <h2
            className="headline text-[clamp(28px,4vw,48px)] text-ink mb-20 lg:mb-28"
            data-reveal
          >
            Your digital growth partners.
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
