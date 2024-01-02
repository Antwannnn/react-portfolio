import React from "react";
import { motion } from "framer-motion";
import { FromLeftDiv, FromRightDiv } from "../Motion/MotionElements";
import { useNavigate } from "react-router-dom";
import { TransitionDiv } from '../Motion/MotionElements'

const Projects = ({ onEnter, onExit }: any) => {
    return (
        <FromLeftDiv className="projects" onViewportEnter={onEnter} onViewportLeave={onExit}>

        </FromLeftDiv>
    );
};

export default Projects;