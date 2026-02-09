import React from 'react';
import { Heart, ArrowLeft, ArrowRight, Smile } from 'lucide-react';

interface HealingPageProps {
  onBack: () => void;
  onNext: () => void;
}

export const HealingPage: React.FC<HealingPageProps> = ({ onBack, onNext }) => {
  const HEALING_IMAGE_URL = "https://cdn.discordapp.com/attachments/832635225086361660/1470400841130184704/1770641247713.jpg?ex=698b28ff&is=6989d77f&hm=19f3e3f7d16f4378f49db5f8cec704ca4a0574b16f750638529e7240f9c8e6b7&";

  const message = `kadang aku loro karo omongamu seng nyuelekit tapi kan, kamu pernah ngomong gini "Aku nek kadung ngamuk mangkel omonganku gaisok tak rem"

hehe lucu ya bocil bocil!

aku sedikit pun ga enek sek niatan ninggalno MEME!

masio aku capek mbek tingkah lakumu, aku nyembuhno kabeh iki, dengan cara eling eling usaha e meme gae nyenengno ipan, usaha e meme gae jenguk ipan effort effort e meme lah.

masio loro e sek onok tapi yowes!

aku sek tetep mbek meme, masio awakmu kesel mangkel yowes, aku yakin suatu saat awakmu bakal sadar aku yok opo asline hehehe.`;

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
        <span className="font-script text-2xl text-love-500">Healing for Us</span>
        <div className="w-10" />
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-4 flex flex-col items-center w-full relative z-10 space-y-6 overflow-y-auto max-h-[80vh] scrollbar-hide">
        
        {/* Healing Photo */}
        <div className="relative w-full px-2 pt-2">
          <div className="w-full aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-50 flex items-center justify-center">
             <img 
              src={HEALING_IMAGE_URL} 
              alt="Healing Moment" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-love-400 p-2 rounded-full shadow-lg animate-bounce z-20">
            <Smile className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Message Section */}
        <div className="w-full space-y-4">
          <div className="bg-gradient-to-br from-love-50 to-white rounded-3xl p-6 border border-love-100 shadow-inner">
            <p className="text-gray-700 text-sm font-medium leading-relaxed italic text-center whitespace-pre-line">
              {message}
            </p>
          </div>
        </div>

        {/* Navigation Button to the final page */}
        <button 
          onClick={onNext}
          className="w-full flex flex-col items-center justify-center space-y-1 py-4 bg-love-500 hover:bg-love-600 text-white rounded-2xl transition-all shadow-lg transform hover:scale-[1.02] active:scale-95 group mb-8"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">Terakhir ya sayang...</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="text-[11px] font-medium opacity-90 italic">Klik untuk kejutan terakhir</span>
        </button>
      </div>
    </div>
  );
};