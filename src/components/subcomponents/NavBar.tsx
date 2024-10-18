import { useEffect, useState } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { logo, menu, close } from '../../../public/assets/assets';
import LanguagePicker from './LanguagePicker';
import { useMediaQuery } from 'react-responsive';

type NavLinkProps = {
  path: string;
  label?: string;
  onClick?: () => void;
  activeStyle?: string;
  className?: string;
  children?: React.ReactNode;
}

const appearVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
    },
  },
};

const NavLink: React.FC<NavLinkProps> = ({ path, label, onClick, children, activeStyle, className }) => {

  const match = useMatch(path);
  return (
    <button
      className={`${className} ${match ? `${activeStyle}` : ``}
          }`}
      onClick={() => {
        onClick && onClick();
      }}>
      {label}
      {children}
    </button>

  );
};

const NavBar = () => {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const appear = useAnimation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const langToCountryMap: { [key: string]: string } = {
    "en-US": "US",
    "fr-FR": "FR",
    "es-ES": "ES",
  };

  const getCountryCodeFromLanguage = (language: string) => {
    return langToCountryMap[language] || "FR"; // FR par défaut si la langue n'est pas trouvée
  };

  const [selectedCountryCode, setSelectedCountryCode] = useState(() => {
    const browserLanguage = navigator.language; // Obtient la langue du navigateur, ex: 'fr-FR'
    return getCountryCodeFromLanguage(browserLanguage); // Mapper à un code pays
  });

  const toggleMenu = () => {
    if(isMenuOpen) {
      appear.start('hidden');
    } else {
      appear.start('visible');
    }
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if(!isTabletOrMobile) {
      appear.start('visible');
      setIsMenuOpen(true);
    } else{
      appear.start('hidden');
      setIsMenuOpen(false);
    }

    const storedCountryCode = localStorage.getItem("selectedCountryCode");
    const storedLanguage = localStorage.getItem("selectedLanguage");

    if (storedCountryCode && storedLanguage) {
      setSelectedCountryCode(storedCountryCode);
      i18n.changeLanguage(storedLanguage);
    }

  }, [isTabletOrMobile, appear])

  return (
    <>
      <button className="sm:hidden cursor-pointer z-30 fixed left-3 top-1 opacity-75" onClick={() => toggleMenu()}>
        <img className="w-[30px] h-[30px]" src= {isMenuOpen ? close : menu} alt="" />
      </button>
      <motion.div className={`min-h-full min-w-56 fixed sm:relative ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'} sm:pointer-events-auto bg-darkcherryred bg-opacity-60 z-20`}
      initial= {'hidden'}
      variants={appearVariants}
      animate={appear}
      >
        <nav className="flex h-full min-w-56 flex-col gap-10 items-center justify-start relative sm:fixed">
          <div className="flex justify-center-center py-10">
            <NavLink path="/" className="opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => { navigate("/") }}>
              <img className="w-[80px]" src={logo} alt="" />
            </NavLink>
          </div>
          <ul className="flex flex-col w-full">
            {t('navlinks').map((link) => (
              <li key={link.id} className="flex items-center w-full justify-center h-16">
                <NavLink
                  path={link.path}
                  label={link.name}
                  className='text-primary text-md w-full border-y-[1px] py-1 border-opacity-0 border-secondary hover:text-primary hover:border-primary transition-color duration-300 opacity-75'
                  activeStyle="border-opacity-100"
                  onClick={() => {
                    navigate(link.path);
                  }}
                />
              </li>
            ))}
          </ul>
          <LanguagePicker selectedCountryCode={selectedCountryCode} setSelectedCountryCode={setSelectedCountryCode} />
        </nav>
      </motion.div>
    </>
  );
};

export default NavBar;