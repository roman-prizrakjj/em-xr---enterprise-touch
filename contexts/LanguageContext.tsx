import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.about': 'О компании',
    'nav.services': 'Услуги',
    'nav.projects': 'Проекты',
    'nav.contact': 'Связаться',
    
    // Hero
    'hero.title1': 'Интерактивные стенды',
    'hero.title2': 'от сценария до',
    'hero.title3': 'монтажа на площадке',
    'hero.description': 'Объединяем «железо» и сложную разработку',
    'hero.description2': 'в стабильный продукт.',
    'hero.cta': 'связаться',
    'hero.cta2': 'получить презентацию',
    'hero.screenBrand': 'EM XR Interactive Display',
    'hero.screenTouch': 'Коснитесь экрана для взаимодействия',
    'hero.screenTouchShort': 'Коснитесь экрана',
    
    // ProblemSolution
    'problem.1.title': '90% контента — скучные',
    'problem.1.desc': 'Традиционные видео и презентации теряют внимание аудитории.',
    'problem.2.title': 'Клиент не понимает',
    'problem.2.desc': 'Невозможность наглядно показать ценность тормозит продажи сложных продуктов.',
    'problem.3.title': 'Вовлечённость падает',
    'problem.3.desc': 'Пассивное потребление контента больше не впечатляет на мероприятиях.',
    
    // BusinessXR
    'business.sectionTitle': 'Контент для тач-панелей и киосков',
    'business.sectionDesc': 'Мы создаем интуитивные интерфейсы и',
    'business.interactive': 'интерактивный контент',
    'business.sectionDesc2': 'специально для сенсорных экранов. Сделайте ваши стенды, шоурумы и презентации по-настоящему',
    'business.tangible': 'осязаемыми',
    
    'business.feature1.title': 'Интерактивные каталоги',
    'business.feature1.desc': 'Превратите скучные PDF и буклеты в захватывающие 3D-презентации на сенсорных экранах. Позвольте клиентам крутить, разбирать и изучать ваш продукт касанием пальца.',
    'business.feature2.title': 'Навигация и Инфокиоски',
    'business.feature2.desc': 'Умные навигационные панели для офисов и мероприятий. Интерактивные карты, расписания и базы знаний, доступные в одно касание.',
    'business.feature3.title': 'Геймификация стендов',
    'business.feature3.desc': 'Привлекайте внимание к стенду с помощью простых, но залипательных тач-игр. Сбор лидов через вовлечение, а не навязчивость.',
    
    'business.highlight.title': 'Сенсорные решения под ключ',
    'business.highlight.desc1': 'От разработки UX/UI интерфейса до интеграции с',
    'business.highlight.touchPanels': 'тач-панелями',
    'business.highlight.desc2': 'любого размера. Мы превращаем "мертвые" экраны в',
    'business.highlight.magnets': 'магниты для аудитории',
    'business.highlight.desc3': 'на выставках и в офисах продаж.',
    'business.highlight.cta': 'Обсудить проект',
    'business.highlight.badge': 'TOUCH READY',
    
    // Pricing
    'pricing.title': 'Три пакета для быстрого старта',
    'pricing.package1.title': 'Пакет 1: XR Demo',
    'pricing.package1.subtitle': 'Быстрый старт',
    'pricing.package1.price': '300 000 ₽',
    'pricing.package1.desc': 'Создание одного ключевого XR-сценария для вашего продукта или услуги.',
    'pricing.package1.feature1': '1 сценарий использования',
    'pricing.package1.feature2': 'Базовая интерактивность',
    'pricing.package1.feature3': 'Срок: от 2 недель',
    'pricing.package1.cta': 'Заказать Demo',
    
    'pricing.package2.title': 'Пакет 2: Showroom',
    'pricing.package2.subtitle': 'Интерактивный каталог',
    'pricing.package2.price': '900 000 ₽',
    'pricing.package2.desc': 'Разработка интерактивного выставочного стенда или каталога продукции для тач-панелей.',
    'pricing.package2.feature1': 'Интерактивный каталог',
    'pricing.package2.feature2': 'Геймификация и вовлечение',
    'pricing.package2.feature3': 'Срок: от 1 месяца',
    'pricing.package2.cta': 'Обсудить проект',
    
    'pricing.package3.title': 'Пакет 3: Digital Twin',
    'pricing.package3.subtitle': 'Enterprise решение',
    'pricing.package3.price': '5 000 000 ₽',
    'pricing.package3.desc': 'Полномасштабный цифровой двойник предприятия с интеграцией данных.',
    'pricing.package3.feature1': 'IoT интеграция',
    'pricing.package3.feature2': 'Симуляция процессов',
    'pricing.package3.feature3': 'Обучение персонала',
    'pricing.package3.cta': 'Заказать расчет',
    
    // Footer
    'footer.cta.line1': 'ДАВАЙТЕ',
    'footer.cta.line2': 'СОЗДАВАТЬ',
    'footer.cta.line3': 'БУДУЩЕЕ ВМЕСТЕ',
    'footer.cta.button': 'СВЯЗАТЬСЯ С НАМИ',
    'footer.company': 'Electronic Mushroom, LLC, ИНН 7730239595',
    'footer.services': 'IT услуги, разработка ПО, продакшн, маркетинг',
    'footer.privacy': 'Политика конфиденциальности',
    
    // TouchPanelShowcase
    'touch.stand.vertical': 'Вертикальный киоск',
    'touch.stand.vertical.desc': 'Классический информационный терминал',
    'touch.stand.horizontal': 'Горизонтальный стол',
    'touch.stand.horizontal.desc': 'Интерактивный стол для презентаций',
    'touch.stand.wall': 'Настенная панель',
    'touch.stand.wall.desc': 'Компактное решение для стен',
    'touch.stand.table': 'Настольный дисплей',
    'touch.stand.table.desc': 'Мобильный вариант для мероприятий',
    
    'touch.metric.visitors': 'Посетители',
    'touch.metric.conversion': 'Конверсия',
    'touch.metric.session': 'Время сессии',
    'touch.metric.session.suffix': ' мин',
    'touch.metric.leads': 'Лиды',
    
    'touch.slide1.title': 'EM XR Solutions',
    'touch.slide1.subtitle': 'Инновации для бизнеса',
    'touch.slide2.title': '3D Визуализация',
    'touch.slide2.subtitle': 'Покажите продукт со всех сторон',
    'touch.slide3.title': 'Интерактив',
    'touch.slide3.subtitle': 'Вовлекайте аудиторию',
    'touch.slide4.title': 'Аналитика',
    'touch.slide4.subtitle': 'Измеряйте результаты',
    
    'touch.catalog.item1': 'Киоск Pro 32"',
    'touch.catalog.item1.price': 'от 250 000 ₽',
    'touch.catalog.item2': 'Киоск Pro 43"',
    'touch.catalog.item2.price': 'от 350 000 ₽',
    'touch.catalog.item3': 'Киоск Pro 55"',
    'touch.catalog.item3.price': 'от 450 000 ₽',
    'touch.catalog.inStock': 'В наличии',
    'touch.catalog.onOrder': 'Под заказ',
    
    'touch.feature.size': '32-55 дюймов',
    'touch.feature.multitouch': 'Multi-Touch',
    'touch.feature.247': '24/7 работа',
    'touch.feature.custom': 'Кастомизация',
    
    'touch.screen.home': 'Главная',
    'touch.screen.metrics': 'Метрики',
    'touch.screen.presentation': 'Презентация',
    'touch.screen.game': 'Игра',
    'touch.screen.catalog': 'Каталог',
    'touch.screen.contacts': 'Контакты',
    
    'touch.game.score': 'Очки',
    'touch.game.start': 'Начать игру',
    'touch.game.catchTarget': 'Поймай цель!',
    
    'touch.contacts.title': 'Свяжитесь с нами',
    'touch.contacts.phone': 'Телефон',
    'touch.contacts.email': 'Email',
    'touch.contacts.address': 'Адрес',
    'touch.contacts.addressValue': 'Москва, Россия',
    
    'touch.menu.title': 'Интерактивное меню',
    'touch.fullscreen': 'Полноэкранный режим',
    'touch.analytics.title': 'Аналитика в реальном времени',
    'touch.analytics.weekActivity': 'Активность за неделю',
    'touch.analytics.mon': 'Пн',
    'touch.analytics.tue': 'Вт',
    'touch.analytics.wed': 'Ср',
    'touch.analytics.thu': 'Чт',
    'touch.analytics.fri': 'Пт',
    'touch.analytics.sat': 'Сб',
    'touch.analytics.sun': 'Вс',
    'touch.presentation.prev': 'Назад',
    'touch.presentation.next': 'Далее',
    'touch.game.tapToPlay': 'Нажмите чтобы начать',
    'touch.game.gameOver': 'Игра окончена!',
    'touch.game.playAgain': 'Играть снова',
    'touch.catalog.header': 'Каталог продукции',
    'touch.catalog.details': 'Подробнее',
    'touch.home.welcome': 'Добро пожаловать',
    'touch.home.selectSection': 'Выберите раздел',
    'touch.screen.minigame': 'Мини-игра',
    'touch.back': 'Назад',
    'touch.sectionTitle': 'Информационные киоски',
    'touch.sectionDesc': 'Премиальные сенсорные терминалы для выставок, офисов и торговых центров',
    'touch.table.interactive': 'Интерактивный стол',
    'touch.table.multitouch': 'Мультитач до 40 касаний',
    'touch.table.maps': 'Карты',
    'touch.table.design': 'Дизайн',
    'touch.openFullscreen': 'Открыть на весь экран',
    'touch.exitFullscreen': 'Выйти из полноэкранного режима',
    'touch.interactiveMode': 'Интерактивный режим',
    'touch.wall.title': 'Настенная панель',
    'touch.wall.info': 'Информационный дисплей 43"',
    'touch.wall.navigation': 'Навигация',
    'touch.wall.findPlace': 'Найдите нужное место',
    'touch.wall.information': 'Информация',
    'touch.wall.reference': 'Справочные материалы',
    'touch.desktop.title': 'Настольный дисплей',
    'touch.desktop.portable': 'Портативный 15.6"',
    'touch.desktop.registration': 'Регистрация',
    'touch.desktop.surveys': 'Опросы',
    'touch.desktop.leads': 'Лиды',
    'touch.desktop.qrCode': 'QR-код',
    'touch.game.time': 'Время!',
    'touch.fullscreen.interactSection': 'Выберите раздел для взаимодействия',
    'touch.fullscreen.metricsDesc': 'Аналитика в реальном времени',
    'touch.fullscreen.presentationDesc': 'Слайды о компании',
    'touch.fullscreen.gameDesc': 'Поймай логотип!',
    'touch.fullscreen.catalogDesc': 'Наши продукты',
    'touch.fullscreen.contactsDesc': 'Свяжитесь с нами',
    'touch.fullscreen.mapsDesc': 'Интерактивные карты',
    'touch.fullscreen.catalogDesc2': '3D модели продуктов',
    'touch.fullscreen.designDesc': 'Конфигуратор',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title1': 'Interactive Stands',
    'hero.title2': 'from script to',
    'hero.title3': 'on-site installation',
    'hero.description': 'We combine hardware and complex development',
    'hero.description2': 'into a stable product.',
    'hero.cta': 'contact us',
    'hero.cta2': 'get presentation',
    'hero.screenBrand': 'EM XR Interactive Display',
    'hero.screenTouch': 'Touch the screen to interact',
    'hero.screenTouchShort': 'Touch the screen',
    
    // ProblemSolution
    'problem.1.title': '90% of content is boring',
    'problem.1.desc': 'Traditional videos and presentations lose audience attention.',
    'problem.2.title': "Client doesn't understand",
    'problem.2.desc': 'Inability to visually show value slows down sales of complex products.',
    'problem.3.title': 'Engagement is dropping',
    'problem.3.desc': 'Passive content consumption no longer impresses at events.',
    
    // BusinessXR
    'business.sectionTitle': 'Content for Touch Panels and Kiosks',
    'business.sectionDesc': 'We create intuitive interfaces and',
    'business.interactive': 'interactive content',
    'business.sectionDesc2': 'specifically for touch screens. Make your stands, showrooms and presentations truly',
    'business.tangible': 'tangible',
    
    'business.feature1.title': 'Interactive Catalogs',
    'business.feature1.desc': 'Transform boring PDFs and brochures into captivating 3D presentations on touch screens. Let customers rotate, disassemble and explore your product with a touch.',
    'business.feature2.title': 'Navigation and Info Kiosks',
    'business.feature2.desc': 'Smart navigation panels for offices and events. Interactive maps, schedules and knowledge bases available in one touch.',
    'business.feature3.title': 'Stand Gamification',
    'business.feature3.desc': 'Attract attention to your stand with simple yet addictive touch games. Lead collection through engagement, not intrusiveness.',
    
    'business.highlight.title': 'Turnkey Touch Solutions',
    'business.highlight.desc1': 'From UX/UI interface development to integration with',
    'business.highlight.touchPanels': 'touch panels',
    'business.highlight.desc2': 'of any size. We transform "dead" screens into',
    'business.highlight.magnets': 'audience magnets',
    'business.highlight.desc3': 'at exhibitions and sales offices.',
    'business.highlight.cta': 'Discuss Project',
    'business.highlight.badge': 'TOUCH READY',
    
    // Pricing
    'pricing.title': 'Three Packages for Quick Start',
    'pricing.package1.title': 'Package 1: XR Demo',
    'pricing.package1.subtitle': 'Quick Start',
    'pricing.package1.price': '$3,500',
    'pricing.package1.desc': 'Creating one key XR scenario for your product or service.',
    'pricing.package1.feature1': '1 use case scenario',
    'pricing.package1.feature2': 'Basic interactivity',
    'pricing.package1.feature3': 'Timeline: from 2 weeks',
    'pricing.package1.cta': 'Order Demo',
    
    'pricing.package2.title': 'Package 2: Showroom',
    'pricing.package2.subtitle': 'Interactive Catalog',
    'pricing.package2.price': '$10,000',
    'pricing.package2.desc': 'Development of interactive exhibition stand or product catalog for touch panels.',
    'pricing.package2.feature1': 'Interactive catalog',
    'pricing.package2.feature2': 'Gamification and engagement',
    'pricing.package2.feature3': 'Timeline: from 1 month',
    'pricing.package2.cta': 'Discuss Project',
    
    'pricing.package3.title': 'Package 3: Digital Twin',
    'pricing.package3.subtitle': 'Enterprise Solution',
    'pricing.package3.price': '$55,000',
    'pricing.package3.desc': 'Full-scale digital twin of enterprise with data integration.',
    'pricing.package3.feature1': 'IoT integration',
    'pricing.package3.feature2': 'Process simulation',
    'pricing.package3.feature3': 'Staff training',
    'pricing.package3.cta': 'Request Quote',
    
    // Footer
    'footer.cta.line1': "LET'S",
    'footer.cta.line2': 'CREATE',
    'footer.cta.line3': 'THE FUTURE TOGETHER',
    'footer.cta.button': 'CONTACT US',
    'footer.company': 'Electronic Mushroom, LLC, ITN 7730239595',
    'footer.services': 'IT services, software, production, marketing',
    'footer.privacy': 'Privacy Policy',
    
    // TouchPanelShowcase
    'touch.stand.vertical': 'Vertical Kiosk',
    'touch.stand.vertical.desc': 'Classic information terminal',
    'touch.stand.horizontal': 'Horizontal Table',
    'touch.stand.horizontal.desc': 'Interactive table for presentations',
    'touch.stand.wall': 'Wall Panel',
    'touch.stand.wall.desc': 'Compact wall-mounted solution',
    'touch.stand.table': 'Desktop Display',
    'touch.stand.table.desc': 'Portable option for events',
    
    'touch.metric.visitors': 'Visitors',
    'touch.metric.conversion': 'Conversion',
    'touch.metric.session': 'Session Time',
    'touch.metric.session.suffix': ' min',
    'touch.metric.leads': 'Leads',
    
    'touch.slide1.title': 'EM XR Solutions',
    'touch.slide1.subtitle': 'Innovation for Business',
    'touch.slide2.title': '3D Visualization',
    'touch.slide2.subtitle': 'Show product from all angles',
    'touch.slide3.title': 'Interactive',
    'touch.slide3.subtitle': 'Engage your audience',
    'touch.slide4.title': 'Analytics',
    'touch.slide4.subtitle': 'Measure results',
    
    'touch.catalog.item1': 'Kiosk Pro 32"',
    'touch.catalog.item1.price': 'from $2,800',
    'touch.catalog.item2': 'Kiosk Pro 43"',
    'touch.catalog.item2.price': 'from $3,900',
    'touch.catalog.item3': 'Kiosk Pro 55"',
    'touch.catalog.item3.price': 'from $5,000',
    'touch.catalog.inStock': 'In Stock',
    'touch.catalog.onOrder': 'On Order',
    
    'touch.feature.size': '32-55 inches',
    'touch.feature.multitouch': 'Multi-Touch',
    'touch.feature.247': '24/7 Operation',
    'touch.feature.custom': 'Customization',
    
    'touch.screen.home': 'Home',
    'touch.screen.metrics': 'Metrics',
    'touch.screen.presentation': 'Presentation',
    'touch.screen.game': 'Game',
    'touch.screen.catalog': 'Catalog',
    'touch.screen.contacts': 'Contacts',
    
    'touch.game.score': 'Score',
    'touch.game.start': 'Start Game',
    'touch.game.catchTarget': 'Catch the target!',
    
    'touch.contacts.title': 'Contact Us',
    'touch.contacts.phone': 'Phone',
    'touch.contacts.email': 'Email',
    'touch.contacts.address': 'Address',
    'touch.contacts.addressValue': 'Moscow, Russia',
    
    'touch.menu.title': 'Interactive Menu',
    'touch.fullscreen': 'Fullscreen Mode',
    'touch.analytics.title': 'Real-time Analytics',
    'touch.analytics.weekActivity': 'Weekly Activity',
    'touch.analytics.mon': 'Mon',
    'touch.analytics.tue': 'Tue',
    'touch.analytics.wed': 'Wed',
    'touch.analytics.thu': 'Thu',
    'touch.analytics.fri': 'Fri',
    'touch.analytics.sat': 'Sat',
    'touch.analytics.sun': 'Sun',
    'touch.presentation.prev': 'Back',
    'touch.presentation.next': 'Next',
    'touch.game.tapToPlay': 'Tap to play',
    'touch.game.gameOver': 'Game Over!',
    'touch.game.playAgain': 'Play Again',
    'touch.catalog.header': 'Product Catalog',
    'touch.catalog.details': 'Details',
    'touch.home.welcome': 'Welcome',
    'touch.home.selectSection': 'Select a section',
    'touch.screen.minigame': 'Mini-Game',
    'touch.back': 'Back',
    'touch.sectionTitle': 'Information Kiosks',
    'touch.sectionDesc': 'Premium touch terminals for exhibitions, offices and shopping centers',
    'touch.table.interactive': 'Interactive Table',
    'touch.table.multitouch': 'Multi-touch up to 40 points',
    'touch.table.maps': 'Maps',
    'touch.table.design': 'Design',
    'touch.openFullscreen': 'Open fullscreen',
    'touch.exitFullscreen': 'Exit fullscreen mode',
    'touch.interactiveMode': 'Interactive mode',
    'touch.wall.title': 'Wall Panel',
    'touch.wall.info': 'Information display 43"',
    'touch.wall.navigation': 'Navigation',
    'touch.wall.findPlace': 'Find the right place',
    'touch.wall.information': 'Information',
    'touch.wall.reference': 'Reference materials',
    'touch.desktop.title': 'Desktop Display',
    'touch.desktop.portable': 'Portable 15.6"',
    'touch.desktop.registration': 'Registration',
    'touch.desktop.surveys': 'Surveys',
    'touch.desktop.leads': 'Leads',
    'touch.desktop.qrCode': 'QR Code',
    'touch.game.time': 'Time!',
    'touch.fullscreen.interactSection': 'Select a section to interact',
    'touch.fullscreen.metricsDesc': 'Real-time analytics',
    'touch.fullscreen.presentationDesc': 'Company slides',
    'touch.fullscreen.gameDesc': 'Catch the logo!',
    'touch.fullscreen.catalogDesc': 'Our products',
    'touch.fullscreen.contactsDesc': 'Contact us',
    'touch.fullscreen.mapsDesc': 'Interactive maps',
    'touch.fullscreen.catalogDesc2': '3D product models',
    'touch.fullscreen.designDesc': 'Configurator',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
