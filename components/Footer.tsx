
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full">
      {/* Top Section - White with Large Call to Action */}
      <div className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Large Text */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              ДАВАЙТЕ<br/>
              СОЗДАВАТЬ<br/>
              БУДУЩЕЕ ВМЕСТЕ
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
             <a 
               href="https://t.me/electronicmushroom"
               target="_blank"
               rel="noopener noreferrer"
               className="relative group block"
             >
                <div className="absolute inset-0 bg-[#A053FF] rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-[#0f172a] hover:bg-[#A053FF] text-white text-xl md:text-2xl font-bold py-6 px-12 md:px-16 rounded-full transition-all duration-300 flex items-center gap-4 overflow-hidden">
                    <span className="relative z-10">СВЯЗАТЬСЯ С НАМИ</span>
                    <svg className="w-8 h-8 relative z-10 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    
                    {/* Abstract bg inside button */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
             </a>
          </div>

        </div>
      </div>

      {/* Bottom Section - Dark Info */}
      <div className="bg-[#0b1120] text-gray-400 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div className="space-y-2 text-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <span className="text-white font-semibold text-lg">+7 (499) 961-63-64</span>
                    <a href="mailto:xr@emg.fm" className="text-[#A053FF] hover:text-[#B070FF] underline">xr@emg.fm</a>
                </div>
                <div>Electronic Mushroom, LLC, ITN 7730239595</div>
                <div>IT services, software, production, marketing</div>
                <a href="#" className="underline hover:text-white">Privacy Policy</a>
            </div>

            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#A053FF] hover:text-white transition-colors">
                    <span className="font-bold text-xs">VK</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c-4.158 0-6.892-2.135-7.036-5.841h2.189c.115 1.545 1.396 2.335 2.502 2.335 1.152 0 1.758-.557 1.758-1.558 0-1.423-1.848-1.583-2.909-1.832-2.459-.579-2.951-1.928-2.951-2.95 0-1.805 1.75-3.151 4.505-3.151 3.52 0 5.629 1.83 5.86 4.908h-2.128c-.131-1.391-1.129-2.023-2.308-2.023-1.17 0-1.777.63-1.777 1.487 0 1.258 2.053 1.442 2.91 1.644 2.868.675 2.962 2.227 2.962 2.972 0 2.21-2.105 3.195-3.577 3.195z"/></svg>
                </a>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;