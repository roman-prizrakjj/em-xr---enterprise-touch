
import React from 'react';
import { ServicePackage } from '../types';

const Pricing: React.FC = () => {
  const packages: ServicePackage[] = [
    {
      title: "Пакет 1: XR Demo",
      subtitle: "Быстрый старт",
      price: "300 000 ₽",
      description: "Создание одного ключевого XR-сценария для вашего продукта или услуги.",
      features: ["1 сценарий использования", "Базовая интерактивность", "Срок: от 2 недель"],
      cta: "Заказать Demo"
    },
    {
      title: "Пакет 2: Showroom",
      subtitle: "Интерактивный каталог",
      price: "900 000 ₽",
      description: "Разработка интерактивного выставочного стенда или каталога продукции для тач-панелей.",
      features: ["Интерактивный каталог", "Геймификация и вовлечение", "Срок: от 1 месяца"],
      cta: "Обсудить проект"
    },
    {
      title: "Пакет 3: Digital Twin",
      subtitle: "Enterprise решение",
      price: "5 000 000 ₽",
      description: "Полномасштабный цифровой двойник предприятия с интеграцией данных.",
      features: ["IoT интеграция", "Симуляция процессов", "Обучение персонала"],
      cta: "Заказать расчет"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Три пакета для быстрого старта
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
                key={i} 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group hover:border-[#A053FF]/30"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pkg.title}</h3>
                <span className="text-sm font-medium text-[#A053FF] bg-purple-50 px-3 py-1.5 rounded-full inline-block">
                  {pkg.subtitle}
                </span>
              </div>

              {/* Price */}
              {pkg.price && (
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {pkg.price}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pkg.description}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-6"></div>

              {/* Features */}
              <ul className="mb-8 space-y-3 flex-grow">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#A053FF] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
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
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
