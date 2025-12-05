
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BusinessXR from './components/BusinessXR';
import TouchPanelShowcase from './components/TouchPanelShowcase';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Header />
        <Hero />
        <ProblemSolution />
        <BusinessXR />
        <TouchPanelShowcase />
        <Pricing />
        <Footer />
        
        {/* Sticky CTA for Mobile */}
        <div className="fixed bottom-6 right-6 md:hidden z-50">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-[#A053FF] text-white rounded-full p-4 shadow-lg hover:bg-[#B070FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </button>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;