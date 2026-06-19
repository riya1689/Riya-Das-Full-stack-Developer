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
          I am an aspiring Software Engineer with a strong foundation in C, C++, Object-Oriented Programming, Data Structures, and Algorithms. 
          I enjoy solving complex problems, optimizing solutions, and building scalable software applications that deliver real-world value.
        </p>
        <p>
         My primary expertise includes JavaScript, TypeScript, Next.js, React, Node.js, Express.js, PostgreSQL, and modern web development practices. Through academic and personal projects, 
         I have developed full-stack applications featuring RESTful APIs, JWT authentication, Role-Based Access Control (RBAC), payment gateway integrations, and third-party service integrations.
        </p>
        <p>
          I am passionate about designing scalable system architectures and improving application performance. Currently, I am seeking Software Engineer and Full-Stack Developer opportunities where I can contribute to impactful products, collaborate with experienced teams,
           and continue growing as a software professional.
        </p>
      </div>
    </section>
  );
}
