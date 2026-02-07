import React, { useState } from 'react';
import Proposal from './components/Proposal';
import Celebration from './components/Celebration';
import GiftMenu from './components/GiftMenu';
import Letter from './components/gifts/Letter';
import Gallery from './components/gifts/Gallery';
import Quiz from './components/gifts/Quiz';
import FinalSurprise from './components/FinalSurprise';
import ValentineWeek from './components/ValentineWeek';
import { AppState } from './types';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('proposal');

  const renderScreen = () => {
    switch (currentState) {
      case 'proposal':
        return <Proposal onYes={() => setCurrentState('celebration')} />;
      case 'celebration':
        return <Celebration onNext={() => setCurrentState('menu')} />;
      case 'menu':
        return (
          <GiftMenu 
            onSelectGift={(gift) => setCurrentState(gift)} 
            onFinish={() => setCurrentState('final')}
          />
        );
      case 'letter':
        return <Letter onBack={() => setCurrentState('menu')} />;
      case 'gallery':
        return <Gallery onBack={() => setCurrentState('menu')} />;
      case 'quiz':
        return <Quiz onBack={() => setCurrentState('menu')} />;
      case 'final':
        return (
          <FinalSurprise 
            onRestart={() => setCurrentState('proposal')} 
            onSeeWeek={() => setCurrentState('valentine-week')}
          />
        );
      case 'valentine-week':
        return <ValentineWeek onComplete={() => setCurrentState('proposal')} />;
      default:
        return <Proposal onYes={() => setCurrentState('celebration')} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-rose-50 text-gray-800 overflow-hidden relative">
      {renderScreen()}
    </div>
  );
}