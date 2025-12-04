
import React from 'react';
import { ServicePackage } from '../types';

const Pricing: React.FC = () => {
  const packages: ServicePackage[] = [
    {
      title: "Пакет 1: XR Demo",
      subtitle: "Быстрый старт",
      description: "Создание одного ключевого XR-сценария для вашего продукта или услуги.",
      features: ["Быстрый вход", "Тестирование технологии", "Демонстрация потенциала"],
      cta: "Заказать Demo"
    },
    {
      title: "Пакет 2: Showroom",
      subtitle: "Комплексный проект",
      description: "Полная разработка интерактивного выставочного зала или цифрового двойника.",
      features: ["Интерактивный зал", "Цифровой двойник", "Ускорение обучения"],
      cta: "Обсудить проект"
    },
    {
      title: "Пакет 3: Subscription",
      subtitle: "Постоянный контент",
      description: "Ежемесячное производство пакета XR-визуализаций и AI-видео.",
      features: ["SMM контент", "AI-видео", "Постоянная вовлеченность"],
      cta: "Подписаться"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Три пакета для быстрого старта
        </h2>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {packages.map((pkg, i) => (
            <div 
                key={i} 
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 group"
                style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">{pkg.title}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mt-2">
                  {pkg.subtitle}
                </span>
              </div>
              <p className="text-gray-600 mb-8 flex-grow">
                {pkg.description}
              </p>
              <ul className="mb-8 space-y-3">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
