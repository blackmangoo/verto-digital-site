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
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.2, y: 40 });

  return (
    <section ref={ref} className="py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="max-w-3xl">
          <span className="eyebrow block mb-16" data-reveal>
            The Problem
          </span>

          <div className="space-y-20 lg:space-y-24">
            {problems.map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-6 lg:gap-10"
                data-reveal
              >
                <span className="text-[13px] text-umber font-medium mt-3 shrink-0">
                  {item.number}
                </span>
                <h2 className="headline text-[clamp(28px,4vw,48px)] text-ink">
                  {item.statement}
                  <br />
                  <span className="text-grey">{item.emphasis}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
