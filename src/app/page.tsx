"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SignatureBar from "./components/SignatureBar";
import ThemeToggle from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Play,
  Shuffle,
  Search,
  ArrowRight,
  BarChart3,
  Zap,
  Sliders,
} from "lucide-react";

interface Algorithm {
  name: string;
  slug: string;
  summary: string;
  badge: string;
  category: "divide" | "simple" | "non-comp" | "advanced";
  timeComplexity: string;
  spaceComplexity: string;
  badgeStyle: string;
}

const algorithms: Algorithm[] = [
  {
    name: "Quick Sort",
    slug: "quick-sort",
    summary: "Fast partition-based sorting utilizing dynamic pivot selection.",
    badge: "Divide & Conquer",
    category: "divide",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)",
    badgeStyle: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    name: "Merge Sort",
    slug: "merge-sort",
    summary: "Stable, predictable sorting with elegant visual split-and-merge steps.",
    badge: "Stable",
    category: "divide",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    badgeStyle: "bg-teal-500/10 text-teal-400 border-teal-500/30",
  },
  {
    name: "Bubble Sort",
    slug: "bubble-sort",
    summary: "A simple teaching mode that shows every comparison and swap clearly.",
    badge: "Beginner Friendly",
    category: "simple",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    name: "Heap Sort",
    slug: "heap-sort",
    summary: "Structured binary max-heap operations for efficient worst-case sorting.",
    badge: "Efficient",
    category: "advanced",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    name: "Insertion Sort",
    slug: "insertion-sort",
    summary: "Stepwise insertion of elements into a growing sorted subarray.",
    badge: "Adaptive",
    category: "simple",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    name: "Selection Sort",
    slug: "selection-sort",
    summary: "Finds the minimum element iteratively and swaps it into place.",
    badge: "Intuitive",
    category: "simple",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    name: "Radix Sort",
    slug: "radix-sort",
    summary: "Non-comparative digit-by-digit bucket distribution sorting.",
    badge: "Non-Comparative",
    category: "non-comp",
    timeComplexity: "O(nk)",
    spaceComplexity: "O(n+k)",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    name: "Counting Sort",
    slug: "counting-sort",
    summary: "Keys mapping approach based on discrete numerical frequencies.",
    badge: "Frequency Based",
    category: "non-comp",
    timeComplexity: "O(n+k)",
    spaceComplexity: "O(k)",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    name: "Shell Sort",
    slug: "shell-sort",
    summary: "Diminishing increment sorting generalizing insertion sort gaps.",
    badge: "Optimized",
    category: "advanced",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    name: "Cocktail Sort",
    slug: "cocktail-sort",
    summary: "Bidirectional bubble sort operating in back-and-forth passes.",
    badge: "Bidirectional",
    category: "simple",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    name: "Tim Sort",
    slug: "tim-sort",
    summary: "Real-world hybrid merging sorted runs using insertion sort.",
    badge: "Hybrid",
    category: "advanced",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    name: "Gnome Sort",
    slug: "gnome-sort",
    summary: "Garden gnome stepping backwards to swap unsorted adjacent elements.",
    badge: "Simple",
    category: "simple",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
];

const features = [
  {
    icon: <Sliders className="w-6 h-6 text-indigo-500" />,
    title: "User-driven Control",
    text: "Enter custom arrays, toggle speed controls, scale array size, and step backwards or forwards through steps.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-teal-500" />,
    title: "3D Motion & Lighting",
    text: "Watch bars compare, swap, and settle in high-frame-rate spring animations with dynamic color coding.",
  },
  {
    icon: <Zap className="w-6 h-6 text-pink-500" />,
    title: "Real-time Telemetry",
    text: "Understand exact space/time trade-offs alongside instant step descriptions and index highlighting.",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "divide" | "simple" | "non-comp" | "advanced">("all");
  const [previewBars, setPreviewBars] = useState([40, 80, 25, 95, 60, 30, 70, 50, 85, 35]);

  const shuffleBars = () => {
    setPreviewBars([...previewBars].sort(() => Math.random() - 0.5));
  };

  const filteredAlgorithms = algorithms.filter((algo) => {
    const matchesSearch =
      algo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      algo.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      algo.badge.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || algo.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Background Animated Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="orb-glow top-[5%] left-[10%] w-[28rem] h-[28rem] bg-indigo-500/20"
        />
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="orb-glow top-[25%] right-[5%] w-[32rem] h-[32rem] bg-teal-500/15"
        />
      </div>

      {/* Sticky Glass Navbar */}
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

          <nav className="hidden items-center gap-8 text-sm font-semibold opacity-85 md:flex">
            <a href="#features" className="hover:text-indigo-500 transition-colors">
              Features
            </a>
            <a href="#algorithms" className="hover:text-indigo-500 transition-colors">
              Algorithms
            </a>
            <a href="#matrix" className="hover:text-indigo-500 transition-colors">
              Cheat Sheet
            </a>
            <a href="/about" className="hover:text-indigo-500 transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-indigo-500 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/sort/quick-sort"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 text-white text-xs font-bold transition-all shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Launch Visualizer
            </Link>
          </div>
        </div>
      </header>

      {/* 3D Hero Section */}
      <section className="relative isolate flex min-h-[calc(100vh-70px)] items-center py-12 z-10">
        <div className="homepage-grid absolute inset-0 opacity-50 pointer-events-none" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
          {/* Hero Left Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-indigo-400 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Interactive Algorithm Simulator
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl leading-[1.12]">
                Turn raw data into <span className="text-gradient">3D animated motion</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
                Select any sorting algorithm to explore step-by-step executions, custom input arrays, pivot markers, and real-time telemetry.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#algorithms"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore Library <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/sort/quick-sort"
                className="px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/20 dark:bg-slate-900/40 backdrop-blur-md font-bold text-sm shadow-md hover:border-indigo-500 transition-all hover:-translate-y-0.5"
              >
                Try Quick Sort
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              {[
                { val: "12+", label: "Algorithms" },
                { val: "60 FPS", label: "Spring Physics" },
                { val: "Step-by-Step", label: "Telemetry" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-sm"
                >
                  <div className="text-2xl font-black text-indigo-500">{s.val}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Right 3D Interactive Stage Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="perspective-scene relative"
          >
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 6, z: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="preserve-3d rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900/85 p-6 backdrop-blur-2xl shadow-2xl text-white"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Image src="/favicon.ico" alt="Logo" width={28} height={28} className="rounded-lg shadow-md" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                      Sandbox Simulation
                    </span>
                    <h2 className="text-lg font-bold">Sorting Stage</h2>
                  </div>
                </div>
                <button
                  onClick={shuffleBars}
                  className="px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5"
                >
                  <Shuffle className="w-3.5 h-3.5" /> Shuffle
                </button>
              </div>

              {/* 3D Animated Bars */}
              <div className="h-64 flex items-end justify-center gap-2 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                {previewBars.map((val, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ height: `${val}%` }}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-600 via-teal-500 to-emerald-400 shadow-lg"
                  />
                ))}
              </div>

              <div className="mt-5 text-xs text-slate-400 leading-relaxed flex items-center justify-between">
                <span>Interactive 3D preview card.</span>
                <span className="text-indigo-400 font-semibold">Hover to tilt &rarr;</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-12 z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            Platform Capabilities
          </span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Built for absolute clarity & performance.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {f.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Algorithm Library Section */}
      <section id="algorithms" className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-12 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
              Algorithms Library
            </span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Select an algorithm to launch its visualizer.
            </h2>
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search algorithms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-500/10 pb-4">
          {[
            { id: "all", label: "All Algorithms" },
            { id: "divide", label: "Divide & Conquer" },
            { id: "simple", label: "Simple & Iterative" },
            { id: "non-comp", label: "Non-Comparative" },
            { id: "advanced", label: "Advanced & Hybrid" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Filtered Grid */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredAlgorithms.map((algo) => (
              <motion.div
                key={algo.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/sort/${algo.slug}`}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${algo.badgeStyle}`}>
                        {algo.badge}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400">
                        {algo.timeComplexity}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold group-hover:text-indigo-400 transition-colors">
                      {algo.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {algo.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-500/10 pt-4 text-xs font-semibold">
                    <span className="text-slate-500">Space: {algo.spaceComplexity}</span>
                    <span className="text-indigo-500 font-bold group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
                      Visualize <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAlgorithms.length === 0 && (
          <div className="text-center py-16 text-sm text-slate-500">
            No algorithms found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </section>

      {/* Cheat Sheet Table Matrix */}
      <section id="matrix" className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-12 z-10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            Reference Matrix
          </span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Algorithm Complexity Cheat Sheet
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="p-4">Algorithm</th>
                <th className="p-4">Best Time</th>
                <th className="p-4">Average Time</th>
                <th className="p-4">Worst Time</th>
                <th className="p-4">Space Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-xs">
              {[
                { name: "Quick Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
                { name: "Merge Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
                { name: "Heap Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(1)" },
                { name: "Bubble Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)" },
                { name: "Insertion Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)" },
              ].map((row) => (
                <tr key={row.name} className="hover:bg-indigo-500/5 transition">
                  <td className="p-4 font-sans font-semibold text-slate-900 dark:text-slate-100">{row.name}</td>
                  <td className="p-4 text-emerald-400">{row.best}</td>
                  <td className="p-4 text-indigo-400">{row.avg}</td>
                  <td className="p-4 text-rose-400">{row.worst}</td>
                  <td className="p-4 text-slate-400">{row.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-500/10 py-8 text-center text-xs text-slate-500 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="AlgoSortify Logo" width={20} height={20} className="rounded" />
            <span className="font-semibold text-slate-900 dark:text-slate-100">AlgoSortify</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Sorting Algorithms Simulator</p>
        </div>
        <SignatureBar />
      </footer>
    </div>
  );
}