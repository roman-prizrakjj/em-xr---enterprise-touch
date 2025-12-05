
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  
  const packages = [
    {
      titleKey: "pricing.package1.title",
      subtitleKey: "pricing.package1.subtitle",
      priceKey: "pricing.package1.price",
      descKey: "pricing.package1.desc",
      featureKeys: ["pricing.package1.feature1", "pricing.package1.feature2", "pricing.package1.feature3"],
      ctaKey: "pricing.package1.cta"
    },
    {
      titleKey: "pricing.package2.title",
      subtitleKey: "pricing.package2.subtitle",
      priceKey: "pricing.package2.price",
      descKey: "pricing.package2.desc",
      featureKeys: ["pricing.package2.feature1", "pricing.package2.feature2", "pricing.package2.feature3"],
      ctaKey: "pricing.package2.cta"
    },
    {
      titleKey: "pricing.package3.title",
      subtitleKey: "pricing.package3.subtitle",
      priceKey: "pricing.package3.price",
      descKey: "pricing.package3.desc",
      featureKeys: ["pricing.package3.feature1", "pricing.package3.feature2", "pricing.package3.feature3"],
      ctaKey: "pricing.package3.cta"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          {t('pricing.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
                key={i} 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group hover:border-[#A053FF]/30"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(pkg.titleKey)}</h3>
                <span className="text-sm font-medium text-[#A053FF] bg-purple-50 px-3 py-1.5 rounded-full inline-block">
                  {t(pkg.subtitleKey)}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-slate-900">
                  {t(pkg.priceKey)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(pkg.descKey)}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-6"></div>

              {/* Features */}
              <ul className="mb-8 space-y-3 flex-grow">
                {pkg.featureKeys.map((fKey, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#A053FF] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(fKey)}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="https://t.me/electronicmushroom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border-2 border-[#A053FF] text-[#A053FF] font-bold rounded-full hover:bg-[#A053FF] hover:text-white transition-all duration-300 block text-center"
              >
                {t(pkg.ctaKey)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
