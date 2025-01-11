import { useEffect, useState, useRef } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logoWhite from '/assets/logowhite.png';
import logoBlack from '/assets/logoblack.png';
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

interface NavLink {
  id: number;
  name: string;
  path : string;
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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const items = t('navlinks', { returnObjects: true }) as NavLink[];

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

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isTabletOrMobile && isMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isTabletOrMobile]);

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

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button className="sm:hidden cursor-pointer z-30 fixed left-3 top-1 opacity-75" onClick={() => toggleMenu()}>
        {isMenuOpen ? <XMarkIcon className="w-[30px] text-primary h-[30px]" /> : <Bars3CenterLeftIcon className="w-[30px] text-primary h-[30px]" />}
      </button>
      <motion.div 
        ref={navRef}
        className={`min-h-full min-w-56 fixed sm:relative ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'} sm:pointer-events-auto bg-background-secondary/20 ${isMenuOpen ? '!bg-background-secondary/70' : 'bg-background-secondary/20'} z-20`}
        initial={'hidden'}
        variants={appearVariants}
        animate={appear}
      >
        <nav className="flex h-full min-w-56 flex-col gap-10 items-center justify-start relative sm:fixed">
          <div className="flex justify-center-center py-10">
            <NavLink path="/" className="opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => { navigate("/"); if(isTabletOrMobile) { toggleMenu() } }}>
              <img className="w-[80px]" src={theme === 'dark' ? logoWhite : logoBlack} alt="logo" />
            </NavLink>
          </div>
          <ul className="flex flex-col w-full">
            {items.map((link) => (
              <li key={link.id} className="flex items-center w-full justify-center h-16">
                <NavLink
                  path={link.path}
                  label={link.name}
                  className='text-primary text-md w-full border-y-[1px] py-1 border-opacity-0 border-secondary hover:text-primary hover:border-primary transition-color duration-300 opacity-75'
                  activeStyle="border-opacity-100"
                  onClick={() => {
                    navigate(link.path);
                    if(isTabletOrMobile) {
                      toggleMenu();
                    }
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