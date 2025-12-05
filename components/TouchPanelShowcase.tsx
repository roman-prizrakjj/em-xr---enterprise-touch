import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type ScreenType = 'home' | 'metrics' | 'presentation' | 'game' | 'catalog' | 'contacts';
type StandType = 'vertical' | 'horizontal' | 'wall' | 'table';

const TouchPanelShowcase: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: -8 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [currentStand, setCurrentStand] = useState<StandType>('vertical');
  const [gameScore, setGameScore] = useState(0);
  const [gameTarget, setGameTarget] = useState({ x: 50, y: 50 });
  const [gameActive, setGameActive] = useState(false);
  const [presentationSlide, setPresentationSlide] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState([0, 0, 0, 0]);

  const stands: { id: StandType; nameKey: string; descKey: string }[] = [
    { id: 'vertical', nameKey: 'touch.stand.vertical', descKey: 'touch.stand.vertical.desc' },
    { id: 'horizontal', nameKey: 'touch.stand.horizontal', descKey: 'touch.stand.horizontal.desc' },
    { id: 'wall', nameKey: 'touch.stand.wall', descKey: 'touch.stand.wall.desc' },
    { id: 'table', nameKey: 'touch.stand.table', descKey: 'touch.stand.table.desc' }
  ];

  const nextStand = () => {
    const currentIndex = stands.findIndex(s => s.id === currentStand);
    const nextIndex = (currentIndex + 1) % stands.length;
    setCurrentStand(stands[nextIndex].id);
    setCurrentScreen('home');
  };

  const prevStand = () => {
    const currentIndex = stands.findIndex(s => s.id === currentStand);
    const prevIndex = (currentIndex - 1 + stands.length) % stands.length;
    setCurrentStand(stands[prevIndex].id);
    setCurrentScreen('home');
  };

  const currentStandInfo = stands.find(s => s.id === currentStand)!;

  const metrics = [
    { labelKey: "touch.metric.visitors", value: 12847, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "from-blue-500 to-cyan-500" },
    { labelKey: "touch.metric.conversion", value: 34, suffix: "%", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "from-green-500 to-emerald-500" },
    { labelKey: "touch.metric.session", value: 4.2, suffixKey: "touch.metric.session.suffix", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-purple-500 to-pink-500" },
    { labelKey: "touch.metric.leads", value: 892, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-orange-500 to-red-500" }
  ];

  const presentationSlides = [
    { titleKey: "touch.slide1.title", subtitleKey: "touch.slide1.subtitle", bg: "from-blue-600 to-purple-600" },
    { titleKey: "touch.slide2.title", subtitleKey: "touch.slide2.subtitle", bg: "from-purple-600 to-pink-600" },
    { titleKey: "touch.slide3.title", subtitleKey: "touch.slide3.subtitle", bg: "from-pink-600 to-red-600" },
    { titleKey: "touch.slide4.title", subtitleKey: "touch.slide4.subtitle", bg: "from-orange-600 to-yellow-600" }
  ];

  const catalogItems = [
    { nameKey: "touch.catalog.item1", priceKey: "touch.catalog.item1.price", statusKey: "touch.catalog.inStock" },
    { nameKey: "touch.catalog.item2", priceKey: "touch.catalog.item2.price", statusKey: "touch.catalog.inStock" },
    { nameKey: "touch.catalog.item3", priceKey: "touch.catalog.item3.price", statusKey: "touch.catalog.onOrder" }
  ];

  const features = [
    { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", labelKey: "touch.feature.size" },
    { icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", labelKey: "touch.feature.multitouch" },
    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", labelKey: "touch.feature.247" },
    { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", labelKey: "touch.feature.custom" }
  ];

  // Animate metrics when entering metrics screen
  useEffect(() => {
    if (currentScreen === 'metrics') {
      setAnimatedMetrics([0, 0, 0, 0]);
      const duration = 1500;
      const steps = 30;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setAnimatedMetrics(metrics.map(m => Math.floor(m.value * progress)));
        if (step >= steps) clearInterval(timer);
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [currentScreen]);

  // Auto-advance presentation
  useEffect(() => {
    if (currentScreen === 'presentation') {
      const timer = setInterval(() => {
        setPresentationSlide(prev => (prev + 1) % presentationSlides.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [currentScreen, presentationSlides.length]);

  // Game logic
  const moveTarget = () => {
    setGameTarget({
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 15
    });
  };

  const handleGameClick = () => {
    if (gameActive) {
      setGameScore(prev => prev + 1);
      moveTarget();
    }
  };

  const startGame = () => {
    setGameScore(0);
    setGameActive(true);
    moveTarget();
    setTimeout(() => setGameActive(false), 15000); // 15 second game
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / rect.width) * 20;
    const rotateX = ((centerY - e.clientY) / rect.height) * 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: -8 });
    setIsHovered(false);
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 text-white overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a12]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px]"></div>
        
        {/* Spotlight from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-6 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-blue-500/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Interactive Kiosk
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-2 md:mb-4">
            {t('touch.sectionTitle')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-xl px-4">
            {t('touch.sectionDesc')}
          </p>
        </div>

        {/* Stand Type Indicator */}
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{t(currentStandInfo.nameKey)}</h3>
          <p className="text-slate-400 text-xs md:text-base">{t(currentStandInfo.descKey)}</p>
          <div className="flex justify-center gap-2 mt-3 md:mt-4">
            {stands.map((stand) => (
              <button
                key={stand.id}
                onClick={() => { setCurrentStand(stand.id); setCurrentScreen('home'); }}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                  currentStand === stand.id ? 'bg-blue-500 w-6 md:w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative flex justify-center items-end min-h-[500px] sm:min-h-[650px] md:min-h-[950px]"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1500px' }}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevStand}
            className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextStand}
            className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Floor Reflection */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[100px] md:h-[200px] bg-gradient-to-t from-blue-600/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] md:w-[400px] h-[50px] md:h-[100px] bg-gradient-to-t from-white/5 to-transparent blur-xl"></div>
          
          {/* 3D Kiosk */}
          <div 
            className="relative transition-transform duration-500 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* VERTICAL KIOSK */}
            {currentStand === 'vertical' && (
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Screen Housing - Top Part */}
              <div 
                className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-4"
                style={{ 
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.15),
                    0 50px 100px -20px rgba(0,0,0,0.9),
                    0 30px 60px -15px rgba(0,0,0,0.7),
                    inset 0 2px 0 rgba(255,255,255,0.1),
                    inset 0 -1px 0 rgba(0,0,0,0.3)
                  `,
                  transform: 'translateZ(30px)'
                }}
              >
                {/* Screen Bezel */}
                <div className="bg-black rounded-[1.25rem] md:rounded-[2rem] p-1.5 md:p-2 relative">
                  {/* Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[1.25rem] md:rounded-[2rem] pointer-events-none z-10"></div>
                  
                  {/* Main Screen - Vertical Kiosk Aspect */}
                  <div className="relative w-[240px] sm:w-[300px] md:w-[420px] h-[380px] sm:h-[480px] md:h-[680px] bg-gradient-to-b from-slate-900 to-black rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    
                    {/* Screen Content */}
                    <div className="absolute inset-0 flex flex-col">
                      
                      {/* Header Bar */}
                      <div className="bg-black/50 backdrop-blur-sm px-3 md:px-5 py-2 md:py-4 flex items-center justify-between border-b border-white/10">
                        {currentScreen !== 'home' ? (
                          <button 
                            onClick={() => setCurrentScreen('home')}
                            className="flex items-center gap-1 md:gap-2 text-white/80 hover:text-white transition-colors"
                          >
                            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-xs md:text-base">{t('touch.back')}</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                              <span className="text-white font-bold text-[10px] md:text-sm">EM</span>
                            </div>
                            <span className="text-white/80 text-xs md:text-base font-medium">EM XR Kiosk</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="text-white/50 text-[10px] md:text-sm">
                            {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Content */}
                      <div className="flex-1 relative overflow-hidden">
                        
                        {/* HOME SCREEN */}
                        {currentScreen === 'home' && (
                          <div className="absolute inset-0 p-3 md:p-6 animate-fadeIn">
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl md:rounded-2xl p-3 md:p-6 mb-3 md:mb-5 text-center">
                              <h3 className="text-base md:text-2xl font-bold text-white mb-0.5 md:mb-1">{t('touch.home.welcome')}</h3>
                              <p className="text-white/80 text-xs md:text-base">{t('touch.home.selectSection')}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 md:gap-4">
                              {[
                                { id: 'metrics' as ScreenType, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", labelKey: "touch.screen.metrics", color: "from-blue-500 to-cyan-500" },
                                { id: 'presentation' as ScreenType, icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z", labelKey: "touch.screen.presentation", color: "from-purple-500 to-pink-500" },
                                { id: 'game' as ScreenType, icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z", labelKey: "touch.screen.minigame", color: "from-green-500 to-emerald-500" },
                                { id: 'catalog' as ScreenType, icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", labelKey: "touch.screen.catalog", color: "from-orange-500 to-red-500" },
                                { id: 'contacts' as ScreenType, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", labelKey: "touch.screen.contacts", color: "from-indigo-500 to-purple-500" },
                              ].map((item) => (
                                <button 
                                  key={item.id}
                                  onClick={() => setCurrentScreen(item.id)}
                                  className="bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 rounded-xl md:rounded-2xl p-2 md:p-5 text-center transition-all hover:scale-105 active:scale-95 group"
                                >
                                  <div className={`w-8 h-8 md:w-14 md:h-14 mx-auto mb-1 md:mb-3 rounded-lg md:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                                    <svg className="w-4 h-4 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                    </svg>
                                  </div>
                                  <span className="text-white text-[10px] md:text-base font-medium">{t(item.labelKey)}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* METRICS SCREEN */}
                        {currentScreen === 'metrics' && (
                          <div className="absolute inset-0 p-2 md:p-4 animate-fadeIn">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl p-2 md:p-4 mb-2 md:mb-4 text-center">
                              <h3 className="text-xs md:text-lg font-bold text-white">{t('touch.analytics.title')}</h3>
                            </div>
                            
                            <div className="space-y-1.5 md:space-y-3">
                              {metrics.map((metric, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur border border-white/10 rounded-lg md:rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3">
                                  <div className={`w-7 h-7 md:w-10 md:h-10 rounded-md md:rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center flex-shrink-0`}>
                                    <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={metric.icon} />
                                    </svg>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-white/60 text-[10px] md:text-xs">{t(metric.labelKey)}</div>
                                    <div className="text-white text-sm md:text-lg font-bold">
                                      {animatedMetrics[idx]?.toLocaleString()}{metric.suffixKey ? t(metric.suffixKey) : (metric.suffix || '')}
                                    </div>
                                  </div>
                                  <div className="text-green-400 text-[10px] md:text-xs flex items-center gap-0.5 md:gap-1">
                                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    +12%
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-2 md:mt-4 bg-white/5 rounded-lg md:rounded-xl p-2 md:p-3 border border-white/10">
                              <div className="text-white/60 text-[10px] md:text-xs mb-1 md:mb-2">{t('touch.analytics.weekActivity')}</div>
                              <div className="flex items-end gap-0.5 md:gap-1 h-10 md:h-16">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm transition-all" style={{height: `${h}%`}}></div>
                                ))}
                              </div>
                              <div className="flex justify-between text-[8px] md:text-[10px] text-white/40 mt-1">
                                <span>{t('touch.analytics.mon')}</span><span>{t('touch.analytics.tue')}</span><span>{t('touch.analytics.wed')}</span><span>{t('touch.analytics.thu')}</span><span>{t('touch.analytics.fri')}</span><span>{t('touch.analytics.sat')}</span><span>{t('touch.analytics.sun')}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* PRESENTATION SCREEN */}
                        {currentScreen === 'presentation' && (
                          <div className="absolute inset-0 animate-fadeIn">
                            <div className={`h-full bg-gradient-to-br ${presentationSlides[presentationSlide].bg} flex flex-col items-center justify-center p-3 md:p-6 transition-all duration-500`}>
                              <div className="text-center">
                                <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2">{t(presentationSlides[presentationSlide].titleKey)}</h3>
                                <p className="text-white/80 text-xs md:text-base">{t(presentationSlides[presentationSlide].subtitleKey)}</p>
                              </div>
                              
                              <div className="flex gap-1.5 md:gap-2 mt-4 md:mt-8">
                                {presentationSlides.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setPresentationSlide(idx)}
                                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                                      presentationSlide === idx ? 'bg-white w-4 md:w-6' : 'bg-white/40'
                                    }`}
                                  />
                                ))}
                              </div>

                              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 flex justify-between">
                                <button 
                                  onClick={() => setPresentationSlide(prev => prev > 0 ? prev - 1 : presentationSlides.length - 1)}
                                  className="w-7 h-7 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                  <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button 
                                  onClick={() => setPresentationSlide(prev => (prev + 1) % presentationSlides.length)}
                                  className="w-7 h-7 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                  <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* GAME SCREEN */}
                        {currentScreen === 'game' && (
                          <div className="absolute inset-0 p-2 md:p-4 animate-fadeIn">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl md:rounded-2xl p-2 md:p-4 mb-2 md:mb-4 text-center">
                              <h3 className="text-xs md:text-lg font-bold text-white">{t('touch.game.catchTarget')}</h3>
                              <p className="text-white/80 text-[10px] md:text-sm">{t('touch.game.score')}: {gameScore}</p>
                            </div>
                            
                            <div className="relative bg-slate-800/50 rounded-lg md:rounded-xl h-[160px] md:h-[280px] border border-white/10 overflow-hidden">
                              {!gameActive ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <div className="text-white/60 text-[10px] md:text-sm mb-2 md:mb-4 text-center px-2">
                                    {gameScore > 0 ? `${t('touch.game.gameOver')} ${t('touch.game.score')}: ${gameScore}` : t('touch.game.tapToPlay')}
                                  </div>
                                  <button 
                                    onClick={startGame}
                                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg md:rounded-xl text-xs md:text-base hover:opacity-90 transition-opacity"
                                  >
                                    {gameScore > 0 ? t('touch.game.playAgain') : t('touch.game.start')}
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={handleGameClick}
                                  className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform animate-pulse shadow-lg"
                                  style={{ 
                                    left: `${gameTarget.x}%`, 
                                    top: `${gameTarget.y}%`,
                                    transform: 'translate(-50%, -50%)'
                                  }}
                                >
                                  EM
                                </button>
                              )}
                              
                              {gameActive && (
                                <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs">
                                  {t('touch.game.time')}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* CATALOG SCREEN */}
                        {currentScreen === 'catalog' && (
                          <div className="absolute inset-0 p-2 md:p-4 animate-fadeIn">
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl md:rounded-2xl p-2 md:p-4 mb-2 md:mb-4 text-center">
                              <h3 className="text-xs md:text-lg font-bold text-white">{t('touch.catalog.header')}</h3>
                            </div>
                            
                            <div className="space-y-1.5 md:space-y-3">
                              {catalogItems.map((item, idx) => (
                                <button key={idx} className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg md:rounded-xl p-2 md:p-4 text-left hover:bg-white/10 transition-all active:scale-98">
                                  <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md md:rounded-lg flex items-center justify-center">
                                      <svg className="w-5 h-5 md:w-8 md:h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-white font-medium text-xs md:text-base">{t(item.nameKey)}</div>
                                      <div className="text-blue-400 text-[10px] md:text-sm font-bold">{t(item.priceKey)}</div>
                                      <div className={`text-[10px] md:text-xs mt-0.5 md:mt-1 ${t(item.statusKey) === t('touch.catalog.inStock') ? 'text-green-400' : 'text-yellow-400'}`}>
                                        {t(item.statusKey)}
                                      </div>
                                    </div>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* CONTACTS SCREEN */}
                        {currentScreen === 'contacts' && (
                          <div className="absolute inset-0 p-2 md:p-4 animate-fadeIn">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl md:rounded-2xl p-2 md:p-4 mb-2 md:mb-4 text-center">
                              <h3 className="text-xs md:text-lg font-bold text-white">{t('touch.contacts.title')}</h3>
                            </div>
                            
                            <div className="space-y-1.5 md:space-y-3">
                              {[
                                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", labelKey: "touch.contacts.phone", value: "+7 (999) 123-45-67" },
                                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", labelKey: "touch.contacts.email", value: "info@emxr.ru" },
                                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", labelKey: "touch.contacts.address", valueKey: "touch.contacts.addressValue" }
                              ].map((contact, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur border border-white/10 rounded-lg md:rounded-xl p-2 md:p-4">
                                  <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-7 h-7 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md md:rounded-lg flex items-center justify-center">
                                      <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={contact.icon} />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="text-white/60 text-[10px] md:text-xs">{t(contact.labelKey)}</div>
                                      <div className="text-white text-xs md:text-sm font-medium">{contact.valueKey ? t(contact.valueKey) : contact.value}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <button className="w-full mt-2 md:mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-base hover:opacity-90 transition-opacity">
                              {t('nav.contact')}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neck/Stand Connection */}
              <div 
                className="mx-auto w-14 sm:w-18 md:w-24 h-16 sm:h-24 md:h-36 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative"
                style={{ 
                  transform: 'translateZ(15px)',
                  boxShadow: 'inset 3px 0 6px rgba(0,0,0,0.4), inset -3px 0 6px rgba(0,0,0,0.4)'
                }}
              >
                <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-black to-transparent"></div>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/10"></div>
              </div>

              {/* Base Platform */}
              <div 
                className="mx-auto w-36 sm:w-48 md:w-64 h-5 md:h-8 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-t-xl"
                style={{ 
                  transform: 'translateZ(8px)',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.1)'
                }}
              ></div>
              
              {/* Floor Base */}
              <div 
                className="mx-auto w-44 sm:w-56 md:w-72 h-3 md:h-4 bg-gradient-to-b from-zinc-900 to-black rounded-xl"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 8px 20px rgba(0,0,0,0.5)'
                }}
              ></div>
            </div>
            )}

            {/* HORIZONTAL TABLE */}
            {currentStand === 'horizontal' && (
            <div className="relative flex flex-col items-center" style={{ transformStyle: 'preserve-3d' }}>
              {/* Table Top with Screen */}
              <div 
                className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-4"
                style={{ 
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.15),
                    0 50px 100px -20px rgba(0,0,0,0.9),
                    0 30px 60px -15px rgba(0,0,0,0.7),
                    inset 0 2px 0 rgba(255,255,255,0.1),
                    inset 0 -1px 0 rgba(0,0,0,0.3)
                  `,
                  transform: 'translateZ(30px) rotateX(40deg)',
                  transformOrigin: 'center bottom'
                }}
              >
                <div className="bg-black rounded-[1.25rem] md:rounded-[2rem] p-1.5 md:p-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[1.25rem] md:rounded-[2rem] pointer-events-none z-10"></div>
                  <div className="relative w-[280px] sm:w-[380px] md:w-[650px] h-[200px] sm:h-[280px] md:h-[450px] bg-gradient-to-b from-slate-900 to-black rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-8 py-3 md:py-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 md:gap-4">
                            <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                              <span className="text-white font-bold text-xs md:text-xl">EM</span>
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm md:text-xl">{t('touch.table.interactive')}</div>
                              <div className="text-white/70 text-xs md:text-base">{t('touch.table.multitouch')}</div>
                            </div>
                          </div>
                          <div className="text-white/60 text-sm md:text-xl font-medium">55"</div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-3 md:p-6 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-2 md:gap-5 w-full">
                          {[
                            { icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", labelKey: "touch.table.maps" },
                            { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", labelKey: "touch.screen.catalog" },
                            { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", labelKey: "touch.table.design" }
                          ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-5 text-center hover:bg-white/10 transition-all cursor-pointer">
                              <svg className="w-6 h-6 md:w-12 md:h-12 mx-auto mb-1 md:mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                              </svg>
                              <span className="text-white text-xs md:text-lg font-medium">{t(item.labelKey)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Legs */}
              <div className="flex justify-center gap-[240px] sm:gap-[340px] md:gap-[580px] mt-[-10px]" style={{ transform: 'translateZ(-30px)' }}>
                <div className="w-8 md:w-12 h-24 md:h-44 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-lg"
                  style={{ boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(0,0,0,0.3)' }}></div>
                <div className="w-8 md:w-12 h-24 md:h-44 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-lg"
                  style={{ boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(0,0,0,0.3)' }}></div>
              </div>
              
              {/* Floor Shadow */}
              <div className="w-[320px] sm:w-[440px] md:w-[750px] h-3 md:h-5 bg-gradient-to-b from-zinc-900 to-black rounded-full mt-[-10px] opacity-80"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.9)' }}></div>
            </div>
            )}

            {/* WALL PANEL */}
            {currentStand === 'wall' && (
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Screen */}
              <div 
                className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-4 mx-auto"
                style={{ 
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.15),
                    0 50px 100px -20px rgba(0,0,0,0.9),
                    0 30px 60px -15px rgba(0,0,0,0.7),
                    inset 0 2px 0 rgba(255,255,255,0.1),
                    inset 0 -1px 0 rgba(0,0,0,0.3)
                  `,
                  transform: 'translateZ(30px)'
                }}
              >
                <div className="bg-black rounded-[1.25rem] md:rounded-[2rem] p-1.5 md:p-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[1.25rem] md:rounded-[2rem] pointer-events-none z-10"></div>
                  <div className="relative w-[260px] sm:w-[340px] md:w-[520px] h-[180px] sm:h-[240px] md:h-[380px] bg-gradient-to-b from-slate-900 to-black rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 md:px-6 py-3 md:py-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                              <svg className="w-4 h-4 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-bold text-xs md:text-lg">{t('touch.wall.title')}</div>
                              <div className="text-white/70 text-[10px] md:text-sm">{t('touch.wall.info')}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-2 md:p-5">
                        <div className="grid grid-cols-2 gap-2 md:gap-4 h-full">
                          <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-5 flex flex-col justify-center items-center hover:bg-white/10 transition-all cursor-pointer">
                            <svg className="w-6 h-6 md:w-12 md:h-12 text-cyan-400 mb-1 md:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="text-white font-medium text-xs md:text-lg">{t('touch.wall.navigation')}</span>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-5 flex flex-col justify-center items-center hover:bg-white/10 transition-all cursor-pointer">
                            <svg className="w-6 h-6 md:w-12 md:h-12 text-cyan-400 mb-1 md:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white font-medium text-xs md:text-lg">{t('touch.wall.information')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Wall Mount */}
              <div className="flex justify-center mt-2 md:mt-4">
                <div className="w-20 md:w-32 h-5 md:h-8 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-lg"
                  style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}></div>
              </div>
            </div>
            )}

            {/* TABLE DISPLAY */}
            {currentStand === 'table' && (
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Screen */}
              <div 
                className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-4 mx-auto"
                style={{ 
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.15),
                    0 50px 100px -20px rgba(0,0,0,0.9),
                    0 30px 60px -15px rgba(0,0,0,0.7),
                    inset 0 2px 0 rgba(255,255,255,0.1),
                    inset 0 -1px 0 rgba(0,0,0,0.3)
                  `,
                  transform: 'translateZ(30px) rotateX(10deg)',
                  transformOrigin: 'center bottom'
                }}
              >
                <div className="bg-black rounded-[1.25rem] md:rounded-[2rem] p-1.5 md:p-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[1.25rem] md:rounded-[2rem] pointer-events-none z-10"></div>
                  <div className="relative w-[260px] sm:w-[320px] md:w-[480px] h-[180px] sm:h-[220px] md:h-[340px] bg-gradient-to-b from-slate-900 to-black rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 md:px-6 py-3 md:py-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                              <svg className="w-4 h-4 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-bold text-xs md:text-lg">{t('touch.desktop.title')}</div>
                              <div className="text-white/70 text-[10px] md:text-sm">{t('touch.desktop.portable')}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-2 md:p-5 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
                          {[
                            { labelKey: 'touch.desktop.registration' },
                            { labelKey: 'touch.desktop.surveys' },
                            { labelKey: 'touch.desktop.leads' },
                            { labelKey: 'touch.desktop.qrCode' }
                          ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-4 text-center hover:bg-white/10 transition-all cursor-pointer">
                              <span className="text-white text-xs md:text-base font-medium">{t(item.labelKey)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stand */}
              <div className="flex flex-col items-center mt-[-5px]" style={{ transform: 'translateZ(5px)' }}>
                <div className="w-10 md:w-16 h-8 md:h-12 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-lg"
                  style={{ boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.3), inset -2px 0 4px rgba(0,0,0,0.3)' }}></div>
                <div className="w-32 md:w-56 h-5 md:h-8 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl mt-[-2px]"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}></div>
                <div className="w-40 md:w-64 h-3 md:h-4 bg-gradient-to-b from-zinc-900 to-black rounded-lg"
                  style={{ boxShadow: '0 15px 50px rgba(0,0,0,0.9)' }}></div>
              </div>
            </div>
            )}

          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
              <svg className="w-6 h-6 mx-auto mb-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
              </svg>
              <span className="text-sm text-slate-300">{t(f.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouchPanelShowcase;
