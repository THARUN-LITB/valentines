import React from 'react';
import { motion } from 'framer-motion';

interface LetterProps {
  onBack: () => void;
}

export default function Letter({ onBack }: LetterProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-pink-100">
      <motion.div 
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#fffdf9] p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl w-full relative paper-texture"
        style={{
            backgroundImage: "linear-gradient(#e1e1e1 1px, transparent 1px)",
            backgroundSize: "100% 1.5rem"
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
            ❤️
        </div>

        <h2 className="text-3xl font-handwriting text-rose-600 mb-8 mt-4 text-center">A Letter For You</h2>
        
        <div className="font-handwriting text-xl md:text-2xl text-gray-700 leading-loose space-y-6">
          <p>My Baby,</p>
          <p>
            Thank you for being my person. I want to hold your hand through every season of life. You are my time, my joy, my everything, and I want to say "I love you" more than words can say.
          </p>
          <p>
            No matter where life takes us, my heart will always choose you. Thank you for being my peace, my smile, my love. No one can replace you in my heart.
          </p>
          <p className="text-right mt-8">- Forever yours ❤️</p>
        </div>
      </motion.div>

      <button 
        onClick={onBack}
        className="mt-8 text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-2 transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Gifts
      </button>
    </div>
  );
}