import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Главная', href: '#' },
    { label: 'О компании', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Проекты', href: '#projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md">
      <div className="w-full h-[82px] flex items-center px-4 md:px-8 lg:px-12">
        <div className="w-full flex items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/references/images/logo.svg" alt="EM XR" className="h-14 w-auto" />
          </a>

          {/* Right section: Navigation + Buttons */}
          <div className="hidden md:flex items-center ml-auto gap-8 lg:gap-12">
            {/* Desktop Navigation - gap 44px */}
            <nav className="flex items-center gap-8 lg:gap-[44px]">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-all duration-300 text-base font-medium relative ${
                    index === 0 
                      ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' 
                      : 'text-[#B7B7B7] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Buttons - gap 12px */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-[#A053FF] hover:bg-[#B070FF] text-white font-medium h-[42px] px-4 rounded-[28px] transition-all duration-300 text-base hover:shadow-[0_0_20px_rgba(160,83,255,0.5)] hover:scale-[1.02]"
              >
                Связаться
              </button>
              <button className="text-[#B7B7B7] hover:text-white transition-all duration-300 text-base font-medium w-[43px] h-[42px] rounded-[28px] border border-[#A053FF] hover:bg-[#A053FF]/10 hover:shadow-[0_0_15px_rgba(160,83,255,0.3)] hover:border-[#B070FF]">
                En
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                    setIsMenuOpen(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-2.5 px-6 rounded-full"
                >
                  Связаться
                </button>
                <button className="text-gray-400 text-sm font-medium px-3 py-2 rounded-lg border border-slate-700">
                  En
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
