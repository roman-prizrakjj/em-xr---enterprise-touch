
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#0b1120] text-white overflow-hidden py-24">
      {/* Decorative Diagonal Line */}
      <div className="absolute inset-0 pointer-events-none">
         <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <path 
              d="M-100,0 L1300,400" 
              stroke="#3b82f6" 
              strokeWidth="2" 
              fill="none" 
              className="opacity-70"
            />
         </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Left Side */}
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              EM XR
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              Технологическая витрина EMG
            </p>
          </div>

          {/* Right Side */}
          <div className="text-left md:text-right space-y-2">
            <p className="text-white text-xl font-medium mb-4">
              Свяжитесь с нами
            </p>
            <a 
              href="mailto:xr@emg.fm" 
              className="block text-4xl md:text-6xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
            >
              xr@emg.fm
            </a>
            <div className="pt-8 text-gray-600 text-sm">
              © 2025 EM XR. All rights reserved.
            </div>
          </div>

        </div>
      </div>
      
      {/* Dashed border bottom effect */}
      <div className="absolute bottom-0 left-0 w-full border-b border-dashed border-blue-900/30"></div>
    </footer>
  );
};

export default Footer;