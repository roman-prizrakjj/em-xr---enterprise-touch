import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-dark text-white pt-[100px] lg:pt-[140px] pb-12 lg:pb-24">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/30"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full">
        <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
          {/* Mobile: Robot on top */}
          <div className="lg:hidden flex justify-center mb-8">
            <img 
              src="/references/images/robot.png" 
              alt="3D Interactive Display" 
              className="w-full max-w-[320px] h-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 min-w-0 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight">
                <span className="lg:whitespace-nowrap">Интерактивные стенды</span><br />
                от сценария до<br />
                монтажа на площадке
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-medium text-[#B7B7B7] leading-[1.4] max-w-[500px] mx-auto lg:mx-0">
                Объединяем «железо» и сложную разработку<br />
                в стабильный продукт.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <button 
                   onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
                   className="bg-[#A053FF] hover:bg-[#B070FF] text-white font-medium py-3 px-10 rounded-full transition-all text-base w-full sm:w-auto"
                 >
                   связаться
                 </button>
                 <button 
                   className="border border-[#A053FF] hover:bg-[#A053FF]/10 text-[#B7B7B7] hover:text-white font-medium py-3 px-10 rounded-full transition-all text-base w-full sm:w-auto"
                 >
                   получить презентацию
                 </button>
              </div>
            </div>

            {/* Right - 3D Image (Desktop only) */}
            <div className="hidden lg:flex justify-end items-center">
                <img 
                    src="/references/images/robot.png" 
                    alt="3D Interactive Display" 
                    className="w-full max-w-[750px] h-auto object-contain translate-x-20"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;