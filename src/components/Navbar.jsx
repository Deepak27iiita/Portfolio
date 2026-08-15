import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'CP Stats', href: '#cp-stats' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#05070a]/80 backdrop-blur-md border-b border-[#1D9E75]/10 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-[#0a0f0d] border border-[#1D9E75]/30 flex items-center justify-center group-hover:border-[#1D9E75] transition-colors">
            <span className="text-[#1D9E75] font-bold font-display text-sm">DS</span>
          </div>
          <span className="font-display font-bold tracking-tight text-white group-hover:text-[#1D9E75] transition-colors">
            Deepak Singh
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive ? 'text-[#1D9E75]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1D9E75]"
                        layoutId="activeIndicator"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-gray-800" />

          {/* Socials & Resume */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/deepak27iiita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1D9E75] transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-singh-09430028b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1D9E75] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:deepakstd9090@gmail.com"
              className="text-gray-400 hover:text-[#1D9E75] transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#resume-placeholder"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#1D9E75] text-[#1D9E75] hover:bg-[#1D9E75] hover:text-white text-xs font-semibold font-mono tracking-wide transition-all shadow-[0_0_15px_rgba(29,158,117,0.1)] hover:shadow-[0_0_20px_rgba(29,158,117,0.3)]"
            >
              <FileText size={12} />
              RESUME
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href="#resume-placeholder"
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-[#1D9E75] text-[#1D9E75] text-xs font-semibold font-mono tracking-wide transition-all"
          >
            RESUME
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#05070a]/95 border-b border-[#1D9E75]/10 backdrop-blur-lg flex flex-col py-6 px-6 shadow-xl"
          >
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-semibold py-1 transition-colors ${
                        isActive ? 'text-[#1D9E75]' : 'text-gray-300'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-[1px] bg-gray-800 w-full mb-6" />

            <div className="flex items-center gap-6 justify-center">
              <a
                href="https://github.com/deepak27iiita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1D9E75] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-singh-09430028b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1D9E75] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:deepakstd9090@gmail.com"
                className="text-gray-400 hover:text-[#1D9E75] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
