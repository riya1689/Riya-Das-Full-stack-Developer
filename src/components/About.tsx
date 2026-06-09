import React from "react";

export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
        <p>
          I am a software engineer specializing in building robust, high-performance, and inclusive web products. 
          I operate at the intersection of engineering and design, focusing on delivering clean, modular code alongside 
          pixel-perfect, accessible user interfaces.
        </p>
        <p>
          Currently, I lead frontend development on a core platform team, where I scale web architectures, optimize build tools, 
          and design reusable component libraries that serve millions of daily active users. I collaborate closely with product managers, 
          UX designers, and infrastructure teams to ensure our user experiences are fast, modern, and universally accessible.
        </p>
        <p>
          Throughout my career, I've engineered products across startup landscapes and mid-to-large-size organizations. 
          I believe that code shouldn't just be functional—it should be optimized to drive business metrics, lower operational risk, 
          and provide real, measurable value to end users.
        </p>
      </div>
    </section>
  );
}
