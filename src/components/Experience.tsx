import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FromTopDiv, FromBottomDiv } from '../Motion/MotionElements'

const Experiences = ({ onEnter, onExit }: any) => {
  return (
    <FromTopDiv className="experiences" onViewportEnter={onEnter} onViewportLeave={onExit}>

    </FromTopDiv>
  );
};

export default Experiences;