import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riya Das | Full-Stack Developer",
  description: "Senior Full-Stack Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and AWS. Building high-performance, accessible, and scalable web solutions.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Portfolio",
    "TypeScript Engineer",
    "Software Engineer Portfolio",
    "Cloud Architecture",
    "AWS",
    "Web Performance Optimization"
  ],
  authors: [{ name: "Full-Stack Developer" }],
  openGraph: {
    title: "Riya Das | Full-Stack Developer",
    description: "Sleek, metrics-driven full-stack portfolio showcasing real-world projects, performance optimizations, and technical case studies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Das | Full-Stack Developer",
    description: "Sleek, metrics-driven full-stack portfolio showcasing real-world projects, performance optimizations, and technical case studies.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
