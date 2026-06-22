"use client";

import React from "react";
import Image from "next/image";
import { Contact } from "./Contact";

// Customize these contact links/numbers as needed
const CONTACT_PHONE = "+8801521583711"; 
const CONTACT_WHATSAPP = "https://wa.me/8801521583711"; 
//const CONTACT_FACEBOOK = "https://facebook.com/riya.das.profile"; 

interface HeroProps {
  activeSection: string;
}

export function Hero({ activeSection }: HeroProps) {
  return (
    <header className="lg:sticky lg:top-[73px] lg:flex lg:max-h-[calc(100vh-73px)] lg:w-[42%] lg:flex-col lg:justify-start lg:gap-8 lg:py-12 transition-colors duration-300">
      <div>
        {/* Profile Avatar and Name Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-center gap-3 mb-8 md:mb-12">
          {/* Left on md+, Bottom on mobile, Stacked on lg+ */}
          <div className="order-2 md:order-1 lg:order-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
              <a href="/">Riya Das</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-600 dark:text-teal-400 sm:text-xl">
              Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-600 dark:text-slate-400 text-sm">
              A CSE Grad. Specialized in JavaScript (Node JS, Express JS, React JS, Next JS, Typescript) | Database Management (PostgreSQL, MongoDB). AI/ML Enthusiast. Problem Solver.
            </p>

            {/* Social Links & Resume (placed directly below short description) */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-5" aria-label="Social media">
                {/* GitHub */}
                <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="https://github.com/riya1689"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="https://www.linkedin.com/in/riya-das8916/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>

                {/* Codeforces */}
                <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="https://codeforces.com/profile/Riya1689"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Codeforces"
                  title="Codeforces"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <rect x="2" y="10" width="4.5" height="12" rx="1" />
                    <rect x="9.75" y="2" width="4.5" height="20" rx="1" />
                    <rect x="17.5" y="6" width="4.5" height="16" rx="1" />
                  </svg>
                </a>

                {/* Twitter / X */}
                {/* <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a> */}

                {/* Email */}
                <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href="mailto:riya.das.dev26@gmail.com"
                  aria-label="Email"
                  title="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>

                {/* Mobile Phone */}
                <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href={`tel:${CONTACT_PHONE}`}
                  aria-label="Phone"
                  title="Call Me"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.157-.441.009-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="WhatsApp"
                  title="WhatsApp Chat"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.83.497 3.59 1.442 5.13L2.06 22l5.034-1.32c1.487.81 3.162 1.24 4.91 1.24 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm5.72 13.91c-.24.68-1.22 1.26-1.84 1.34-.53.07-1.21.09-3.56-.88-3-1.24-4.94-4.29-5.09-4.49-.15-.2-1.18-1.57-1.18-3s.74-2.13 1-2.43c.26-.3.57-.37.76-.37.19 0 .38 0 .54.01.17.01.39-.06.61.47.23.55.78 1.9.85 2.05.07.15.12.33.02.53-.1.2-.15.3-.3.48-.15.18-.31.4-.44.54-.15.15-.3.32-.13.62.17.3.76 1.25 1.63 2.03.87.78 1.6-1.02 1.9-1.15.3-.13.56-.1.8.04.24.14 1.5.71 1.76.84.26.13.43.2.49.31.06.11.06.66-.18 1.34z" />
                  </svg>
                </a>

                {/* Facebook */}
                {/* <a
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  href={CONTACT_FACEBOOK}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                  title="Facebook Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a> */}
              </div>

              {/* View Full Résumé */}
              <div>
                <a
                  className="inline-flex items-center gap-1 font-semibold text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 hover:underline transition-colors group/resume"
                  href="https://drive.google.com/file/d/1I6McMSsElrPnd63RFU55srd72YVdeJuO/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Full Résumé
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover/resume:-translate-y-0.5 group-hover/resume:translate-x-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              {/* Compact Contact Form for Sidebar (Large displays only) */}
              <div className="hidden lg:block mt-2 border-t border-slate-200 dark:border-slate-800 pt-3">
                <Contact isSidebar={true} />
              </div>
            </div>
          </div>

          {/* Right on md+, Top on mobile, Stacked on lg+ */}
          <div className="order-1 md:order-2 lg:order-1 flex md:justify-end lg:justify-start justify-start">
            <div className="relative flex-shrink-0" style={{ width: "150px", height: "150px" }}>
              {/* Spinning gradient border */}
              <div className="absolute inset-0 rounded-full animate-[spin_4.5s_linear_infinite] bg-gradient-to-tr from-teal-400 via-primary to-teal-700 p-[5px]">
                <div className="h-full w-full rounded-full bg-background" />
              </div>
              {/* Profile Image (with simple fallback overlay) */}
              <div className="absolute inset-[5px] overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <Image
                  src="/riya.png"
                  alt="Riya profile picture"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation removed and placed on right-side vertically (Option B) */}
      </div>
    </header>
  );
}
