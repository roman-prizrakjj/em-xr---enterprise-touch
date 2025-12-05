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
      <div className="w-full h-[82px] flex items-center px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/references/images/logo.svg" alt="EM XR" className="h-14 w-auto" />
        </a>

        {/* Mobile Menu Button - moved to right */}
        <button 
          className="md:hidden text-white p-2 ml-auto"
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

        {/* Desktop: Navigation + Buttons */}
        <div className="hidden md:flex items-center ml-auto gap-8 lg:gap-12">
          {/* Desktop Navigation - gap 44px */}
          <nav className="flex items-center gap-8 lg:gap-[44px]">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-all duration-300 text-base font-medium leading-[120%] relative ${
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
            <a 
              href="https://t.me/electronicmushroom"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A053FF] hover:bg-[#B070FF] text-white font-medium h-[42px] px-4 rounded-[28px] transition-all duration-300 text-base hover:shadow-[0_0_20px_rgba(160,83,255,0.5)] hover:scale-[1.02] flex items-center justify-center"
            >
              Связаться
            </a>
            <button className="text-[#B7B7B7] hover:text-white transition-all duration-300 text-base font-medium w-[43px] h-[42px] rounded-[28px] border border-[#A053FF] hover:bg-[#A053FF]/10 hover:shadow-[0_0_15px_rgba(160,83,255,0.3)] hover:border-[#B070FF]">
              En
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[82px] right-0 w-auto min-w-[200px] bg-slate-900/95 backdrop-blur-md rounded-bl-2xl shadow-xl border-l border-b border-slate-800">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#B7B7B7] hover:text-white transition-colors text-base font-medium py-3 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-2 border-t border-slate-800">
              <a 
                href="https://t.me/electronicmushroom"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#A053FF] hover:bg-[#B070FF] text-white font-medium py-2.5 px-6 rounded-full transition-all text-sm text-center"
              >
                Связаться
              </a>
              <button className="text-[#B7B7B7] hover:text-white text-sm font-medium w-[40px] h-[38px] rounded-full border border-[#A053FF]">
                En
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
