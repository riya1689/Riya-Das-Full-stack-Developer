// import React from "react";

// interface Job {
//   id: number;
//   period: string;
//   role: string;
//   company: string;
//   companyUrl: string;
//   description: string[];
//   technologies: string[];
// }

// export function Experience() {
//   const experiences: Job[] = [
//     {
//       id: 1,
//       period: "2024 — Present",
//       role: "Lead Full-Stack Engineer",
//       company: "ApexSaaS",
//       companyUrl: "https://example.com",
//       description: [
//         "Architected and deployed a multi-tenant client portal using Next.js and Node.js, growing active user base by 30% month-over-month.",
//         "Optimized database queries and API response times by 35% through Redis caching and PostgreSQL indexing strategies.",
//         "Streamlined development lifecycle by containerizing applications using Docker and setting up CI/CD pipelines, slashing release time by 50%."
//       ],
//       technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
//     },
//     {
//       id: 2,
//       period: "2022 — 2024",
//       role: "Software Engineer",
//       company: "InnoTech Solutions",
//       companyUrl: "https://example.com",
//       description: [
//         "Developed and maintained critical microservices handling 500k+ daily transactions with 99.99% uptime.",
//         "Refactored legacy frontend codebase to React and Tailwind CSS, improving application loading speed by 25% via code-splitting.",
//         "Integrated secure multi-factor authentication (MFA) and OAuth 2.0 via Auth0, cutting authentication-related support tickets by 40%."
//       ],
//       technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Auth0", "Jest", "GitHub Actions"],
//     },
//     {
//       id: 3,
//       period: "2020 — 2022",
//       role: "Associate Developer",
//       company: "ByteWave Studio",
//       companyUrl: "https://example.com",
//       description: [
//         "Collaborated with product designers to ship responsive, pixel-perfect layouts for 12 client portfolios and e-commerce storefronts.",
//         "Built custom cart logic with client-side state management (Redux Toolkit), enhancing user engagement metrics by 15%.",
//         "Automated PDF report generation and email notifications, saving client operation teams 10+ manual work hours per week."
//       ],
//       technologies: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Node.js", "Nodemailer"],
//     }
//   ];

//   return (
//     <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
//       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
//         <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
//           Experience
//         </h2>
//       </div>
//       <div>
//         <ol className="group/list space-y-12">
//           {experiences.map((job) => (
//             <li key={job.id}>
//               <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
//                 {/* Background card hover glow */}
//                 <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 dark:lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] lg:group-hover:drop-shadow-lg" />
                
//                 {/* Time Period */}
//                 <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={job.period}>
//                   {job.period}
//                 </header>

//                 {/* Job Info */}
//                 <div className="z-10 sm:col-span-6">
//                   <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
//                     <div>
//                       <a
//                         className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 group/link text-base"
//                         href={job.companyUrl}
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         aria-label={`${job.role} at ${job.company}`}
//                       >
//                         <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
//                         <span>
//                           {job.role} ·{" "}
//                           <span className="inline-block">
//                             {job.company}
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                               className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
//                               aria-hidden="true"
//                             >
//                               <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
//                             </svg>
//                           </span>
//                         </span>
//                       </a>
//                     </div>
//                   </h3>
                  
//                   {/* Descriptions with Metrics */}
//                   <ul className="mt-4 list-disc list-outside pl-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
//                     {job.description.map((bullet, idx) => (
//                       <li key={idx} className="leading-relaxed">
//                         {bullet}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Tech Stack Tags */}
//                   <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
//                     {job.technologies.map((tech) => (
//                       <li key={tech} className="flex items-center rounded-full bg-teal-500/10 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
//                         {tech}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   );
// }
