import React, { useEffect, useState, useRef } from 'react';

const CODE_SNIPPET = `
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      background-color: #ffe4e6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Nunito', sans-serif;
    }
    .heart {
      color: #e11d48;
      animation: beat 1s infinite;
    }
    /* 
      TODO: Ask the most important question...
      Initializing love_protocol...
      Loading cute_assets...
    */
  </style>
</head>
<body>
  <h1>Hello Beautiful World!</h1>
  <script>
    const valentine = new Date();
    if (valentine) {
      initiateProposal();
    }
  </script>
</body>
</html>
`;

interface CodeIntroProps {
  onComplete: () => void;
}

export default function CodeIntro({ onComplete }: CodeIntroProps) {
  const [displayedCode, setDisplayedCode] = useState('');
  const [opacity, setOpacity] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 25; // ms per char

    const interval = setInterval(() => {
      if (currentIndex < CODE_SNIPPET.length) {
        setDisplayedCode((prev) => prev + CODE_SNIPPET[currentIndex]);
        currentIndex++;
        
        // Auto scroll to bottom
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      } else {
        clearInterval(interval);
        setTimeout(() => {
            setOpacity(0);
            setTimeout(onComplete, 1000); // Wait for fade out
        }, 800);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-[#1e1e1e] text-blue-300 font-code p-4 md:p-8 flex flex-col transition-opacity duration-1000 z-50"
      style={{ opacity }}
    >
      <div className="flex items-center justify-between bg-[#2d2d2d] p-2 rounded-t-lg border-b border-[#1e1e1e]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm">index.html - Visual Studio Code</div>
        <div className="w-4"></div>
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 overflow-auto code-scroll bg-[#1e1e1e] p-4 text-sm md:text-base whitespace-pre-wrap leading-relaxed shadow-inner"
      >
        <code className="text-green-400">
            {displayedCode}
            <span className="animate-pulse inline-block w-2 h-4 bg-white ml-1 align-middle"></span>
        </code>
      </div>
    </div>
  );
}