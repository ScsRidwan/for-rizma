import React from 'react';
import { Heart, MousePointerClick } from 'lucide-react';

interface LandingPageProps {
  onButtonClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onButtonClick }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-pop">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-300 to-love-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <button
          onClick={onButtonClick}
          className="relative px-8 py-6 bg-white rounded-full leading-none flex items-center divide-x divide-gray-200 shadow-xl transform transition-transform hover:scale-105 active:scale-95"
        >
          <span className="flex items-center space-x-3 px-4">
            <Heart className="w-8 h-8 text-love-500 fill-love-500 animate-bounce" />
            <span className="text-2xl font-bold text-gray-800 font-sans">
              (KLIK EN POK O! DUH!)
            </span>
          </span>
          <span className="pl-4 text-love-400 group-hover:text-love-600 transition-colors duration-200">
            <MousePointerClick className="w-6 h-6" />
          </span>
        </button>
      </div>
      
      <p className="text-love-600 font-bold animate-float opacity-90 mt-4 text-center">
        Awakmu ojo mlete mlete maneh!
      </p>
    </div>
  );
};