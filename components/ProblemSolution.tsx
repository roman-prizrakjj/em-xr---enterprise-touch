import React from 'react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      img: "https://picsum.photos/seed/chart/400/300",
      title: "90% контента — скучные",
      desc: "Традиционные видео и презентации теряют внимание аудитории."
    },
    {
      img: "https://picsum.photos/seed/complex/400/300",
      title: "Клиент не понимает",
      desc: "Невозможность наглядно показать ценность тормозит продажи сложных продуктов."
    },
    {
      img: "https://picsum.photos/seed/auditorium/400/300",
      title: "Вовлечённость падает",
      desc: "Пассивное потребление контента больше не впечатляет на мероприятиях."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
          Почему классические коммуникации <br/> больше не работают?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 filter grayscale hover:grayscale-0" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xl font-medium text-blue-700">XR — это прямой путь к решению этих проблем.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;