import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Scene3D from './components/Scene3D';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen text-gray-100 selection:bg-[#1D9E75]/30 selection:text-white">
          {/* Custom cursor (desktop only) */}
          {!isMobile && <CustomCursor />}

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Single global 3D canvas background */}
          <Scene3D isMobile={isMobile} />

          {/* Navigation */}
          <Navbar />

          {/* Page content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <CompetitiveProgramming />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
