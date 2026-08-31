"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const projects = [
  {
    id: "protomotive",
    name: "Protomotive Car Care Studio",
    industry: "Automotive Detailing & Styling",
    tagline: "A premium, high-conversion landing page for Lahore's top-tier automotive detailing and protection studio.",
    image: "/assets/work/protomotive.png",
    link: "https://protomotive-demo.vercel.app",
    features: ["Cinematic Header UX", "Editorial & High-Contrast Design", "Conversion-Optimized Flow"],
  },
  {
    id: "lumina",
    name: "Lumina Dental Studio",
    industry: "Premium Healthcare & Aesthetics",
    tagline: "A high-conversion, luxury dental clinic landing page designed to replace clinical anxiety with spa-like trust.",
    image: "/assets/work/lumina.jpg",
    link: "https://dental-clinic-demo-flame.vercel.app",
    features: ["Frictionless WhatsApp Conversion", "Zero-Jank Editorial Motion", "Trust-Building Architecture"],
  }
];

export default function SampleWork() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="work" className="py-32 lg:py-48 bg-stone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="mb-20 lg:mb-32" data-reveal>
          <span className="eyebrow block mb-5">Our Work</span>
          <h2 className="headline text-[clamp(28px,4vw,48px)] text-ink">
            Selected projects.
          </h2>
        </div>

        <div className="flex flex-col gap-32 lg:gap-48">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              data-reveal
            >
              {/* Image Side */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full lg:w-3/5 group relative block aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-stone-dark"
              >
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={`${project.name} preview`} 
                  className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </a>

              {/* Text Side */}
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <span className="eyebrow text-grey mb-4">{project.industry}</span>
                <h3 className="headline text-[clamp(24px,3vw,36px)] text-ink mb-6">
                  {project.name}
                </h3>
                <p className="text-[15px] text-grey leading-[1.75] mb-8">
                  {project.tagline}
                </p>

                <ul className="flex flex-col gap-3 mb-10">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-ink font-medium">
                      <span className="text-umber mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase font-medium text-ink hover:text-umber transition-colors duration-300 nav-link"
                >
                  View Live Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
