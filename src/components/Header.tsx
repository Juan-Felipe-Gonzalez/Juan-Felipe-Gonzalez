// import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { HashLink } from 'react-router-hash-link';
// import logoImg from '../assets/img/Logo.webp';
import flagEn from '../assets/img/18165.webp';
import flagEs from '../assets/img/18168.webp';

export default function Header() {
  const { language, setLanguage } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const translation = translations[language];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const flagImage = language === 'en' ? flagEn : flagEs;
  const otherFlag = language === 'en' ? flagEs : flagEn;
  const otherLang = language === 'en' ? 'es' : 'en';

  return (
    <header 
      className="bg-[#2a2c30] shadow-[1px_10px_10px_-4px_rgba(0,0,0,0.7)] h-auto md:h-40"
      id="home"
    >
      <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full flex items-center justify-evenly h-full md:px-2 md:justify-evenly">
        <nav className='flex gap-4 md:gap-20 flex-col md:flex-row m-7 md:m-0'>
          <HashLink to="#aboutMe" className='text-white font-bold'>{translation.nav.aboutMe}</HashLink>
          <HashLink to="#stack" className='text-white font-bold'>{translation.nav.stack}</HashLink>
          <HashLink to="#projects" className='text-white font-bold'>{translation.nav.projects}</HashLink>
        </nav>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            type='button'
            className="flex items-center cursor-pointer relative ml-8 text-white font-bold text-sm md:text-base bg-transparent border-0"
          >
            <img src={flagImage} alt={language === 'en' ? 'US Flag' : 'Spain Flag'} className="h-[15px] w-auto md:left-0"/>
            <p className=' text-3xl'>
              &nbsp; {translation.header.language} &nbsp;
            </p>
            <i className="fa-solid fa-angles-down"></i>
          </button>

          <div
            className={`absolute z-999 top-[120%] p-6 rounded-lg bg-[#1e2022] text-white shadow-[0_10px_10px_0_rgba(0,0,0,0.4)] md:left-0 ${dropdownOpen ? '' : 'hidden'} flex flex-col items-center`}
          >
            <button
              onClick={() => {
                setLanguage(otherLang);
                setDropdownOpen(false);
              }}
              className="whitespace-nowrap text-white py-2 pl-10 pr-2 mb-3 relative hover:text-black hover:bg-white hover:rounded-lg last:mb-0 bg-transparent border-0 text-left w-full"
            >
              <img src={otherFlag} alt={otherLang === 'en' ? 'US Flag' : 'Spain Flag'} className="absolute h-[35%] w-auto top-[35%] left-[5%] rounded-sm" height="30" width="30" />
              &nbsp; {otherLang === 'en' ? 'English' : 'Spanish'}
            </button>
            <button
              onClick={() => {
                setLanguage(language);
                setDropdownOpen(false);
              }}
              className="whitespace-nowrap text-white py-2 pl-10 pr-2 mb-3 relative hover:text-black hover:bg-white hover:rounded-lg last:mb-0 bg-transparent border-0 text-left w-full"
            >
              <img src={flagImage} alt={language === 'en' ? 'US Flag' : 'Spain Flag'} className="absolute h-[35%] w-auto top-[35%] left-[5%] rounded-sm" height="30" width="30" />
              &nbsp; {language === 'en' ? 'English' : 'Spanish'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
