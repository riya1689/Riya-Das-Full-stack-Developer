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
          I am a Software Engineer focused on building scalable, security-first full-stack web applications by leveraging Data Structures
          & Algorithms (DSA) to optimize runtime efficiency and first-load performance.
        </p>
        <p>
         I architect clean, modular frontends using Next.js (App Router) and React, paired with event-driven, type-safe backends powered by Express.js and TypeScript.
         On the data and infrastructure layer, I optimize relational and non-relational ecosystems using PostgreSQL, MongoDB, and Prisma ORM, alongside Redis for distributed caching and Docker for environment-agnostic containerization. Experienced in implementing secure authentication, third-party & API integrations using Better Auth, Stripe, SSL Commerz, Gemini AI, Google meet , and scalable state management using Redux Toolkit and Zustand.
        </p>
        <p>
         Dedicated to building scalable, maintainable systems with a strong emphasis on performance, reliability, and security.
        </p>
      </div>
    </section>
  );
}
