import React from "react";
import { motion } from "framer-motion";
import { FromBottomDiv, FromTopDiv } from "../Motion/MotionElements";

const Contact = ({ onEnter, onExit } : any)=> {
    return (
        <FromTopDiv className="contact" onViewportEnter={onEnter} onViewportLeave={onExit}>
        </FromTopDiv>
    );
};

export default Contact;