"use client";

import React, { useState, useRef, useEffect } from "react";

interface CaseStudy {
  problem: string;
  rationale: string;
  challenge: string;
}

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  gitUrl: string;
  mediaUrl: string;
  technologies: string[];
  caseStudy: CaseStudy;
}

export function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [clickedId, setClickedId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neighbo-Social Network Platform with AI",
      tagline: "AI integrated social networking and content monetization.",
      description: "Neighbo is a full-stack community platform that supports public and premium content, real-time interactions, user-generated posts, and monetization features, creating a trusted digital space for local communities. Built with scalability, performance, and future growth in mind.",
      liveUrl: "https://neighbo-frontend.vercel.app/",
      gitUrl: "https://github.com/riya1689/neighbo-frontend",
      mediaUrl: "https://youtu.be/3MTq2i5-ICY",
      technologies: ["Next.js", "Node.js", "Express.js", "TypeScript","PostgreSQL", "Prisma", "passport.js(Google OAuth)", "Gemini AI API", "SSL Commerz", "Express Rate Limit"],
      caseStudy: {
        problem: "Traditional social media feeds prioritize global viral content, drowning out hyper-local notices. Passionate neighborhood experts, local guides, and community educators lack standard micro-transaction systems to monetize premium guides, tutorials, or updates directly with their neighbors.Traditional networks leading to spam. Neighbors require secure, trustworthy content",
        rationale: "Next.js was selected for SSR and SEO.Node.js & Express.js for event driven, non-blocking I/O and allow high concurrency on a single thread. TypeScript prevents complie-time discrepancies. PostgreSQL was chosen for ACID-compliance database. Gemini 2.5 flash API selected for generate responses & act as Neighbo-AI.SSL Commerz sandbox supports payment gateway. Google OAuth for user authentication.",
        challenge: "Challenge A: Dynamic Algorithmic Feed Weighting & fast database query. \nSolution : Implemented Weighted Score Engine for feed ranking and take 100 post & 50 share post for fast query database. \n\nChallenge B: Concurrency & Callback Safety in SSLCommerz Payment. Fraud online payment callbacks create inconsistent State & concurrent double-clicks on callback redirects can trigger duplicate database inserts, creating duplicate unlock records. \nSolution: Implemented SSLCommerz payment validation using val_id. Wrapped database operations inside prisma.$transaction() to ensure atomic execution.Used status checks (status !== COMPLETED) and upsert operations to prevent duplicate processing. \n\nChallenge C: Handling Multiple Transaction Types. Routing two distinct payments model through a single payment gateway integration can result in code bloat, account mapping bugs, and accounting discrepancies. \nSolution:When a payment is initiated, it generates a unique transaction ID (tran_id) starting with P_ for plans, or U_ for post content unlocks. When the payment success callback returns, the backend inspects the transaction ID prefix. If it starts with P_ Prisma updates AdminRevenue, registers a Subscription, and upgrades User.status to PREMIUM. If it starts with U_, Prisma updates CreatorEarning and UnlockedPost to permit access.  \n\nChallenge D: PDF Invoice Crashing on Modern CSS Colors. html2canvas to screenshot the DOM. But Tailwind CSS v4 uses oklab() and oklch(). The CSS parser inside html2canvas crashed upon encountering these rules, preventing PDF generation. \nSolution: Switched to jsPDF instead of html2canvas. By using jsPDF's native drawing API (buildPdf), the invoice is compiled directly using low-level vector commands (roundedRect, text, line, etc.). This resulted in: Sharp, scalable vector-based PDFs instead of blurry canvas screenshots. Significantly smaller PDF files (usually <50 KB). \n\nChallenge E: Gemini Chat Initialization Problem. Must start with a user message. \nSolution: The backend inspects the first item in the history array. If the first message has the role model, the backend dynamically slices it out of the array before payload submission."
      }
    }
    
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

interface ProjectMediaProps {
  mediaUrl: string;
  title: string;
  isPlaying: boolean;
}

function ProjectMedia({ mediaUrl, title, isPlaying }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPinterest, setIsPinterest] = useState(false);
  const [pinterestPinId, setPinterestPinId] = useState<string | null>(null);

  useEffect(() => {
    if (!mediaUrl) return;
    const pinMatch = mediaUrl.match(/pinterest\.[a-z.]+\/pin\/(\d+)/i);
    if (pinMatch && pinMatch[1]) {
      setIsPinterest(true);
      setPinterestPinId(pinMatch[1]);
    } else if (mediaUrl.includes("pin.it")) {
      setIsPinterest(true);
      setPinterestPinId(null);
    } else {
      setIsPinterest(false);
      setPinterestPinId(null);
    }
  }, [mediaUrl]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.log("Play failed: ", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getVimeoId = (url: string) => {
    const regExp = /vimeo\.com\/(?:video\/|channels\/staffpicks\/)?([0-9]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const youtubeId = getYoutubeId(mediaUrl);
  const vimeoId = getVimeoId(mediaUrl);

  const isVideoFile = (url: string) => {
    return (
      url.match(/\.(mp4|webm|ogg|mov)(\?|$)/i) != null ||
      url.includes("stream") ||
      url.includes("video") ||
      url.includes("pexels.com/download/video") ||
      url.includes("drive.google.com/file/d/") ||
      youtubeId !== null ||
      vimeoId !== null
    );
  };

  if (isPinterest) {
    if (pinterestPinId) {
      return (
        <div className="relative w-full aspect-video rounded border border-slate-300/10 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
          <iframe
            src={`https://assets.pinterest.com/ext/embed.html?id=${pinterestPinId}`}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            className="w-full h-full object-cover"
            title={`${title} Pinterest Pin`}
          />
        </div>
      );
    } else {
      return (
        <div className="relative w-full aspect-video rounded border border-slate-300/10 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 overflow-hidden flex flex-col items-center justify-center p-3 text-center text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-teal-600 dark:text-teal-400 mb-1">Pinterest link detected</span>
          <p className="text-[10px] leading-tight max-w-[150px]">
            Please use a full pin URL instead of a shortened pin.it link for embedding.
          </p>
          <a
            href={mediaUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500/20 text-teal-700 dark:text-teal-300 transition-colors font-medium text-[10px]"
          >
            View Pin
          </a>
        </div>
      );
    }
  }

  if (youtubeId) {
    if (isPlaying) {
      return (
        <div className="relative w-full aspect-video rounded border-2 border-slate-300/10 dark:border-slate-800 transition-all duration-300 group-hover:border-slate-400/30 dark:group-hover:border-slate-600/30 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ""}`}
            className="w-full h-full object-cover pointer-events-none scale-105"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title={`${title} YouTube Demo`}
          />
          <div className="absolute top-2 right-2 rounded bg-slate-900/70 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-slate-200 uppercase">
            Playing
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full aspect-video rounded border-2 border-slate-300/10 dark:border-slate-800 transition group-hover:border-slate-400/30 dark:group-hover:border-slate-600/30 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={`${title} Preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center transition-opacity duration-300">
            <div className="rounded-full bg-teal-500/90 text-white p-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
  }

  if (vimeoId) {
    if (isPlaying) {
      return (
        <div className="relative w-full aspect-video rounded border-2 border-slate-300/10 dark:border-slate-800 transition-all duration-300 group-hover:border-slate-400/30 dark:group-hover:border-slate-600/30 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&background=1&loop=1`}
            className="w-full h-full object-cover pointer-events-none scale-105"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title={`${title} Vimeo Demo`}
          />
          <div className="absolute top-2 right-2 rounded bg-slate-900/70 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-slate-200 uppercase">
            Playing
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full aspect-video rounded border-2 border-slate-300/10 dark:border-slate-800 transition group-hover:border-slate-400/30 dark:group-hover:border-slate-600/30 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
            alt={`${title} Preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center transition-opacity duration-300">
            <div className="rounded-full bg-teal-500/90 text-white p-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isVideoFile(mediaUrl)) {
    let videoSrc = mediaUrl;
    if (mediaUrl.includes("drive.google.com")) {
      const driveMatch = mediaUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (driveMatch && driveMatch[1]) {
        videoSrc = `https://docs.google.com/uc?export=download&id=${driveMatch[1]}`;
      }
    }

    return (
      <div className="relative w-full aspect-video rounded border-2 border-slate-300/10 dark:border-slate-800 transition-all duration-300 group-hover:border-slate-400/30 dark:group-hover:border-slate-600/30 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="h-full w-full object-cover"
        />
        {!isPlaying && (
          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center transition-opacity duration-300">
            <div className="rounded-full bg-teal-500/90 text-white p-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {isPlaying && (
          <div className="absolute top-2 right-2 rounded bg-slate-900/70 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-slate-200 uppercase">
            Playing
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded border-2 border-slate-300/10 dark:border-slate-800 transition group-hover:border-slate-400/30 dark:group-hover:border-slate-600/30 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
      <img
        src={mediaUrl}
        alt={`${title} Preview`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80";
        }}
      />
    </div>
  );
}

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list space-y-12">
          {projects.map((project) => {
            const isPlaying = hoveredId === project.id || clickedId === project.id;
            return (
              <li key={project.id}>
                <div 
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => {
                    setHoveredId(null);
                    setClickedId(null);
                  }}
                  onClick={() => {
                    setClickedId(clickedId === project.id ? null : project.id);
                  }}
                  className="group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
                >
                  {/* Glow card background */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 dark:lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] lg:group-hover:drop-shadow-lg" />
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                      {/* Left Side: Image/Video Preview */}
                      {project.mediaUrl && (
                        <div className="sm:col-span-4 order-1 sm:order-1">
                          <ProjectMedia mediaUrl={project.mediaUrl} title={project.title} isPlaying={isPlaying} />
                        </div>
                      )}

                      {/* Right Side: Details */}
                      <div className={`order-2 sm:order-2 ${project.mediaUrl ? "sm:col-span-8" : "sm:col-span-12"}`}>
                        {/* Title and Links */}
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-semibold text-base text-slate-900 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors break-words flex-1 min-w-0">
                            {project.title}
                          </h3>
                          <div className="flex-shrink-0 flex items-center gap-2 text-slate-500 dark:text-slate-400 z-20">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 p-1.5 rounded-md transition-colors"
                              aria-label={`Live Demo of ${project.title}`}
                              title="Live Demo"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                              </svg>
                            </a>
                            <a
                              href={project.gitUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 p-1.5 rounded-md transition-colors"
                              aria-label={`GitHub Repository of ${project.title}`}
                              title="GitHub"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                            </a>
                          </div>
                        </div>

                        <p className="mt-1 text-xs text-teal-600 dark:text-teal-400 font-medium">{project.tagline}</p>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>

                        {/* Tech Stack Tags */}
                        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                          {project.technologies.map((tech) => (
                            <li key={tech} className="rounded-full bg-teal-500/10 dark:bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300">
                              {tech}
                            </li>
                          ))}
                        </ul>

                        {/* Case Study Section */}
                        <div className="mt-5 border-t border-slate-200 dark:border-slate-800 pt-4 z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(project.id);
                            }}
                            className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer"
                            aria-expanded={expandedId === project.id}
                          >
                            <span>{expandedId === project.id ? "Hide Case Study" : "View Case Study"}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className={`h-4 w-4 transition-transform duration-200 ${
                                expandedId === project.id ? "rotate-180" : ""
                              }`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 011.06 0L10 11.168l3.72-2.948a.75.75 0 11.96 1.16l-4.2 3.32a.75.75 0 01-.96 0l-4.2-3.32a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Accordion panel (renders outside the details/media columns to span full width) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedId === project.id ? "max-h-[2000px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-slate-200/50 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-300 dark:border-slate-800 text-sm space-y-3 leading-relaxed text-slate-600 dark:text-slate-400">
                        <div>
                          <strong className="text-slate-900 dark:text-slate-200 block mb-0.5">The Problem:</strong>
                          <p className="whitespace-pre-line">{project.caseStudy.problem}</p>
                        </div>
                        <div>
                          <strong className="text-slate-900 dark:text-slate-200 block mb-0.5">Why this Tech Stack?</strong>
                          <p className="whitespace-pre-line">{project.caseStudy.rationale}</p>
                        </div>
                        <div>
                          <strong className="text-slate-900 dark:text-slate-200 block mb-0.5">Engineering Challenge & Resolution:</strong>
                          <p className="whitespace-pre-line">{project.caseStudy.challenge}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
          );
        })}
        </ul>
      </div>
    </section>
  );
}
