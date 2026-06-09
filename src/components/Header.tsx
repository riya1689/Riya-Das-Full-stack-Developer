"use client";

import React from "react";
import Image from "next/image";

interface HeaderProps {
  activeSection: string;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Header({ activeSection, theme, toggleTheme }: HeaderProps) {
  // Format section ID for display
  const formatSectionName = (id: string) => {
    switch (id) {
      case "about":
        return "About Me";
      case "experience":
        return "Experience";
      case "projects":
        return "Projects";
      case "skills":
        return "Skills & Technologies";
      case "contact":
        return "Contact";
      case "interests_and_explorations":
        return "Interests & Explorations";
      case "achievements":
        return "Achievements";
      default:
        return "About Me";
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40 transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-6 py-3 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Left Side: Avatar & Riya.ai Button */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-primary rounded-full blur-sm opacity-50 group-hover:opacity-100 transition duration-300" />
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background">
              <Image
                src="/riya.png"
                alt="Developer Avatar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* <button
            onClick={() => alert("Riya.ai features are coming soon!")}
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
              </span>
              Riya.ai
            </span>
          </button> */}
        </div>

        {/* Right Side: Active Section Display & Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Active Section Display */}
          <span className="hidden sm:inline-flex items-center rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accent-foreground border border-primary/20 transition-all duration-300">
            {formatSectionName(activeSection)}
          </span>

          {/* Light/Dark Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full border border-border p-2 hover:bg-muted text-foreground transition-all active:scale-95 cursor-pointer"
          >
            {theme === "light" ? (
              // Moon Icon (Dark Mode Button)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              // Sun Icon (Light Mode Button)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21m-16.78 6.78l1.58-1.58M16.22 5.78l1.58-1.58M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
