import React from 'react';
import { Heart, ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';

interface MemoryPageProps {
  onBack: () => void;
  onNext: () => void;
}

export const MemoryPage: React.FC<MemoryPageProps> = ({ onBack, onNext }) => {
  const MEMORY_IMAGE_URL = "https://cdn.discordapp.com/attachments/832635225086361660/1470391867110850756/IMG-20260209-WA0024.jpg?ex=698b20a3&is=6989cf23&hm=2d2f6906102224790b54cefaed57e06f0cdf7c8b701efcee2908ed9c033127c1&";

  const storyText = "Awal Aku chat sampean, sebelum e ada seh cuman itu out of topic, iki awal aku wani chat pean mergo kepekso asline ga wani blas, aku due roso nak pean pas pean awal ngewangi ngremote batinku \"JOHH CEK AYUNE\" asli ay!! no fek fek";

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
        <span className="font-script text-2xl text-love-500">Memory Kita</span>
        <div className="w-10" />
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-4 flex flex-col items-center w-full relative z-10 space-y-6 overflow-y-auto max-h-[80vh] scrollbar-hide">
        
        {/* Memory Photo Display - Full visibility */}
        <div className="relative w-full px-2 pt-2">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-50 flex items-center justify-center">
             <img 
              src={MEMORY_IMAGE_URL} 
              alt="Awal Chat" 
              className="w-full h-full object-contain bg-black/5"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1516589174184-c6858b16ecb0?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -top-1 -right-1 bg-teal-500 p-2 rounded-full shadow-lg animate-bounce z-20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Story Text Section */}
        <div className="w-full space-y-4">
          <div className="bg-gradient-to-br from-love-50 to-white rounded-3xl p-6 border border-love-100 shadow-inner">
            <p className="text-gray-800 text-base font-medium leading-relaxed italic text-center">
              "{storyText}"
            </p>
          </div>
        </div>

        {/* Navigation Button (Penting: Sesuai Permintaan) */}
        <button 
          onClick={onNext}
          className="w-full flex flex-col items-center justify-center space-y-1 py-4 bg-love-500 hover:bg-love-600 text-white rounded-2xl transition-all shadow-lg transform hover:scale-[1.02] active:scale-95 group"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">Selanjute maneh ay!</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="text-[11px] font-medium opacity-90 italic">Sek ada soale</span>
        </button>
        
        <div className="pb-8">
          <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest animate-pulse">
            Biyen isin, saiki bucin ✨
          </p>
        </div>

      </div>
    </div>
  );
};