import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const HUG_IMAGE = "https://media.tenor.com/4bV9ylEOWpgAAAAj/bubu-dudu-sseeyall.gif"; // Updated GIF

interface CelebrationProps {
  onNext: () => void;
}

export default function Celebration({ onNext }: CelebrationProps) {
  useEffect(() => {
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff577f', '#ff884b', '#ffc75f']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff577f', '#ff884b', '#ffc75f']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-rose-100 to-pink-200">
      <motion.div 
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-pink-500 to-rose-400"></div>
        
        <div className="mb-6 relative">
             <div className="absolute -top-4 -left-4 text-4xl animate-bounce">💖</div>
             <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce delay-100">✨</div>
             <img 
              src={HUG_IMAGE} 
              alt="Celebration" 
              className="w-64 h-64 object-cover mx-auto rounded-full border-4 border-rose-200 shadow-inner"
            />
        </div>

        <h1 className="text-4xl font-bold text-rose-600 mb-4 font-handwriting">
          Happy Valentine Day Baby! 💕
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg font-light italic">
          "Every second with you is a celebration. You are the shine that makes my world so much brighter!"
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(244, 63, 94)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg flex items-center justify-center gap-2 mx-auto"
        >
          <span>SEE MY GIFT</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}