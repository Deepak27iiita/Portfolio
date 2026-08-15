import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Landmark } from 'lucide-react';

const achievements = [
  {
    title: "Meta Hacker Cup",
    org: "Meta",
    status: "Participant",
    desc: "Participated in one of the most prestigious global competitive programming contests, solving complex algorithmic problems under tight constraints.",
    icon: <Trophy className="text-[#FFD700]" size={24} />,
    glowColor: "rgba(255, 215, 0, 0.15)"
  },
  {
    title: "Flipkart Grid 5.0",
    org: "Flipkart",
    status: "National Semi-Finalist",
    desc: "Reached the National Semi-Finals in the Software Development Track, competing against top engineering minds across India in system architecture design.",
    icon: <Award className="text-[#E5E4E2]" size={24} />,
    glowColor: "rgba(229, 228, 226, 0.15)"
  },
  {
    title: "Google Big Code",
    org: "Google",
    status: "Round 3 Qualifier",
    desc: "Qualified for Round 3 in Google's code-optimization challenge, solving algorithmic design problems using highly efficient data structures.",
    icon: <Target className="text-[#1D9E75]" size={24} />,
    glowColor: "rgba(29, 158, 117, 0.15)"
  },
  {
    title: "Eudia Hackathon",
    org: "Eudia",
    status: "Semi-Finalist",
    desc: "Designed and prototyped an innovative healthcare-tech MERN stack solution in a 36-hour sprint, advancing to the semi-finals stage.",
    icon: <Landmark className="text-teal-400" size={24} />,
    glowColor: "rgba(45, 212, 191, 0.15)"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-[#05070a] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#1D9E75]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <span className="text-[#1D9E75] font-mono text-xs tracking-widest uppercase mb-2">&gt; trophies</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Achievements</h2>
          <div className="h-[2px] w-20 bg-[#1D9E75] mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex gap-6 relative group hover:translate-y-[-4px] hover:border-[#1D9E75]/30 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              {/* Radial glow background on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                style={{
                  background: `radial-gradient(circle at 10% 20%, ${item.glowColor} 0%, transparent 60%)`
                }}
              />

              {/* Icon container */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0a0f0d] border border-white/10 flex items-center justify-center relative group-hover:border-[#1D9E75] transition-colors duration-300">
                {item.icon}
                <div className="absolute inset-0 rounded-full border border-white/5 scale-110 opacity-30 animate-pulse" />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <span className="text-[#1D9E75] font-mono text-[10px] md:text-xs font-semibold mb-1 uppercase tracking-wider">
                  {item.org} &bull; {item.status}
                </span>
                <h3 className="text-lg md:text-xl font-bold font-display text-white mb-3 group-hover:text-[#1D9E75] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
