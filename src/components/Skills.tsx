import React from "react";
import { motion } from "framer-motion";
import { FromLeftDiv, FromRightDiv } from "../Motion/MotionElements";
import SkillCard from "./subcomponents/SkillCard";
import { skills } from "../constants/infos"
import { useNavigate } from "react-router-dom";
import { TransitionDiv } from '../Motion/MotionElements'

const Skills = ({ onEnter, onExit }: any) => {
  return (
    <FromLeftDiv className="text-primary z-10 w-full px-3 flex flex-col text-center gap-3 justify-center items-center"
      transition={{ type: 'spring', delay: 0.5, duration: 0.5 }}
      onViewportEnter={onEnter}
      onViewportLeave={onExit}>
      <h1 className="text-5xl">Mes compétences</h1>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <FromRightDiv className="h-52" transition={{ type: 'spring', delay: 1, duration: 0.5 }} exit={{}}>
            <SkillCard tech={{ name: skill.name, img: skill.icon }} level={skill.level} />
          </FromRightDiv>
        ))}
      </div>
    </FromLeftDiv>
  );
};

export default Skills;