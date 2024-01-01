import { useEffect, useState } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { navLinks } from '../../constants/infos';
import { logo, menu, close } from '../../assets/assets';
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

  const navigate = useNavigate();
  const appear = useAnimation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }, [isTabletOrMobile, appear])

  return (
    <>
      <button className="sm:hidden cursor-pointer z-30 absolute left-3 top-1 opacity-75" onClick={() => toggleMenu()}>
        <img className="w-[30px] h-[30px]" src= {isMenuOpen ? close : menu} alt="" />
      </button>
      <motion.div className={`h-full min-w-56 absolute sm:relative bg-darkcherryred bg-opacity-60 z-20`}
      initial= {'hidden'}
      variants={appearVariants}
      animate={appear}
      >
        <nav className="flex h-full flex-col items-center justify-center">
          <div className="flex justify-center-center py-10">
            <NavLink path="/" className="opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => { navigate("/") }}>
              <img className="w-[80px]" src={logo} alt="" />
            </NavLink>
          </div>
          <ul className="flex flex-col w-full">
            {navLinks.map((link) => (
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
        </nav>
      </motion.div>
    </>
  );
};

export default NavBar;