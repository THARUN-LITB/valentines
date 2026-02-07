import React from 'react';
import { motion } from 'framer-motion';

// A nice placeholder for the couple video/image
const FINAL_IMAGE = "https://picsum.photos/seed/couple-final/400/600";

interface FinalSurpriseProps {
  onRestart: () => void;
  onSeeWeek: () => void;
}

export default function FinalSurprise({ onRestart, onSeeWeek }: FinalSurpriseProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white relative overflow-hidden">
        {/* Background hearts */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
             {[...Array(20)].map((_, i) => (
                 <div 
                    key={i}
                    className="absolute text-rose-500 text-4xl animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        fontSize: `${Math.random() * 2 + 1}rem`
                    }}
                 >
                     ♥
                 </div>
             ))}
        </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-lg w-full"
      >
        <h1 className="text-4xl md:text-6xl font-handwriting text-rose-500 mb-8">
          You are my forever 🧿❤️!
        </h1>

        <div className="relative group mx-auto w-64 md:w-80 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(225,29,72,0.6)] border-4 border-rose-900/50">
            <img 
                src={FINAL_IMAGE} 
                alt="Us Forever" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="font-handwriting text-2xl text-rose-200">Happy Valentine's Day</p>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 space-y-4 flex flex-col items-center"
        >
            <p className="text-gray-300 italic text-lg leading-relaxed px-4 mb-4">
                "I love you more than words can say. No matter where life takes us, my heart will always choose you. Thank you for being my peace, my smile, my love."
            </p>
            
            <button
                onClick={onSeeWeek}
                className="bg-rose-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-700 transition-colors animate-pulse"
            >
                Start Valentine Week Journey 🌹
            </button>

            <button 
                onClick={onRestart}
                className="mt-4 text-sm text-gray-500 hover:text-white transition-colors"
            >
                (Replay our story)
            </button>
        </motion.div>
      </motion.div>
    </div>
  );
}