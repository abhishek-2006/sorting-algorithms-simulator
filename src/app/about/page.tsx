"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  BookOpen,
  Code2,
  Cpu,
  Zap,
  ArrowRight,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const highlights = [
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
    title: "Educational Focus",
    text: "Designed specifically for students, educators, and developers to visualize step-by-step sorting mechanics effortlessly.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-teal-500" />,
    title: "Modern Tech Stack",
    text: "Engineered with Next.js, React, Framer Motion, and Tailwind CSS to deliver smooth, high-frame-rate 3D spring physics.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-500" />,
    title: "Real-time Telemetry",
    text: "Provides custom input arrays, active pivot markers, index highlights, and instant algorithm complexity metrics.",
  },
];

const capabilities = [
  "Custom array input & length customization",
  "Variable animation speed & frame scrubbing",
  "Step-by-step logic explanations",
  "Pivot markers & comparison index tracking",
  "Time and space complexity cheat sheets",
  "Full light and dark theme adaptivity",
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between text-slate-900 dark:text-slate-100 transition-colors">
      {/* Background Grid Pattern */}
      <div className="homepage-grid fixed inset-0 opacity-40 pointer-events-none z-0" />

      {/* Sticky Header */}
      <header className="glass-nav sticky top-0 z-50 px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/favicon.ico"
              alt="AlgoSortify Logo"
              width={36}
              height={36}
              className="rounded-xl shadow-md transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-extrabold tracking-tight">
              Algo<span className="text-gradient">Sortify</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/"
              className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-xs font-semibold hover:border-indigo-500 transition-all flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 py-12 md:px-10 flex-1 flex flex-col justify-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" /> About The Platform
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Demystifying algorithms through <span className="text-gradient">3D visual clarity</span>.
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            AlgoSortify is an interactive sorting algorithms simulator built to turn abstract algorithmic logic into an intuitive, step-by-step visual learning experience.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-3xl space-y-4">
              <div className="p-3 w-fit rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Description Section */}
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center mb-16">
          <div className="glass-card p-8 rounded-3xl space-y-5">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-indigo-500">
              <Cpu className="w-4 h-4" /> Why We Built This
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Bridging the gap between theory and code execution.
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Understanding sorting algorithms purely through pseudocode or static diagrams can be challenging. By animating element swaps, pivot choices, and split-merge steps in real-time, users can build a mental model of how data structures behave under different conditions.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you are preparing for technical coding interviews, teaching computer science fundamentals, or exploring algorithm efficiencies, AlgoSortify provides an accessible sandbox environment.
            </p>
          </div>

          {/* Key Capabilities Checklist */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-500" /> Platform Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call To Action Box */}
        <div className="glass-card p-8 md:p-10 rounded-3xl text-center space-y-6 bg-gradient-to-r from-indigo-500/10 via-teal-500/10 to-purple-500/10 border-indigo-500/20">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Ready to explore sorting in motion?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Jump into our algorithm library, enter your custom arrays, and watch algorithms solve problems step-by-step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/sort/quick-sort"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white font-bold text-xs shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95"
            >
              Launch Quick Sort <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-xs font-bold hover:border-indigo-500 transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-500/10 py-6 text-center text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="AlgoSortify" width={20} height={20} className="rounded" />
            <span className="font-semibold text-slate-900 dark:text-slate-100">AlgoSortify</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Sorting Algorithms Simulator</p>
        </div>
      </footer>
    </div>
  );
}