import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX  = useSpring(cursorX, { stiffness: 80,  damping: 22 });
  const trailY  = useSpring(cursorY, { stiffness: 80,  damping: 22 });
  const dotX    = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const dotY    = useSpring(cursorY, { stiffness: 300, damping: 28 });
  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const enterHover = () => { isHovering.current = true; };
    const leaveHover = () => { isHovering.current = false; };

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enterHover);
      el.addEventListener('mouseleave', leaveHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#1D9E75]/60 pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#1D9E75] pointer-events-none z-[9999]"
      />
    </>
  );
}
