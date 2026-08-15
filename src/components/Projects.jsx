import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const rotateX = -y / (box.height / 20); 
    const rotateY = x / (box.width / 20); 
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s',
        transformStyle: 'preserve-3d'
      }}
    >
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Algorithmic Code Visualizer",
    desc: "A premium dashboard utility designed to visualize tree, graph, and sorting algorithms in real-time. Helps developers debug complex DSA problems with step-by-step memory tracers.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Canvas API"],
    github: "https://github.com/deepak27iiita",
    live: "https://github.com/deepak27iiita",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "MERN Stack E-Commerce Platform",
    desc: "A scalable online store featuring JWT auth, Redux cart management, secure checkout integration, and an administrative panel to audit sales, products, and inventory streams.",
    tech: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
    github: "https://github.com/deepak27iiita",
    live: "https://github.com/deepak27iiita",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Real-time Peer-to-Peer Chat",
    desc: "A messaging web application powered by Socket.io, facilitating instant chatting, image sharing, and room channels with custom encryption protocols built-in.",
    tech: ["React", "Node.js", "Socket.io", "Tailwind CSS", "MySQL"],
    github: "https://github.com/deepak27iiita",
    live: "https://github.com/deepak27iiita",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#05070a] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-[50%] left-[-10%] w-[400px] h-[400px] bg-[#1D9E75]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <span className="text-[#1D9E75] font-mono text-xs tracking-widest uppercase mb-2">&gt; works</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Featured Projects</h2>
          <div className="h-[2px] w-20 bg-[#1D9E75] mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* TODO: Replace with real projects */}
              <TiltCard className="bg-[#0a0f0d]/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group hover:border-[#1D9E75]/40 hover:shadow-[0_0_30px_rgba(29,158,117,0.15)] flex flex-col h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                
                {/* Mockup Area */}
                <div className="relative h-48 overflow-hidden bg-emerald-950/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-85 transition-all duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 text-[9px] font-mono font-bold tracking-widest text-[#1D9E75]">
                    MOCKUP
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 rounded-full bg-[#111b17] border border-[#1D9E75]/10 text-[#1D9E75] font-mono text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-base md:text-lg font-bold font-display text-white mb-3 group-hover:text-[#1D9E75] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold font-mono text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      SOURCE
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold font-mono text-[#1D9E75] hover:text-[#2fd19c] transition-colors"
                    >
                      <ExternalLink size={14} />
                      LIVE DEMO
                    </a>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
