"use client";

import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/Spotlight";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
//import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { InterestsExplorations } from "@/components/InterestExploration";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

const navItems = [
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "interests_and_explorations", name: "Interests & Explorations" },
  { id: "achievements", name: "Achievements" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Toggle theme class on html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Scroll spy scroll listener using viewport bounding rect coordinates
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "projects", "skills", "interests_and_explorations", "achievements"];
      if (window.innerWidth < 1024) {
        sectionIds.push("contact");
      }

      // Check which section's top boundary is closest to the scan threshold (250px from top)
      let currentActive = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above or near the 250px threshold from viewport top, mark active
          if (rect.top <= 250) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative min-h-screen bg-background font-sans antialiased text-foreground/80 selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      {theme === "dark" && <Spotlight />}
      
      {/* Right-side vertical dot navigation (Option B - Desktop displays only) */}
      <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-50 animate-fade-in" aria-label="Vertical navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center justify-center p-2"
            aria-label={`Scroll to ${item.name}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900/90 text-slate-100 text-xs font-semibold py-1 px-2.5 rounded shadow-lg whitespace-nowrap dark:bg-slate-100 dark:text-slate-900 border border-slate-700/30">
              {item.name}
            </span>
            {/* Dot indicator */}
            <span
              className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-teal-500 border-teal-500 scale-125 shadow-md shadow-teal-500/50"
                  : "bg-transparent border-slate-400 dark:border-slate-600 hover:border-slate-800 dark:hover:border-slate-200"
              }`}
            />
          </a>
        ))}
      </nav>

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero activeSection={activeSection} />
          
          <main className="pt-24 lg:w-[48%] lg:py-24 space-y-24">
            <About />
            {/*Experience />*/}
            <Projects />
            <Skills />
            <InterestsExplorations />
            <Achievements />
            {/* Contact Form: Only rendered on screens under lg breakpoint (mobile/tablet/small laptops) */}
            <div className="block lg:hidden">
              <Contact />
            </div>
            
            {/* Footer */}
            <footer className="mt-20 max-w-md text-sm text-slate-500">
              <p className="text-center">
                 © 2026 Riya Das. All rights reserved.
              </p>
            </footer>
          </main>
        </div>  
      </div>
    </div>
  );
}
