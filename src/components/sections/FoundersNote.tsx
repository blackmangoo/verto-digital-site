"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function FoundersNote() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-charcoal text-cream">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div data-reveal>
            <div className="aspect-[3/4] bg-charcoal-light border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-2xl font-serif text-brass">V</span>
                </div>
                <p className="text-xs text-warm-grey tracking-wider uppercase">
                  Photo Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div data-reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-warm-grey-light">
              From the Founder
            </span>

            {/* TODO: Replace with real content once CEO provides bio */}
            <blockquote className="mt-8">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-cream/90">
                &ldquo;Founder&rsquo;s message will appear here &mdash;
                a personal note about why Verto Digital exists and what
                drives our work.&rdquo;
              </p>
            </blockquote>

            <div className="mt-10">
              <p className="text-sm font-medium tracking-wide">
                {/* TODO: Replace with actual name */}
                Founder&rsquo;s Name
              </p>
              <p className="text-xs text-warm-grey-light mt-1 tracking-wider uppercase">
                Founder &amp; CEO, Verto Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
