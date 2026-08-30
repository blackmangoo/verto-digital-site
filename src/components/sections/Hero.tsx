"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

const TOTAL_FRAMES = 192;
const FRAME_PATH = "/assets/hero-frames/frame_";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const reducedMotion = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  // Preload all frames
  const preloadFrames = useCallback(async () => {
    const frames: HTMLImageElement[] = [];
    let loaded = 0;

    const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const num = String(i + 1).padStart(3, "0");
        img.src = `${FRAME_PATH}${num}.webp`;
        img.onload = () => {
          frames[i] = img;
          loaded++;
          setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          resolve();
        };
        img.onerror = () => {
          loaded++;
          setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          resolve();
        };
      });
    });

    await Promise.all(promises);
    framesRef.current = frames;
    setIsLoaded(true);
  }, []);

  // Render frame to canvas
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const frame = framesRef.current[index];
    if (!canvas || !ctx || !frame) return;

    canvas.width = 960;
    canvas.height = 540;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
    currentFrameRef.current = index;
  }, []);

  // Init
  useEffect(() => {
    preloadFrames();
  }, [preloadFrames]);

  // GSAP animations after load
  useEffect(() => {
    if (!isLoaded) return;

    // Draw first frame immediately
    renderFrame(0);

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

      // Scroll indicator reveal and loop
      gsap.to(".gsap-scroll-indicator", {
        opacity: 1,
        duration: 1,
        delay: 1,
      });
      gsap.fromTo(
        ".scroll-line",
        { yPercent: -100 },
        {
          yPercent: 200,
          duration: 1.5,
          ease: "circ.inOut",
          repeat: -1,
        }
      );

      // Reduced motion: just show last frame with fade
      if (reducedMotion.current) {
        renderFrame(TOTAL_FRAMES - 1);
        return;
      }

      // Scroll-scrub through frames
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            Math.floor(self.progress * (TOTAL_FRAMES - 1)),
            TOTAL_FRAMES - 1
          );
          if (frameIndex !== currentFrameRef.current) {
            renderFrame(frameIndex);
          }
        },
      });

      // Fade out the text overlay as user scrolls past 60%
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          y: -40,
          ease: "power2.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "40% top",
            end: "70% top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoaded, renderFrame]);

  const headingText = "Precision online. Finally.";
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
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Loading bar */}
        {!isLoaded && (
          <div className="absolute top-0 left-0 right-0 z-30 h-[2px] bg-stone-dark">
            <div
              className="h-full bg-umber transition-all duration-200 ease-out origin-left"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        )}

        {/* Canvas - animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>

        {/* Text overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-10 flex items-center"
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
                    We build websites and AI automation for local businesses
                    that take their craft seriously.
                  </p>

                  <button
                    onClick={handleCTA}
                    className="group mt-8 inline-flex items-center gap-3 bg-ink text-stone px-7 py-3.5 text-[13px] tracking-[0.12em] uppercase hover:bg-night-light transition-colors duration-300"
                  >
                    Start a Conversation
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
        {isLoaded && (
          <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 opacity-0 gsap-scroll-indicator pointer-events-none">
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-grey">
              Scroll
            </span>
            <div className="w-px h-16 relative overflow-hidden flex flex-col justify-start">
              <div className="scroll-line absolute top-0 left-0 w-full h-1/2 bg-umber" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
