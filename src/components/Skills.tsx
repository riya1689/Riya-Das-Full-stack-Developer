import React from "react";

interface SkillCategory {
  title: string;
  items: string[];
}

export function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Zustand"],
    },
    {
      title: "Backend & Databases",
      items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Mongoose", "Prisma", "REST APIs"],
    },
    {
      title: "DevOps & Cloud",
      items: ["Docker", "Vercel"],
    },
    {
      title: "UI & Styling",
      items: ["Tailwind CSS", "shadcn/ui", "CSS3 / Sass", "HTML5", "Framer Motion", "Figma"],
    }
  ];

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills and technologies">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="space-y-8">
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          I maintain a modern development stack centered around type-safety, containerized workflows, and cloud-native deployments.
        </p>
        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-teal-500/10 dark:bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300"
                  >
                    {skill}
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
