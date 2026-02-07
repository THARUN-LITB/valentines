import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Using consistent high-quality cute GIFs/Images
const IMAGES = {
  asking: "https://media.tenor.com/-aW73OVUtyYAAAAm/tkthao219-bubududu.webp", // The specific image requested
};

interface ProposalProps {
  onYes: () => void;
}

export default function Proposal({ onYes }: ProposalProps) {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Increase scale aggressively so it covers the No button quickly
    setYesScale(prev => prev * 1.5);
  };

  const getModalContent = () => {
    switch (noCount) {
      case 0:
        return {
          text: "Will you be mine 🥺?",
          subtext: "Life is an incredible journey, and I want to spend every single second of it with you.",
          img: IMAGES.asking
        };
      case 1:
        return {
          text: "Think again 🥺",
          subtext: "Are you sure you want to say no to this cutie?",
          img: IMAGES.asking
        };
      case 2:
        return {
          text: "Are You sure 🥺?",
          subtext: "I'm giving you another chance...",
          img: IMAGES.asking
        };
      case 3:
        return {
          text: "Please... 🥺",
          subtext: "Don't break my heart! (Just kidding, but please say yes!)",
          img: IMAGES.asking
        };
      default:
        return {
          text: "Just say YES already! 💖",
          subtext: "I'm not giving up...",
          img: IMAGES.asking
        };
    }
  };

  const content = getModalContent();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden relative">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2020/01/05/31038-384373462_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-rose-100/60 backdrop-blur-[2px]"></div>
      </div>

      <motion.div 
        key={noCount}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md w-full text-center relative z-10 border border-white"
      >
        <img 
          src={content.img} 
          alt="Reaction" 
          className="w-48 h-48 mx-auto mb-6 object-contain"
        />
        
        <h1 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4 font-handwriting">
          {content.text}
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          {content.subtext}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 relative">
          <motion.button
            animate={{ scale: yesScale }}
            whileHover={{ scale: yesScale * 1.1 }}
            whileTap={{ scale: yesScale * 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            onClick={onYes}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all z-20"
          >
            YES! 💖
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNoClick}
            className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-300 transition-colors z-10"
          >
            {noCount === 0 ? "No" : "No 😢"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}