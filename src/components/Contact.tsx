import React from "react";
import { motion } from "framer-motion";
import { FromBottomDiv, FromTopDiv } from "../Motion/MotionElements";

const Contact = ({ onEnter, onExit } : any)=> {
    return (
        <FromTopDiv className="text-primary z-10 w-full min-h-full px-3 py-10 flex flex-col text-center justify-center gap-10 items-center"
        onViewportEnter={onEnter} 
        onViewportLeave={onExit} 
        transition={{ type: 'spring', duration: 0.5 }}>
            
            <h1 className="text-5xl">Contact</h1>
            <h2 className="text-2xl">Si vous avez besoin d'informations.</h2>
            <FromBottomDiv 
            className="grid grid-cols-2 text-tertiary gap-3"
            transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
            >
                <input type="text" placeholder="Ex: Turing"/>
                <input type="text" placeholder="Ex: Alan"/>
                <input className="col-span-2" type="text" placeholder="alan-turing@enigma.fr"/>
                <textarea className="col-span-2 bg-opacity-60" name="message" id="message" rows={10} placeholder="Votre message"/>
                <button className="button-red col-span-2 py-4">Envoyer</button>
            </FromBottomDiv>
        </FromTopDiv>
    );
};

export default Contact;