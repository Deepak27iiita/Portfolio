import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, Award, ExternalLink } from 'lucide-react';

const socials = [
  {
    icon: <Mail size={17} />,
    label: 'Email',
    value: 'deepakstd9090@gmail.com',
    href: 'mailto:deepakstd9090@gmail.com',
  },
  {
    icon: <Linkedin size={17} />,
    label: 'LinkedIn',
    value: 'deepak-singh-09430028b',
    href: 'https://linkedin.com/in/deepak-singh-09430028b',
  },
  {
    icon: <Github size={17} />,
    label: 'GitHub',
    value: 'deepak27iiita',
    href: 'https://github.com/deepak27iiita',
  },
  {
    icon: <Award size={17} />,
    label: 'Codeforces',
    value: 'deepak-singh',
    href: 'https://codeforces.com/profile/deepak-singh',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setDone(true);
      window.location.href = `mailto:deepakstd9090@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0AReply-to: ${encodeURIComponent(form.email)}`;
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setDone(false), 5000);
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* CSS-only animated sphere (no WebGL) */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'transparent',
          border: '1px solid rgba(29,158,117,0.4)',
          boxShadow: '0 0 80px rgba(29,158,117,0.12)',
          animation: 'spin 30s linear infinite',
        }}
      />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full pointer-events-none opacity-15"
        style={{
          border: '1px solid rgba(29,158,117,0.25)',
          animation: 'spin 20s linear infinite reverse',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Heading */}
        <div className="mb-16 text-center lg:text-left">
          <span className="text-[#1D9E75] font-mono text-xs tracking-[0.25em] uppercase">06. contact</span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-2">Let's Build Together</h2>
          <div className="h-[2px] w-16 bg-[#1D9E75] mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-[15px] text-gray-400 leading-[1.9]">
              Actively looking for <span className="text-white font-semibold">SDE internships</span>,
              open-source projects, and cool collaborations. If you have an idea or just want to talk code
              — reach out, I respond fast!
            </p>

            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0f0d]/50 border border-white/5 group hover:border-[#1D9E75]/30 hover:bg-[#0d1f18]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0d1f18] border border-[#1D9E75]/15 flex items-center justify-center text-[#1D9E75] group-hover:border-[#1D9E75]/40 transition-colors shrink-0">
                    {s.icon}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{s.label}</div>
                    <div className="text-sm font-semibold text-gray-200 truncate group-hover:text-white transition-colors">{s.value}</div>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-gray-600 group-hover:text-[#1D9E75] shrink-0 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 bg-[#0a0f0d]/60 border border-white/5 rounded-3xl p-8 shadow-2xl"
            style={{ boxShadow: '0 8px 64px rgba(0,0,0,0.5)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#05070a]/70 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D9E75]/60 focus:shadow-[0_0_16px_rgba(29,158,117,0.12)] transition-all"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#05070a]/70 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D9E75]/60 focus:shadow-[0_0_16px_rgba(29,158,117,0.12)] transition-all"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Message</label>
                <textarea
                  id="message" name="message" required rows={6}
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or idea…"
                  className="w-full bg-[#05070a]/70 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D9E75]/60 focus:shadow-[0_0_16px_rgba(29,158,117,0.12)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={busy || done}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#1D9E75] text-white font-bold text-sm tracking-wide hover:bg-emerald-500 transition-all duration-200 shadow-[0_4px_24px_rgba(29,158,117,0.25)] hover:shadow-[0_4px_32px_rgba(29,158,117,0.45)] disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {done ? (
                  <><CheckCircle size={17} /> Sent — check your mail app</>
                ) : busy ? (
                  <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending…</>
                ) : (
                  <>Send Message <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
