import React from "react";

interface InterestExplorationCategory {
  title: string;
  description: string;
  items: string[];
}

export function InterestsExplorations() {
  const categories: InterestExplorationCategory[] = [
    {
      title: "Emerging Technologies",
      description: "Beyond my professional work with web technologies, I'm passionate about exploring new fields. I dedicate my personal time to learning about Artificial Intelligence and high-performance backend systems, applying my knowledge to small personal projects.",
      items: ["Artificial Intelligence", "High-performance backend systems", "Machine Learning"]
    }
  ];

  return (
    <section id="interests_and_explorations" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Interest & Explorations">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Interest & Explorations
        </h2>
      </div>
      <div className="space-y-6">
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          Here are some of the areas and technologies I am actively exploring and learning about outside of my core daily work.
        </p>
        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-teal-500/10 dark:bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
