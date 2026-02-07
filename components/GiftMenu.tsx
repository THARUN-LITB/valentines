import React from 'react';
import { motion } from 'framer-motion';
import { AppState } from '../types';

interface GiftMenuProps {
  onSelectGift: (gift: AppState) => void;
  onFinish: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function GiftMenu({ onSelectGift, onFinish }: GiftMenuProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-rose-50">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-12 font-handwriting text-center">
        Something for You 🎁
      </h1>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full"
      >
        {/* Gift 1 */}
        <motion.div 
          variants={item}
          onClick={() => onSelectGift('letter')}
          whileHover={{ y: -10 }}
          className="bg-white p-6 rounded-2xl shadow-xl cursor-pointer border-2 border-transparent hover:border-pink-300 transition-all flex flex-col items-center gap-4 group"
        >
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center text-4xl group-hover:bg-pink-200 transition-colors">
            💌
          </div>
          <h3 className="text-xl font-bold text-gray-700">Gift 1</h3>
          <p className="text-sm text-gray-500 text-center">A special letter from my heart</p>
        </motion.div>

        {/* Gift 2 */}
        <motion.div 
          variants={item}
          onClick={() => onSelectGift('gallery')}
          whileHover={{ y: -10 }}
          className="bg-white p-6 rounded-2xl shadow-xl cursor-pointer border-2 border-transparent hover:border-pink-300 transition-all flex flex-col items-center gap-4 group"
        >
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center text-4xl group-hover:bg-pink-200 transition-colors">
            📸
          </div>
          <h3 className="text-xl font-bold text-gray-700">Gift 2</h3>
          <p className="text-sm text-gray-500 text-center">Our memories together</p>
        </motion.div>

        {/* Gift 3 */}
        <motion.div 
          variants={item}
          onClick={() => onSelectGift('quiz')}
          whileHover={{ y: -10 }}
          className="bg-white p-6 rounded-2xl shadow-xl cursor-pointer border-2 border-transparent hover:border-pink-300 transition-all flex flex-col items-center gap-4 group"
        >
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center text-4xl group-hover:bg-pink-200 transition-colors">
            🎮
          </div>
          <h3 className="text-xl font-bold text-gray-700">Gift 3</h3>
          <p className="text-sm text-gray-500 text-center">A fun little quiz</p>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onFinish}
        className="mt-16 bg-rose-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-700 transition-colors"
      >
        Final Surprise -&gt;
      </motion.button>
    </div>
  );
}