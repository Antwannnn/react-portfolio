import React from "react";
import { motion } from "framer-motion";
import { FromLeftDiv, FromRightDiv } from "../Motion/MotionElements";
import { useNavigate } from "react-router-dom";
import { TransitionDiv } from '../Motion/MotionElements'

const Skills = ({ onEnter, onExit }: any) => {
  return (
    <FromLeftDiv className="skills" onViewportEnter={onEnter} onViewportLeave={onExit}>

    </FromLeftDiv>
  );
};

export default Skills;