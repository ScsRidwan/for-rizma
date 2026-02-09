import React from 'react';
import { Heart, ArrowLeft, MessageCircle } from 'lucide-react';

interface SurprisePageProps {
  onBack: () => void;
}

export const SurprisePage: React.FC<SurprisePageProps> = ({ onBack }) => {
  const ROY_IMAGE_URL = "https://cdn.discordapp.com/attachments/832635225086361660/1470377328801480744/roy.jpg?ex=698b1319&is=6989c199&hm=3b7c5dcd2c655094e393bc954494cd031ca6d54076d6a70e7f25e00d52af20f1&";

  const staticMessage = `nama e pean panjang banget kayak antrean bansos, tapi kelakuanmu jauh lebih ajaib dan bikin darah tinggi tiap hari. 😭 Meskipun kamu titisan reog yang super nyebelin, untungnya aku sayang, jadi ya aku harus mengalah, untuk jadi orang yang sabar padahal aku aries, pean itu alasan di balik guyuku, moodku, semangatku setiap hari. ✨ 

pean seng hobi bikin aku darah tinggi. pean emang nyebelin dan ajaib kelakuannya, tapi herannya kok aku tetep sayang ya?

Aku merasa sangat beruntung memilikimu di sisiku selamanya. Sayang kamu banyak-banyak!

Semoga aku ga meninggal disek ya!

semoga isok ndek sandingmu selawase bahkan sampe awak dewe pindah dunia atau alam LOVE YOU SAGITARIUSKUU! 👌🏽🥰`;

  const waLink = "https://wa.me/6282333101184?text=Meme+sudah+baca+NOTED:+*jangan+gengsi+buat+kirim+pesan+iki+yang*";

  return (
    <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 animate-pop flex flex-col items-center">
      
      {/* Background Decorations (Floating Hearts instead of stickers) */}
      <div className="absolute top-20 left-4 opacity-20 animate-float">
        <Heart className="w-12 h-12 text-love-300 fill-love-300" />
      </div>
      <div className="absolute bottom-40 right-4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-8 h-8 text-love-300 fill-love-300" />
      </div>

      {/* Navigation Header */}
      <div className="w-full p-6 flex items-center justify-between relative z-10 border-b border-gray-50 bg-white/80 backdrop-blur-md sticky top-0">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-love-50 rounded-full transition-colors text-love-400"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-script text-2xl text-love-500">I Love You!</span>
        <div className="w-10" />
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-4 flex flex-col items-center w-full relative z-10 space-y-6 overflow-y-auto max-h-[80vh] scrollbar-hide">
        
        {/* Full Width Photo Display */}
        <div className="relative w-full px-2">
          <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-1 bg-gray-50 flex items-center justify-center">
             <img 
              src={ROY_IMAGE_URL} 
              alt="Roy" 
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -bottom-4 -right-2 bg-white p-3 rounded-full shadow-xl animate-bounce z-20">
            <Heart className="w-6 h-6 text-love-500 fill-love-500" />
          </div>
        </div>

        {/* Romantic Text Section */}
        <div className="w-full text-center space-y-4 pt-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center flex-col px-4">
            <span className="text-[10px] text-love-400 font-bold uppercase tracking-widest mb-1">Pesan Cinta Untuk</span>
            <span className="leading-tight text-love-600 drop-shadow-sm font-sans">I love you, Rizma Adelia Sagitaningrum</span>
          </h2>
          
          <div className="bg-gradient-to-b from-love-50/60 to-white rounded-3xl p-6 border border-love-100 shadow-inner">
            <p className="text-gray-700 text-sm font-medium leading-relaxed whitespace-pre-line text-left italic">
              {staticMessage}
            </p>
          </div>
        </div>

        {/* Striking WhatsApp Button */}
        <div className="w-full pt-2 pb-10">
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full px-6 py-5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-2xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircle className="w-6 h-6 text-white mr-3 animate-wiggle" />
            <span className="text-white font-bold text-lg tracking-tight text-center">
              Makasih Sayang (Klik ini! Meme!)
            </span>
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-3 font-bold uppercase tracking-widest leading-relaxed">
            bayar sek ndang, aku gae ne angel! klik en iki!
          </p>
        </div>

      </div>
    </div>
  );
};