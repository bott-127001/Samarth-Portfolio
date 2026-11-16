import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Home,
  ArrowLeft,
  Search,
  Compass,
  Code2,
  FolderGit2,
  Briefcase,
  Mail,
  AlertTriangle
} from 'lucide-react';

export const NotFound = ({ onNavigateHome }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative overflow-hidden flex flex-col justify-between selection:bg-slate-200 selection:text-slate-900">
      <div className="noise-bg"></div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else window.location.href = '/';
            }}
            className="font-bold text-lg tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
          >
            Samarth Salgar.
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else window.location.href = '/';
            }}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Home size={16} /> Return Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-6 pt-28 pb-16">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full text-center"
        >
          {/* Terminal Box */}
          <motion.div
            variants={childVariants}
            className="mb-8 bg-slate-900 text-slate-100 rounded-xl shadow-2xl border border-slate-800 overflow-hidden text-left"
          >
            {/* Terminal Top Bar */}
            <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal size={13} className="text-slate-400" /> samarth-portfolio ~ bash
              </span>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm space-y-3">
              <div className="flex items-start gap-2 text-red-400">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <span>
                  <strong>[ERROR 404]</strong> Route not found: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">{typeof window !== 'undefined' ? window.location.pathname : '/unknown'}</code>
                </span>
              </div>
              <p className="text-slate-400 pl-6">
                &gt; Searching index... 0 matches found.
              </p>
              <p className="text-slate-400 pl-6">
                &gt; Diagnostics: Page moved, deleted, or quantum shifted.
              </p>
              <div className="pt-2 border-t border-slate-800 text-slate-300 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <span>Recommendation: Redirect back to valid endpoint.</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Large 404 Heading */}
          <motion.div variants={childVariants} className="relative inline-block mb-4">
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 select-none">
              404
            </h1>
            <span className="absolute -top-2 -right-4 px-3 py-1 bg-slate-900 text-white text-xs font-mono rounded-full tracking-wide shadow-md">
              LOST IN CYBERSPACE
            </span>
          </motion.div>

          <motion.h2 variants={childVariants} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Oops! Page Not Found
          </motion.h2>

          <motion.p variants={childVariants} className="text-slate-600 max-w-md mx-auto mb-8 text-base leading-relaxed">
            The link you followed might be broken or the page may have been relocated. Don't worry, you can easily head back home or explore key sections below.
          </motion.p>

          {/* Primary Action Button */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                else window.location.href = '/';
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform active:scale-95"
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </button>
            <a
              href="mailto:samarthsalgar02@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 font-medium rounded-lg border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm transform active:scale-95"
            >
              <Mail size={18} /> Report Broken Link
            </a>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={childVariants} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-left">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass size={16} className="text-slate-500" /> Quick Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a
                href="/#projects"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors group"
              >
                <div className="p-2 bg-slate-900 text-white rounded-md group-hover:scale-105 transition-transform">
                  <FolderGit2 size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Projects</div>
                  <div className="text-xs text-slate-500">View recent work</div>
                </div>
              </a>

              <a
                href="/#skills"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('skills');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors group"
              >
                <div className="p-2 bg-slate-900 text-white rounded-md group-hover:scale-105 transition-transform">
                  <Code2 size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Skills</div>
                  <div className="text-xs text-slate-500">Tech stack & tools</div>
                </div>
              </a>

              <a
                href="/#experience"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('experience');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors group"
              >
                <div className="p-2 bg-slate-900 text-white rounded-md group-hover:scale-105 transition-transform">
                  <Briefcase size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Experience</div>
                  <div className="text-xs text-slate-500">Career journey</div>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/60 backdrop-blur-sm py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-slate-500">
          © {currentYear} Samarth Salgar. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
