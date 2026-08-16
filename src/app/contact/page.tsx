"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowLeft, Send, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between text-slate-900 dark:text-slate-100 transition-colors">
      {/* Background Grid Pattern & Orbs */}
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
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" /> Get In Touch
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            We&apos;d love to hear from <span className="text-gradient">you</span>.
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions, feature suggestions, or feedback regarding the Sorting Algorithms Simulator? Reach out and help us make AlgoSortify better for everyone.
          </p>
        </div>

        {/* Contact Grid Card */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] items-start">
          {/* Left: Quick Direct Info Card */}
          <div className="glass-card p-8 rounded-3xl flex flex-col justify-between gap-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Direct Email
                  </p>
                  <h3 className="text-base font-bold">Reach out via Mail</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                For direct inquiries, bug reports, or collaboration proposals:
              </p>

              <a
                href="mailto:shahabhishek051@gmail.com"
                className="group flex items-center justify-between p-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all text-sm font-semibold text-indigo-600 dark:text-indigo-400 break-all"
              >
                <span>{process.env.NEXT_PUBLIC_EMAIL_USER}</span>
                <Send className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3">
              <Image
                src="/favicon.ico"
                alt="AlgoSortify Logo"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span>AlgoSortify Simulator &bull; Constant visual improvements.</span>
            </div>
          </div>

          {/* Right: Interactive Contact & Feedback Form */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-bold">Send a Message</h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you for your feedback. We will review your message and respond as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                    Message / Feedback
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Type your message or suggestions here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white font-bold text-sm shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
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