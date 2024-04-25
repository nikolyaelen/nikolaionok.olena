
import React, { useContext, createContext } from 'react';

// Создаем контекст BlogContext
const BlogContext = createContext();

// Компонент Layout
const Layout = ({ children }) => {
  return (
    <div>
      <header>
       
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-black text-white text-center font-bold py-4">Footer</footer>
    </div>
  );
};

// Компонент Header
const Header = () => {
  return (
    <BlogContext.Consumer>
      {blogName => (
        <header className="bg-yellow-300 py-4">
          <div className="container mx-auto flex justify-between items-center">
          <h2  className="text-xl font-bold">{blogName}</h2>
          <nav>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          </div>
        </header>
      )}
    </BlogContext.Consumer>
  );
};

// Компонент BlogInfo
const BlogInfo = () => {
  return (
    <BlogContext.Consumer>
      {blogName => (
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold">Blog Information</h2>
          <p>Tailwind CSS пропонує інший підхід, у якому не потрібно писати CSS для стилізації програми.
Натомість Tailwind CSS використовує службові класи для кожної властивості CSS, які можна
використовувати безпосередньо у HTML або JSX.
Встановлення Tailwind CSS
npm install -D tailwindcss postcss autoprefixer і $ npx tailwindcss init -p.
Всі пов’язані з Tailwind бібліотеки CSS інсталюються як пакети для розробників.
Tailwind CSS простий у використанні для налаштування елементів і створення чистих інтерфейсів
користувача. Tailwind CSS значно скорочує написання власного коду CSS, що дозволяє швидше
розробляти екрани інтерфейсу користувача.
Tailwind CSS часто вимагає впровадження його з нуля, оскільки базові компоненти, такі як кнопки,
навігаційні панелі та вкладки не надаються. Крім того, вивчення Tailwind CSS вимагає мінімального
часу навчання.</p>
        </div>
      )}
    </BlogContext.Consumer>
  );
};

export { BlogContext, Layout, Header, BlogInfo }; 

