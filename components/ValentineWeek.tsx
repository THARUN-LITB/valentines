import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface ValentineWeekProps {
  onComplete: () => void;
}

/* =================================
   💘 DAYS (USING PUBLIC IMAGES)
   ================================= */

const DAYS = [
  {
    name: "Rose Day",
    date: "Feb 7",
    img: "/valentine/rose.jpg",
    text: "A rose for the most beautiful person in my life 🌹",
    theme: {
      bg: "from-rose-100 via-red-100 to-rose-200",
      icon: "🌹",
      textColor: "text-rose-600",
      btnColor: "bg-rose-500 hover:bg-rose-600 shadow-rose-200",
    },
  },
  {
    name: "Propose Day",
    date: "Feb 8",
    img: "/valentine/propose.jpg",
    text: "Will you be my player 2 forever? 💍",
    theme: {
      bg: "from-blue-100 via-indigo-100 to-purple-200",
      icon: "💍",
      textColor: "text-indigo-600",
      btnColor: "bg-indigo-500 hover:bg-indigo-600 shadow-indigo-200",
    },
  },
  {
    name: "Chocolate Day",
    date: "Feb 9",
    img: "/valentine/chocolate.jpg",
    text: "Life is sweeter with you 🍫",
    theme: {
      bg: "from-amber-100 via-orange-100 to-yellow-200",
      icon: "🍫",
      textColor: "text-amber-700",
      btnColor: "bg-amber-600 hover:bg-amber-700 shadow-amber-200",
    },
  },
  {
    name: "Teddy Day",
    date: "Feb 10",
    img: "/valentine/teddy.jpg",
    text: "Sending you the warmest hug 🧸",
    theme: {
      bg: "from-orange-50 via-red-50 to-pink-100",
      icon: "🧸",
      textColor: "text-orange-600",
      btnColor: "bg-orange-500 hover:bg-orange-600 shadow-orange-200",
    },
  },
  {
    name: "Promise Day",
    date: "Feb 11",
    img: "/valentine/promise.jpg",
    text: "Forever with you, no matter what 🤝",
    theme: {
      bg: "from-sky-100 via-blue-100 to-cyan-200",
      icon: "🤞",
      textColor: "text-sky-600",
      btnColor: "bg-sky-500 hover:bg-sky-600 shadow-sky-200",
    },
  },
  {
    name: "Hug Day",
    date: "Feb 12",
    img: "/valentine/hug.jpg",
    text: "Come hereee 🤗",
    theme: {
      bg: "from-pink-100 via-rose-100 to-fuchsia-200",
      icon: "🤗",
      textColor: "text-pink-600",
      btnColor: "bg-pink-500 hover:bg-pink-600 shadow-pink-200",
    },
  },
  {
    name: "Kiss Day",
    date: "Feb 13",
    img: "/valentine/kiss.jpg",
    text: "Sealed with love 💋",
    theme: {
      bg: "from-red-100 via-rose-200 to-red-300",
      icon: "💋",
      textColor: "text-red-600",
      btnColor: "bg-red-500 hover:bg-red-600 shadow-red-200",
    },
  },
];

/* =================================
   FLOATING ICONS
   ================================= */

const FloatingIcons = ({ icon }: { icon: string }) => {
  const icons = useMemo(
    () =>
      Array(20)
        .fill(null)
        .map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 5,
        })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute opacity-30"
          initial={{ y: 0 }}
          animate={{ y: -120 }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
          }}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: "24px",
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

/* =================================
   MAIN COMPONENT
   ================================= */

export default function ValentineWeek({ onComplete }: ValentineWeekProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDay = DAYS[currentIndex];

  const handleNext = () => {
    confetti({ particleCount: 70, spread: 80 });

    if (currentIndex < DAYS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${currentDay.theme.bg} p-6 relative overflow-hidden`}
    >
      <FloatingIcons icon={currentDay.theme.icon} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md w-full text-center z-10"
        >
          <h2
            className={`text-4xl font-bold mb-6 ${currentDay.theme.textColor}`}
          >
            {currentDay.name}
          </h2>

          {/* IMAGE */}
          <div className="w-64 h-64 mx-auto overflow-hidden rounded-2xl mb-6 shadow-lg">
            <img
              src={currentDay.img}
              alt={currentDay.name}
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <p className="italic text-gray-700 mb-8">{currentDay.text}</p>

          <button
            onClick={handleNext}
            className={`w-full py-3 rounded-full text-white font-bold ${currentDay.theme.btnColor}`}
          >
            {currentIndex === DAYS.length - 1
              ? "Finish The Week ❤️"
              : "Next Day →"}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
