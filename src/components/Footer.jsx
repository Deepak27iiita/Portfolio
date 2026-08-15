import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and copyrights */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display font-bold text-white text-base">Deepak Singh</span>
          <span className="font-mono text-xs text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Tech stacks info */}
        <div className="font-mono text-[10px] md:text-xs text-gray-400">
          Built with <span className="text-[#1D9E75]">React</span> &amp; <span className="text-[#1D9E75]">Three.js</span>
        </div>

        {/* Social links & scroll-up */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/deepak27iiita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1D9E75] transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-singh-09430028b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1D9E75] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:deepakstd9090@gmail.com"
              className="text-gray-500 hover:text-[#1D9E75] transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#0a0f0d] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1D9E75] hover:border-[#1D9E75] transition-all"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
