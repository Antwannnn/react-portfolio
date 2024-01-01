import React from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { photo } from '../assets/assets'
import { TransitionDiv, FromRightDiv, FromLeftDiv } from '../Motion/MotionElements'

const Home = ({onEnter, onExit}: any) => {

  const navigate = useNavigate();

  return (
      <FromLeftDiv 
      className="text-primary z-10 w-full px-10 flex flex-col md:flex-row text-center gap-3 md:text-start justify-center items-center" 
      transition={{ type: 'spring', delay: 0.5, duration: 0.5 }}
      onViewportEnter={onEnter}
      onViewportLeave={onExit}
      >
        <div className="flex flex-col gap-4 md:w-3/6">
          <h1 className="text-5xl font-bold">Bonjour, je m'appelle <span className="strong">Antoine</span>.</h1>
          <FromRightDiv className="flex flex-col gap-4 items-center md:items-start" transition={{ type: 'spring', delay: 1, duration: 0.5 }} exit={{}}>
            <h2 className="text-xl">Je suis développeur <span className="strong">web</span> et <span className="text-secondary font-bold">software</span></h2>
            <button onClick={() => navigate("/about")} className="w-fit px-5 py-3 button-red">Plus sur moi</button>
          </FromRightDiv>
        </div>
        <img className="w-72 rounded-full" src={photo} alt="" />
      </FromLeftDiv>

  );
};

export default Home;