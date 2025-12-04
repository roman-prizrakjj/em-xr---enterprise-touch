import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* Abstract Background mimicking particles/turbine flow */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-slate-900 to-black"></div>
        <img 
            src="https://picsum.photos/seed/turbine/1920/1080" 
            alt="Abstract Flow" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Интерактивные стенды <span className="text-blue-400">«под ключ»</span>: от сценария до монтажа на площадке.
          </h1>
          <div className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
            Объединяем топовое «железо» и сложную разработку в стабильный продукт.
          </div>
          <p className="text-blue-200 text-lg">
            Идеально для ответственных презентаций.
          </p>
          <div className="pt-4">
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]">
               Связаться с нами
             </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
            {/* AI Robot */}
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl animate-pulse"></div>
                <img 
                    src="/references/images/robot.png" 
                    alt="AI Robot" 
                    className="relative z-10 w-auto h-[650px] object-contain drop-shadow-2xl hover:scale-105 transition-all duration-700"
                />
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};

export default Hero;