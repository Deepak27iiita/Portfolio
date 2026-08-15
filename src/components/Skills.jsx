import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiRedux, SiTailwindcss, SiHtml5, SiCss, 
  SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiGit, SiGithub, SiLinux, SiPostman, SiVscodium, 
  SiCplusplus, SiPython, SiC 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" size={28} />, level: 90 },
      { name: "Java", icon: <FaJava className="text-[#E76F00]" size={28} />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={28} />, level: 85 },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" size={28} />, level: 75 },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" size={28} />, level: 80 },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" size={28} />, level: 85 },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={28} />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={28} />, level: 90 },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" size={28} />, level: 90 },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" size={28} />, level: 85 },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" size={28} />, level: 75 },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" size={28} />, level: 80 },
      { name: "Express.js", icon: <SiExpress className="text-white bg-black rounded p-0.5" size={28} />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={28} />, level: 80 },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={28} />, level: 75 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" size={28} />, level: 85 },
      { name: "GitHub", icon: <SiGithub className="text-white" size={28} />, level: 90 },
      { name: "Linux", icon: <SiLinux className="text-[#FCC624]" size={28} />, level: 75 },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" size={28} />, level: 80 },
      { name: "VS Code", icon: <SiVscodium className="text-[#007ACC]" size={28} />, level: 90 },
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0f0d]/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#1D9E75]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <span className="text-[#1D9E75] font-mono text-xs tracking-widest uppercase mb-2">&gt; skills</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Technical Arsenal</h2>
          <div className="h-[2px] w-20 bg-[#1D9E75] mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-12">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-base md:text-lg font-mono font-semibold text-[#1D9E75] mb-6 flex items-center gap-2">
                <span>//</span> {group.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4"
              >
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={cardVariants}
                    className="bg-[#0a0f0d]/60 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex flex-col items-center justify-between group hover:border-[#1D9E75]/40 hover:shadow-[0_0_20px_rgba(29,158,117,0.15)] transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover Glow line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1D9E75] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>

                    {/* Proficiency bar */}
                    <div className="w-full mt-4 h-1 bg-[#111b17] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-[#1D9E75]"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
