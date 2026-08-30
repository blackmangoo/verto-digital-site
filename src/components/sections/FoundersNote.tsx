"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function FoundersNote() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.2 });

  return (
    <section ref={ref} className="bg-night text-stone py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
          {/* Left: Quote */}
          <div data-reveal>
            <span className="eyebrow-light block mb-10">
              From the Founder
            </span>

            <blockquote className="font-serif text-[clamp(22px,3vw,36px)] leading-[1.4] text-stone/90 tracking-[-0.01em]">
              <p>
                &ldquo;I spent years building AI systems &mdash; the kind that
                sit behind dashboards at well-funded companies. Machine learning
                pipelines, automation workflows, production infrastructure.
              </p>
              <p className="mt-6">
                But every time I looked at the businesses around me in Lahore
                &mdash; the clinics, workshops, restaurants, salons that
                actually run this country &mdash; I saw the same thing:
                excellent work hidden behind terrible websites and missed
                calls.
              </p>
              <p className="mt-6">
                Verto Digital exists because a well-run local business deserves
                the same quality of digital presence as a funded startup. Not a
                template. Not a system that breaks the week after launch.
                Something built with precision, by people who&rsquo;ll still
                be here next month.
              </p>
              <p className="mt-6">
                That&rsquo;s what we build. This site is the proof.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: Photo + Identity (offset lower) */}
          <div className="lg:mt-20" data-reveal>
            {/* Photo */}
            <div className="aspect-[3/4] max-w-sm overflow-hidden bg-night-light border border-white/[0.04]">
              <img 
                src="/assets/ammar-akbar-founder.jpg" 
                alt="Ammar Akbar, Founder of Verto Digital"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>

            <div className="mt-8">
              <p className="text-[15px] font-medium tracking-wide text-stone">
                Ammar Akbar
              </p>
              <p className="text-[11px] text-grey-light mt-1 tracking-[0.15em] uppercase">
                Founder &amp; CEO, Verto Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
