"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(26,26,26,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg font-medium tracking-[0.2em] uppercase text-charcoal"
            >
              Verto<span className="text-brass">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm tracking-wider uppercase text-warm-grey hover:text-charcoal transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-sm tracking-wider uppercase bg-charcoal text-cream px-6 py-2.5 hover:bg-charcoal-light transition-colors duration-300"
              >
                Start a Conversation
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-6 h-[1.5px] bg-charcoal origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[1.5px] bg-charcoal"
              />
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-6 h-[1.5px] bg-charcoal origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-serif tracking-wide text-charcoal hover:text-brass transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 text-sm tracking-wider uppercase bg-charcoal text-cream px-8 py-3 hover:bg-charcoal-light transition-colors duration-300"
              >
                Start a Conversation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
