"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const problems = [
  {
    number: "01",
    statement: "Customers call.",
    emphasis: "Nobody answers.",
  },
  {
    number: "02",
    statement: "Your website loads,",
    emphasis: "but says nothing.",
  },
  {
    number: "03",
    statement: "Enquiries come in.",
    emphasis: "Follow-ups don\u2019t go out.",
  },
];

export default function ProblemStatement() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.2, y: 50 });

  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-16" data-reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-warm-grey">
            The Problem
          </span>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {problems.map((item) => (
            <div key={item.number} className="flex items-start gap-6 lg:gap-10" data-reveal>
              <span className="text-sm text-brass font-medium mt-2 shrink-0">
                {item.number}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-charcoal">
                {item.statement}
                <br />
                <span className="text-warm-grey">{item.emphasis}</span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
