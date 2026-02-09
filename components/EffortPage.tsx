import React from 'react';
import { Heart, ArrowLeft, Star, ArrowRight } from 'lucide-react';

interface EffortPageProps {
  onBack: () => void;
  onNext: () => void;
}

export const EffortPage: React.FC<EffortPageProps> = ({ onBack, onNext }) => {
  const EFFORT_IMAGE_URL = "https://cdn.discordapp.com/attachments/832635225086361660/1470394456749637642/IMG-20260209-WA0025.jpg?ex=698b230d&is=6989d18d&hm=4538849fbd43af40048f0d206337abcc827680bd62c2d813af1d9268d5a1e499&";

  const effortText = "Iki seng selalu tak inget ndek otakku ay aku ga bakal lali, seberapa besar seng pean kasih no nak aku selama iki, aku suayang ndek kamu, Aku gaisok ngekek i 1m secepat iku aku mek isok ngekeki effortku sebanyak mungkin seng ga enek entek e";

  return (
    <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 animate-pop flex flex-col items-center">
      
      {/* Navigation Header */}
      <div className="w-full p-6 flex items-center justify-between relative z-10 border-b border-gray-50 bg-white/80 backdrop-blur-md sticky top-0">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-love-50 rounded-full transition-colors text-love-400"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-script text-2xl text-love-500">Ingatan Ivan</span>
        <div className="w-10" />
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-4 flex flex-col items-center w-full relative z-10 space-y-6 overflow-y-auto max-h-[80vh] scrollbar-hide">
        
        {/* Effort Photo Display */}
        <div className="relative w-full px-2 pt-2">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-50 flex items-center justify-center">
             <img 
              src={EFFORT_IMAGE_URL} 
              alt="Effort Kita" 
              className="w-full h-full object-contain bg-black/5"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -top-1 -left-1 bg-yellow-400 p-2 rounded-full shadow-lg animate-pulse z-20">
            <Star className="w-5 h-5 text-white fill-white" />
          </div>
        </div>

        {/* Effort Text Section */}
        <div className="w-full space-y-4">
          <div className="bg-gradient-to-tr from-teal-50 to-white rounded-3xl p-6 border border-teal-100 shadow-inner">
            <p className="text-gray-800 text-base font-medium leading-relaxed italic text-center">
              "{effortText}"
            </p>
          </div>
        </div>

        {/* Navigation Button to the next page */}
        <button 
          onClick={onNext}
          className="w-full flex flex-col items-center justify-center space-y-1 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all shadow-lg transform hover:scale-[1.02] active:scale-95 group"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">Lanjut sayang...</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="text-[11px] font-medium opacity-90 italic">Ada yang mau aku omongin</span>
        </button>
        
        <div className="pb-8">
          <div className="flex justify-center space-x-2">
            <Heart className="w-4 h-4 text-love-200 fill-love-200" />
            <Heart className="w-4 h-4 text-love-400 fill-love-400" />
            <Heart className="w-4 h-4 text-love-200 fill-love-200" />
          </div>
        </div>

      </div>
    </div>
  );
};