"use client";

import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import NavLinks from "@/app/data/navlinks";

const activeStyle = "active navlink_active";

const appearVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 100,
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 100,
      mass: 0.5,
      damping: 10,
    },
  },
};

const buttonRotateVariants = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 180,
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 100,
      mass: 0.5,
      damping: 10,
    },
  },
};

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const controls = useAnimation();
  const router = usePathname();

  const handleDropdown = () => {
    if (toggleDropdown) {
      controls.start("hidden");
      setTimeout(() => {
        setToggleDropdown(false);
      }, 200);
    } else {
      setToggleDropdown(true);
      controls.start("visible");
    }
  };

  return (
    <div className="flex w-full justify-center">
      <nav className="text-sm py-3 px-3">
        <div className="sm:flex col-span-2 navlinks justify-evenly hidden gap-5 sm:gap-6">
          {NavLinks.map((link, index) => (
            <Link key={link.id} href={link.path}>
              <div
                className={`navlink gap-1 ${
                  router == link.path ? activeStyle : ""
                }`}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
      <div className={`sm:hidden overflow-x-hidden absolute ${toggleDropdown ? 'blurred-bg' : ''}`}>
        <motion.button 
          variants={buttonRotateVariants}
          initial={"hidden"}
          animate={controls}
         onClick={() => handleDropdown()} 
         className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-light transition duration-200 hover:text-light_yellow"
          >
              <path
                strokeLinecap="round"
                strokeWidth={1.5}
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
          </svg>
        </motion.button>

        <motion.div
          className="place-self-end bg-secondary_dark bg-opacity-40 rounded-md shadow-lg"
          initial={"hidden"}
          variants={appearVariants}
          animate={controls}
        >
          {toggleDropdown && (
            <div className="flex flex-col items-center gap-5 w-[100vh] h-[100vh]  px-4 py-5">
              {NavLinks.map((link, index) => (
                <Link key={link.id} href={link.path} onClick={handleDropdown}>
                  <div
                    className={`navlink gap-1 ${
                      router == link.path ? activeStyle : ""
                    }`}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
