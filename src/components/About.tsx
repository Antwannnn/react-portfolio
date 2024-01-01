import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TransitionDiv, FromBottomDiv, FromTopDiv, FromLeftDiv } from '../Motion/MotionElements'

const About = ({onEnter, onExit}: any)=> {
  return (
    <FromLeftDiv transition={{duration: 0.5, delay: 0.5}}
    onViewportEnter={onEnter}
    onViewportLeave={onExit}
    >
      <h1 className="text-5xl font-bold">À propos de moi</h1>
      <p className="text-xl">Je suis un développeur web et software. J'ai commencé à apprendre la programmation à l'âge de 14 ans. J'ai commencé par apprendre le C++ et le C#, puis j'ai appris le JavaScript et le TypeScript. J'ai également appris à utiliser des frameworks comme React.
      </p>
    </FromLeftDiv>
    
  );
};

export default About;