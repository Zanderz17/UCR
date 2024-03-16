import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./Edits/logo_UCR.svg" className="h-20" alt="Flowbite Logo" />
        </a>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
          <span className="sr-only">Abrir el menú de opciones</span>
          <svg className="w-12 h-12 stroke-current" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`md:flex w-full md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-extrabold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-4xl font-jomhuria">
            <li>
              <a href="/" className={`block py-2 px-3 ${location.pathname === '/' ? ' md:dark:text-dark-fulizardo' : 'text-white'} rounded md:bg-transparent md:p-0 dark:text-white`} aria-current="page">Home</a>
            </li>
            <li>
              <a href="/series" className={`block py-2 px-3 ${location.pathname.startsWith('/series') ? ' md:dark:text-dark-fulizardo' : 'text-white'} rounded md:bg-transparent md:p-0 dark:text-white`}>Series</a>
            </li>
            <li>
              <a href="/noticias" className={`block py-2 px-3  ${location.pathname.startsWith('/noticias') ? ' md:dark:text-dark-fulizardo' : 'text-white'} rounded md:bg-transparent md:p-0 dark:text-white`}>Noticias</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
