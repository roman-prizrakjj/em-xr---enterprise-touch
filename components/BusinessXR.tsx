
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BusinessXR: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      titleKey: "business.feature1.title",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      ),
      descKey: "business.feature1.desc"
    },
    {
      titleKey: "business.feature2.title",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      descKey: "business.feature2.desc"
    },
    {
      titleKey: "business.feature3.title",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
      ),
      descKey: "business.feature3.desc"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t('business.sectionTitle')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t('business.sectionDesc')} <span className="text-[#A053FF] font-semibold">{t('business.interactive')}</span> {t('business.sectionDesc2')} <span className="text-[#A053FF] font-semibold">{t('business.tangible')}</span>.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((f, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 text-[#A053FF] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#A053FF] group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t(f.titleKey)}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t(f.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Highlight Section: Interactive Stands */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-800 text-white shadow-2xl">
          <div className="absolute inset-0 z-0">
             {/* Simple noise or gradient background */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
             <div>
               <h3 className="text-3xl font-bold mb-6">
                 {t('business.highlight.title')}
               </h3>
               <p className="text-slate-300 text-lg leading-relaxed mb-6">
                 {t('business.highlight.desc1')} <span className="text-[#A053FF] font-semibold">{t('business.highlight.touchPanels')}</span> {t('business.highlight.desc2')} <span className="text-[#A053FF] font-semibold">{t('business.highlight.magnets')}</span> {t('business.highlight.desc3')}
               </p>
               <a href="https://t.me/electronicmushroom" target="_blank" rel="noopener noreferrer" className="bg-[#A053FF] hover:bg-[#B070FF] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg inline-block">
                 {t('business.highlight.cta')}
               </a>
             </div>
             <div className="hidden md:flex justify-center">
               <div className="relative w-64 h-48 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-80 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                  <div className="absolute bottom-4 right-4 bg-[#A053FF] px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">{t('business.highlight.badge')}</div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessXR;