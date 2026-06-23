"use client";

import React, { useState } from "react";

export function Contact({ isSidebar = false }: { isSidebar?: boolean }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // Connects to Formspree endpoint (submissions go to registered email automatically)
      const response = await fetch("https://formspree.io/f/mgojekzv", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  if (isSidebar) {
    return (
      <div className="space-y-3 text-slate-600 dark:text-slate-400 text-xs">
        <p className="leading-normal">
          I'm currently open to new opportunities, contract roles, and interesting full-stack projects. If you have a problem to solve or want to chat about a role, drop me a message or email me at{" "}
          <a href="mailto:riya.das.dev26@gmail.com" className="text-teal-600 dark:text-teal-400 font-semibold transition-colors">
            riya.das.dev26@gmail.com
          </a>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
  {/* Row 1: Name and Email side-by-side */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="sidebar-name" className="block text-[10px] font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
        Your Name
      </label>
      <input
        type="text"
        id="sidebar-name"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="John Doe"
        required
        className="w-full rounded bg-slate-100 border border-slate-300 dark:bg-slate-800/85 dark:border-slate-700 px-3 py-1.5 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
      />
    </div>

    <div>
      <label htmlFor="sidebar-email" className="block text-[10px] font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
        Email Address
      </label>
      <input
        type="email"
        id="sidebar-email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="john@example.com"
        required
        className="w-full rounded bg-slate-100 border border-slate-300 dark:bg-slate-800/85 dark:border-slate-700 px-3 py-1.5 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
      />
    </div>
  </div>

  {/* Row 2: Changed 'items-end' to 'items-center' */}
  <div className="grid grid-cols-3 gap-4 items-center">
    {/* Message takes 2 columns */}
    <div className="col-span-2">
      <label htmlFor="sidebar-message" className="block text-[10px] font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
        Message
      </label>
      <textarea
        id="sidebar-message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        rows={2}
        placeholder="Tell me about your project..."
        required
        className="w-full rounded bg-slate-100 border border-slate-300 dark:bg-slate-800/85 dark:border-slate-700 px-3 py-1.5 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
      />
    </div>

    {/* Send Button takes 1 column - Added 'pt-4' to balance it directly with the textarea center line */}
    <div className="col-span-1 pt-4">
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-[32px] flex items-center justify-center rounded bg-teal-600 dark:bg-teal-500 px-4 text-[10px] font-bold uppercase tracking-wider text-white dark:text-slate-950 hover:bg-teal-700 dark:hover:bg-teal-400 active:bg-teal-800 dark:active:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 transition-colors cursor-pointer"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </div>
  </div>

  {status === "success" && (
    <p className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 transition-opacity duration-300">
      ✓ Message sent successfully!
    </p>
  )}
  {status === "error" && (
    <p className="text-[10px] font-medium text-rose-600 dark:text-rose-400 transition-opacity duration-300">
      ⚠ Please fill in all fields correctly.
    </p>
  )}
</form>
      </div>
    );
  }

  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact information">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Contact
        </h2>
      </div>
      <div className="space-y-6">
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          I'm currently open to new opportunities, contract roles, and interesting full-stack projects. 
          If you have a problem to solve or want to chat about a role, drop me a message or email me at{" "}
          <a href="mailto:riya.das.dev26@gmail.com" className="text-teal-600 dark:text-teal-400 font-semibold transition-colors">
            riya.das.dev26@gmail.com
          </a>.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full rounded-md bg-slate-100 border border-slate-300 dark:bg-slate-800/80 dark:border-slate-700 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full rounded-md bg-slate-100 border border-slate-300 dark:bg-slate-800/80 dark:border-slate-700 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about your project..."
              required
              className="w-full rounded-md bg-slate-100 border border-slate-300 dark:bg-slate-800/80 dark:border-slate-700 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-md bg-teal-600 dark:bg-teal-500 py-2.5 text-sm font-semibold text-white dark:text-slate-950 hover:bg-teal-700 dark:hover:bg-teal-400 active:bg-teal-800 dark:active:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 transition-colors cursor-pointer"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 transition-opacity duration-300">
              ✓ Message sent successfully! I will get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs font-medium text-rose-600 dark:text-rose-400 transition-opacity duration-300">
              ⚠ Please fill in all fields correctly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
