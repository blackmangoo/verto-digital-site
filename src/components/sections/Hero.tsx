"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline word reveal
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, { y: 60, opacity: 0 });
        gsap.to(words, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Reduced motion fallback
      if (reducedMotion.current) {
        gsap.to(".gsap-scroll-indicator", { opacity: 1, duration: 0 });
        return;
      }

      // Scroll indicator reveal and loop
      gsap.to(".gsap-scroll-indicator", {
        opacity: 1,
        duration: 1,
        delay: 1,
      });
      gsap.fromTo(
        ".scroll-wheel",
        { y: 0, opacity: 1 },
        {
          y: 16,
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 0.1,
        }
      );

      // Fade out the text overlay as user scrolls down
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          y: -40,
          ease: "power2.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // --- VIDEO SCRUBBING LOGIC ---
      const video = videoRef.current;
      if (video && videoLoaded && !reducedMotion.current) {
        // Ensure video is paused so it doesn't auto-play
        video.pause();
        
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Smooth scrubbing
          onUpdate: (self) => {
            if (video.duration) {
              video.currentTime = self.progress * video.duration;
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [videoLoaded]);

  // Handle cached video metadata
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 1) {
      setVideoLoaded(true);
    }
  }, []);

  const headingText = "We build the digital systems local businesses need to grow.";
  const words = headingText.split(" ");

  const handleCTA = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "250vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-stone">
        
        {/* Native Video Background (Scrubbed via Scroll) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <video
            ref={videoRef}
            playsInline
            muted
            preload="auto"
            onLoadedMetadata={() => setVideoLoaded(true)}
            className="w-full h-full object-cover"
            src="/assets/hero-video-new.mp4"
          />
        </div>

        {/* Text overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-x-0 bottom-0 top-20 z-10 flex items-center"
        >
          <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* Left spacer for animation */}
              <div className="hidden lg:block" />

              {/* Right text column */}
              <div className="lg:pl-8">
                <div className="bg-stone/85 backdrop-blur-md p-8 lg:p-10 border border-ink/5 max-w-lg shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
                  <span className="eyebrow block mb-4">
                    Digital Growth Agency
                  </span>

                  <h1
                    ref={headingRef}
                    className="headline text-[clamp(36px,5vw,60px)] text-ink"
                  >
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className="word inline-block mr-[0.25em]"
                      >
                        {word}
                      </span>
                    ))}
                  </h1>

                  <p className="mt-5 text-[15px] text-grey leading-[1.75]">
                    You run the business. We build your website, online ordering, appointment bookings, and automated follow-ups.
                  </p>

                  <button
                    onClick={handleCTA}
                    className="group mt-8 inline-flex items-center gap-3 bg-ink text-stone px-7 py-3.5 text-[13px] tracking-[0.12em] uppercase hover:bg-night-light transition-colors duration-300"
                  >
                    Request a Custom Demo
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 opacity-0 gsap-scroll-indicator pointer-events-none">
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-ink drop-shadow-sm bg-stone/50 px-3 py-1 rounded-full backdrop-blur-sm">
            Scroll
          </span>
          <div className="w-[26px] h-[40px] rounded-full border border-ink/30 flex justify-center pt-1.5 relative backdrop-blur-sm bg-stone/20">
            <div className="scroll-wheel w-1 h-2 bg-umber rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
