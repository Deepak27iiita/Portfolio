import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, Terminal, Code2, Zap } from 'lucide-react';

const taglines = [
  'Full-Stack Engineer',
  'MERN Stack Developer',
  'Competitive Programmer',
  'DSA & System Design',
];

const terminalLines = [
  { text: 'const deepak = new Developer();', delay: 0.5 },
  { text: 'deepak.skills = ["React", "Node", "C++"];', delay: 1.0 },
  { text: 'deepak.rating   = { lc: 1933, cf: 1401 };', delay: 1.5 },
  { text: 'deepak.solved   = { total: 1917 }; // ✓', delay: 2.0 },
];

function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000 + 1200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="bg-[#050c0a]/90 border border-[#1D9E75]/20 rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm"
      style={{ boxShadow: '0 0 40px rgba(29,158,117,0.08)' }}
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1510]/80 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] font-mono text-gray-500">deepak@iiita ~ portfolio.js</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-xs space-y-2">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2"
          >
            <span className="text-[#1D9E75] shrink-0">›</span>
            <span className="text-gray-300">{line.text}</span>
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && (
          <div className="flex gap-2">
            <span className="text-[#1D9E75]">›</span>
            <span className="inline-block w-1.5 h-3.5 bg-[#1D9E75] animate-pulse rounded-sm" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

const quickStats = [
  { icon: <Code2 size={14} />,    label: 'LC Rating', value: '1933' },
  { icon: <Zap size={14} />,      label: 'Solved',    value: '1917' },
  { icon: <Sparkles size={14} />, label: 'CF Rating', value: '1401' },
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTaglineIndex(p => (p + 1) % taglines.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1f18] border border-[#1D9E75]/30 text-[#1D9E75] text-xs font-mono font-semibold mb-7 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]" />
              </span>
              Open to SDE Internships &amp; Collaborations
            </motion.div>

            {/* Hello line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 font-mono text-xs tracking-[0.3em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-2"
            >
              <Sparkles size={13} className="text-[#1D9E75]" />
              Hello World, I am
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tighter text-white leading-none mb-4"
            >
              Deepak
              <br />
              <span className="text-[#1D9E75]" style={{ textShadow: '0 0 60px rgba(29,158,117,0.35)' }}>
                Singh
              </span>
            </motion.h1>

            {/* Rotating tagline */}
            <div className="h-9 overflow-hidden mb-6 flex justify-center lg:justify-start items-center gap-2">
              <Terminal size={16} className="text-[#1D9E75] shrink-0" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={taglineIndex}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="text-lg md:text-xl font-mono font-bold text-gray-200 whitespace-nowrap"
                >
                  {taglines[taglineIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm md:text-[15px] text-gray-400 max-w-lg mb-8 leading-[1.8]"
            >
              Building scalable full-stack applications and solving hard problems,
              one commit at a time. B.Tech CSE at{' '}
              <span className="text-[#1D9E75] font-semibold">IIIT Allahabad</span>.
            </motion.p>

            {/* Quick-stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
            >
              {quickStats.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1510]/80 border border-[#1D9E75]/15 text-xs font-mono text-gray-300"
                >
                  <span className="text-[#1D9E75]">{s.icon}</span>
                  <span className="text-gray-500">{s.label}</span>
                  <span className="text-white font-bold">{s.value}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D9E75] text-white font-bold text-sm hover:bg-emerald-500 transition-all duration-200 shadow-[0_4px_24px_rgba(29,158,117,0.30)] hover:shadow-[0_4px_32px_rgba(29,158,117,0.50)] hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-bold text-sm hover:bg-white/10 hover:border-[#1D9E75]/30 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* Avatar frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-52 h-52 md:w-72 md:h-72"
            >
              {/* Spinning gradient ring */}
              <div
                className="absolute inset-0 rounded-[2.5rem] animate-spin-slow"
                style={{ background: 'conic-gradient(from 0deg, #1D9E75, transparent, #1D9E75)', padding: '2px', borderRadius: '2.5rem' }}
              >
                <div className="w-full h-full rounded-[2.4rem] bg-[#05070a]" />
              </div>
              {/* Glow pulse */}
              <div
                className="absolute inset-0 rounded-[2.5rem] animate-pulse"
                style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.25) 0%, transparent 70%)', filter: 'blur(20px)' }}
              />
              {/* Photo */}
              <div className="absolute inset-[4px] rounded-[2.3rem] overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/159138180?v=4"
                  alt="Deepak Singh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #05070a 0%, transparent 50%)' }} />
              </div>
              {/* Floating badge: CF */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-[#0a1510] border border-[#1D9E75]/30 px-3 py-1.5 rounded-xl text-[10px] font-mono text-white shadow-xl flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F8ACB]" />
                CF 1401
              </motion.div>
              {/* Floating badge: IIITA */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-3 bg-[#0a1510] border border-[#1D9E75]/30 px-3 py-1.5 rounded-xl text-[10px] font-mono text-[#1D9E75] shadow-xl"
              >
                🎓 IIITA
              </motion.div>
            </motion.div>

            {/* Terminal widget */}
            <div className="w-full max-w-sm">
              <TerminalWidget />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-[#1D9E75] transition-colors hidden md:flex"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-gray-700 flex justify-center pt-1">
          <motion.div
            className="w-0.5 h-2 bg-[#1D9E75] rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.a>
    </section>
  );
}
