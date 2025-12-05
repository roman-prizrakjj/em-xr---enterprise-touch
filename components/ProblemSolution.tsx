import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProblemSolution: React.FC = () => {
  const { t } = useLanguage();
  
  const problems = [
    {
      img: "/references/images/robot1.png",
      titleKey: "problem.1.title",
      descKey: "problem.1.desc"
    },
    {
      img: "/references/images/robot2.png",
      titleKey: "problem.2.title",
      descKey: "problem.2.desc"
    },
    {
      img: "/references/images/robot3.png",
      titleKey: "problem.3.title",
      descKey: "problem.3.desc"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-gray-200 rounded-3xl overflow-hidden p-8 flex flex-col">
              <div className="h-80 flex items-center justify-center">
                <img 
                  src={item.img} 
                  alt={t(item.titleKey)} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{t(item.titleKey)}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{t(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;