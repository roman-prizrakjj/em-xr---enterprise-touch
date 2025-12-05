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
          {/* Mobile: Horizontal Panel with Robot */}
          <div className="lg:hidden flex justify-center mb-8">
            <div 
              className="relative"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Mobile Horizontal Screen Housing */}
              <div 
                className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-[1rem] p-1.5"
                style={{ 
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.15),
                    0 20px 40px -10px rgba(0,0,0,0.9),
                    inset 0 1px 0 rgba(255,255,255,0.1)
                  `,
                  transform: 'rotateX(10deg)'
                }}
              >
                {/* Screen Bezel */}
                <div className="bg-black rounded-[0.75rem] p-1 relative">
                  {/* Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[0.75rem] pointer-events-none z-10"></div>
                  
                  {/* Main Horizontal Screen */}
                  <div className="relative w-[280px] sm:w-[340px] h-[180px] sm:h-[220px] bg-gradient-to-b from-slate-900 to-black rounded-[0.5rem] overflow-hidden">
                    
                    {/* Screen Header */}
                    <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 z-20">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-[#A053FF] to-purple-600 flex items-center justify-center">
                          <span className="text-white font-bold text-[8px]">EM</span>
                        </div>
                        <span className="text-white/80 text-[10px] font-medium">EM XR Interactive</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white/50 text-[8px]">LIVE</span>
                      </div>
                    </div>

                    {/* Robot Video inside screen */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <video 
                        src="/references/videos/robotv.webm" 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain scale-125"
                      />
                    </div>

                    {/* Screen Footer */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2.5 py-2 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-white/50 text-[8px]">Коснитесь экрана</div>
                      </div>
                    </div>

                    {/* Screen Glow Effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#A053FF]/10 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Panel Edge */}
                <div className="mt-1 h-2 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-md flex items-center justify-center">
                  <div className="w-12 h-0.5 bg-zinc-600 rounded-full"></div>
                </div>
              </div>

              {/* Floor Reflection */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-[40px] bg-gradient-to-t from-[#A053FF]/10 to-transparent blur-xl"></div>
            </div>
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

            {/* Right - Horizontal Touch Panel with Robot Video */}
            <div className="hidden lg:flex justify-end items-center -translate-x-8">
                {/* Panel Frame */}
                <div 
                  className="relative"
                  style={{ 
                    perspective: '1500px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Horizontal Screen Housing */}
                  <div 
                    className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-[1.5rem] p-2.5"
                    style={{ 
                      boxShadow: `
                        0 0 0 1px rgba(255,255,255,0.15),
                        0 50px 100px -20px rgba(0,0,0,0.9),
                        0 30px 60px -15px rgba(0,0,0,0.7),
                        inset 0 2px 0 rgba(255,255,255,0.1),
                        inset 0 -1px 0 rgba(0,0,0,0.3)
                      `,
                      transform: 'rotateX(15deg) rotateY(-12deg) translateZ(20px)'
                    }}
                  >
                    {/* Screen Bezel */}
                    <div className="bg-black rounded-[1.25rem] p-1.5 relative">
                      {/* Glass Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[1.25rem] pointer-events-none z-10"></div>
                      
                      {/* Main Horizontal Screen */}
                      <div className="relative w-[520px] h-[340px] bg-gradient-to-b from-slate-900 to-black rounded-[1rem] overflow-hidden">
                        
                        {/* Screen Header */}
                        <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between border-b border-white/10 z-20">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#A053FF] to-purple-600 flex items-center justify-center">
                              <span className="text-white font-bold text-[10px]">EM</span>
                            </div>
                            <span className="text-white/80 text-xs font-medium">EM XR Interactive Display</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-white/50 text-[10px]">LIVE</span>
                            </div>
                            <div className="text-white/40 text-[10px]">
                              {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>

                        {/* Robot Video inside screen */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <video 
                            src="/references/videos/robotv.webm" 
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain scale-125"
                          />
                        </div>

                        {/* Screen Footer */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 z-20">
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                              </div>
                              <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                              </div>
                            </div>
                            <div className="text-white/50 text-[10px]">Коснитесь экрана для взаимодействия</div>
                          </div>
                        </div>

                        {/* Screen Glow Effect */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-t from-[#A053FF]/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Panel Edge */}
                    <div className="mt-1.5 h-3 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-lg flex items-center justify-center">
                      <div className="w-24 h-0.5 bg-zinc-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Floor Reflection */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-gradient-to-t from-[#A053FF]/10 to-transparent blur-2xl"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;