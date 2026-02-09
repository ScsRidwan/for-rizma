import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { SurprisePage } from './components/SurprisePage';
import { MemoryPage } from './components/MemoryPage';
import { EffortPage } from './components/EffortPage';
import { ConfessionPage } from './components/ConfessionPage';
import { HealingPage } from './components/HealingPage';

type ViewState = 'landing' | 'memory' | 'effort' | 'confession' | 'healing' | 'surprise';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {view === 'landing' && (
        <LandingPage onButtonClick={() => setView('memory')} />
      )}
      {view === 'memory' && (
        <MemoryPage 
          onBack={() => setView('landing')} 
          onNext={() => setView('effort')}
        />
      )}
      {view === 'effort' && (
        <EffortPage 
          onBack={() => setView('memory')} 
          onNext={() => setView('confession')}
        />
      )}
      {view === 'confession' && (
        <ConfessionPage 
          onBack={() => setView('effort')} 
          onNext={() => setView('healing')}
        />
      )}
      {view === 'healing' && (
        <HealingPage 
          onBack={() => setView('confession')} 
          onNext={() => setView('surprise')}
        />
      )}
      {view === 'surprise' && (
        <SurprisePage onBack={() => setView('healing')} />
      )}
    </div>
  );
}