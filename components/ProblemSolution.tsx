import React from 'react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      img: "/references/images/robot1.png",
      title: "90% контента — скучные",
      desc: "Традиционные видео и презентации теряют внимание аудитории."
    },
    {
      img: "/references/images/robot2.png",
      title: "Клиент не понимает",
      desc: "Невозможность наглядно показать ценность тормозит продажи сложных продуктов."
    },
    {
      img: "/references/images/robot3.png",
      title: "Вовлечённость падает",
      desc: "Пассивное потребление контента больше не впечатляет на мероприятиях."
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
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;