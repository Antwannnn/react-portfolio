import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import { navLinks } from "../../constants/infos";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >

    </motion.div>
  );
};

export default NavBar;