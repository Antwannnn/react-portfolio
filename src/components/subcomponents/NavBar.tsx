import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { navLinks } from "../../constants/infos";
import { logo } from '../../assets/assets'

const NavBar = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState("");

  return (
    <>
      <motion.div className="h-full lg:w-44 bg-darkcherryred bg-opacity-40">
        <nav className="flex h-full flex-col items-center justify-center">
          <div className="flex justify-center-center py-10">
            <button className="opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => {navigate("/"); setActive("Accueil")}}>
              <img className="w-[60px]" src={logo} alt="" />
            </button>
          </div>
          <ul className="flex flex-col w-full">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="flex items-center w-full justify-center h-16"
              >
                <button
                  className={`text-secondary text-md w-full border-y-[1px] py-1 border-opacity-0 border-secondary hover:text-primary hover:border-primary transition-color duration-300 ${
                    active === link.name ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => {
                    navigate(link.url);
                    setActive(link.name);
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default NavBar;