import React from "react";

interface Achievement {
  field: string;
  title: string;
  description: string;
  tags: string[];
}

export function Achievements() {
  const achievementsList: Achievement[] = [
    {
      field: "Competitive Programming",
      title: "Codeforces Pupil",
      description: "Achieved max 1216 ranked pupil on Codeforces.",
      tags: ["C++", "Data structure & Algorithm", "Time & Space complexity"]
    },
    {
      field: "Competitive Programming",
      title: "Codechef",
      description: "Achieved rating 1365 on Codechef.",
      tags: ["C++", "Data structure & Algorithm", "Time & Space complexity"]
    }
  ];

  return (
    <section id="achievements" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Achievements">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-100 lg:bg-transparent lg:backdrop-blur-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-slate-900 lg:dark:text-slate-200">
          Achievements
        </h2>
      </div>
      
      <div className="space-y-8">
        {achievementsList.map((item, idx) => (
          <div key={idx} className="group relative grid pb-1 transition-all sm:grid-cols-12 gap-4">
            {/* Left Side: Field */}
            <div className="sm:col-span-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 pt-1">
              {item.field}
            </div>
            {/* Right Side: Details */}
            <div className="sm:col-span-9">
              <h3 className="font-semibold text-base text-slate-900 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
              {/* Tags Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-teal-500/10 dark:bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

