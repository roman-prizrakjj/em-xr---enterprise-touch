# TouchPanelShowcase - Инструкция по установке

## Требования

- React 18+
- Tailwind CSS

## Установка

### 1. Скопируй компонент

Скопируй файл `TouchPanelShowcase.tsx` в папку `components` твоего проекта.

### 2. Добавь CSS анимацию

Добавь в `index.html` (внутри `<style>`) или в твой глобальный CSS файл:

```css
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
```

### 3. Проверь цвета Tailwind

Компонент использует стандартную палитру Tailwind. Убедись что в `tailwind.config.js` не переопределены эти цвета:

- `zinc` - корпус киосков
- `slate` - фоны экранов
- `blue` - основной акцент
- `cyan` - дополнительный акцент
- `purple` - градиенты
- `pink` - градиенты
- `green` - успех, игра
- `emerald` - успех
- `orange` - каталог
- `red` - каталог
- `indigo` - контакты
- `yellow` - презентация

Если используешь кастомную палитру, добавь эти цвета в конфиг.

### 4. Импортируй и используй

```tsx
import TouchPanelShowcase from './components/TouchPanelShowcase';

function App() {
  return (
    <div>
      {/* другие компоненты */}
      <TouchPanelShowcase />
    </div>
  );
}
```

## Готово!

Компонент полностью автономный и не требует дополнительных зависимостей.
