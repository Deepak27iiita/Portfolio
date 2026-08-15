import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Award, Zap, Coffee } from 'lucide-react';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target, 10);
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: <Code2 size={22} />,  value: '1933', suffix: '',  label: 'LC Contest Rating', sub: 'Max: 1933' },
  { icon: <Zap size={22} />,    value: '1917', suffix: '',  label: 'Problems Solved',   sub: 'All Platforms' },
  { icon: <Award size={22} />,  value: '1401', suffix: '',  label: 'CF Max Rating',      sub: 'Specialist' },
  { icon: <Coffee size={22} />, value: '648',  suffix: '',  label: 'Active Days',        sub: 'Max Streak: 103' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Section glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Heading */}
        <div className="mb-16 text-center lg:text-left">
          <span className="text-[#1D9E75] font-mono text-xs tracking-[0.25em] uppercase">01. about</span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-2">Who I Am</h2>
          <div className="h-[2px] w-16 bg-[#1D9E75] mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — bio text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-[15px] text-gray-400 leading-[1.9]"
            >
              <p>
                I'm a <span className="text-white font-semibold">B.Tech CSE student</span> at the{' '}
                <span className="text-[#1D9E75] font-semibold">Indian Institute of Information Technology, Allahabad</span> —
                one of India's premier technical institutions. I specialise in designing
                high-performance full-stack products and systematically grinding competitive programming.
              </p>
              <p>
                My engineering philosophy is simple: write clean, composable code, stress-test it until it breaks,
                and use every bug as a lesson. I believe the intersection of strong algorithms
                and beautiful UIs is where the most meaningful software lives.
              </p>
            </motion.div>

            {/* Info chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: <MapPin size={13} />, label: 'India 🇮🇳' },
                { icon: <GraduationCap size={13} />, label: 'IIIT Allahabad' },
                { icon: <Code2 size={13} />, label: 'MERN Stack' },
                { icon: <Award size={13} />, label: 'Open to Internship' },
              ].map((chip, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0a1510]/80 border border-[#1D9E75]/15 text-xs font-mono text-gray-300">
                  <span className="text-[#1D9E75]">{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
            </motion.div>

            {/* Code snippet block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1510]/70 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-[10px] font-mono text-gray-600">motto.js</span>
              </div>
              <div className="bg-[#060d0a]/80 p-5 font-mono text-xs text-gray-300 space-y-1">
                <div><span className="text-purple-400">const</span> <span className="text-blue-300">motto</span> = <span className="text-[#1D9E75]">"Code → Break → Debug → Learn → Repeat"</span>;</div>
                <div><span className="text-purple-400">while</span>(<span className="text-orange-300">true</span>) {'{'}</div>
                <div className="pl-4"><span className="text-blue-300">deepak</span>.<span className="text-yellow-300">solve</span>(<span className="text-[#1D9E75]">"hard problems"</span>);</div>
                <div className="pl-4"><span className="text-blue-300">deepak</span>.<span className="text-yellow-300">build</span>(<span className="text-[#1D9E75]">"cool things"</span>);</div>
                <div>{'}'} <span className="text-gray-600">// never stops</span></div>
              </div>
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#0a0f0d]/50 border border-white/5 rounded-2xl p-5 flex flex-col gap-3 group hover:border-[#1D9E75]/30 hover:shadow-[0_0_24px_rgba(29,158,117,0.1)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0d1f18] border border-[#1D9E75]/20 flex items-center justify-center text-[#1D9E75] group-hover:border-[#1D9E75]/50 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-black font-mono text-white">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-semibold text-gray-300 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] font-mono text-gray-600 mt-0.5">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
