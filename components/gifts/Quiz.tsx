import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface QuizProps {
  onBack: () => void;
}

const QUESTIONS = [
  {
    question: "Who is the absolute 'boss' in this relationship 👑?",
    options: ["Obviously You", "No one", "Me"],
    correct: 0,
    successMsg: "That's right! I know my place 😉"
  },
  {
    question: "What's my fav thing in owr relationship 🫣?",
    options: ["my girl", "Nothing", "don't know"],
    correct: 0, // In the video "Always You" is selected
    successMsg: "Hehe,your right my girl! 😅"
  },
  {
    question: "Where do I plan to spend the rest of my life 🏡?",
    options: ["Paris", "In Your Heart", "whole world"],
    correct: 1,
    successMsg: "Exactly where I belong! ❤️"
  }
];

export default function Quiz({ onBack }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    
    if (index === QUESTIONS[currentQ].correct) {
      setFeedback(QUESTIONS[currentQ].successMsg);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      setTimeout(() => {
        if (currentQ < QUESTIONS.length - 1) {
          setCurrentQ(prev => prev + 1);
          setSelectedOption(null);
          setFeedback(null);
        } else {
          setIsFinished(true);
        }
      }, 2000);
    } else {
      setFeedback("hehehe not that 😅");
      // Shake effect can be added here
      setTimeout(() => {
        setSelectedOption(null);
        setFeedback(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-rose-50">
      <div className="w-full max-w-lg">
        <button 
          onClick={onBack}
          className="mb-8 text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentQ}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="bg-white p-8 rounded-3xl shadow-xl border-2 border-rose-100"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz for you 😉</h2>
                <p className="text-gray-500 text-sm">Question {currentQ + 1} of {QUESTIONS.length}</p>
              </div>

              <h3 className="text-xl font-medium text-center text-rose-600 mb-8">
                {QUESTIONS[currentQ].question}
              </h3>

              <div className="space-y-4">
                {QUESTIONS[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 rounded-xl font-semibold transition-all transform active:scale-95 ${
                      selectedOption === idx
                        ? idx === QUESTIONS[currentQ].correct
                          ? 'bg-green-500 text-white shadow-green-200'
                          : 'bg-red-500 text-white shadow-red-200'
                        : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {feedback && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center font-bold text-gray-700"
                >
                  {feedback}
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-8 rounded-3xl shadow-xl text-center"
            >
              <div className="text-6xl mb-6">🏆</div>
              <h2 className="text-3xl font-bold text-rose-600 mb-4">Quiz Completed!</h2>
              <p className="text-gray-600 mb-8">
                Yay! You passed the test! You really love me! 💖
              </p>
              <button
                onClick={onBack}
                className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-600 transition-colors"
              >
                Finish
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}