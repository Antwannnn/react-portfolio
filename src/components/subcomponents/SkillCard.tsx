import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import '../../styles/card.css';

type Tech = {
    name?: string;
    img?: string;
}

type SkillCardProps = {
    tech?: Tech;
    description?: string;
    color?: string;
    level?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ tech = { name: 'None', img: './images/skills/default' }, description = 'None', color = '', level = 0 }) => {

    const controls = useAnimation();

    const ProgressBarVariants = {
        hidden: {
            width: 0,
        },
        visible: {
            width: level + '%',
            transition: {
                duration: 2,
                type: 'spring',
                bounce: 0.2
            }
        }
    }

    return (
        <motion.div className="card-inner w-44 h-full flex justify-center items-center" onHoverStart={() => controls.start('visible')}
            onHoverEnd={() => controls.start('hidden')}>
            <div className="flex w-4/6 justify-center flex-col gap-3 items-center">
                <img className="w-[50px] opacity-60" src={`./assets/tech/${tech.img}`} alt={tech.name} />
                <div className="flex flex-col items-center gap-5 w-full">
                    <div className="text-secondary opacity-75 text-center text-xl">
                        <h3>{tech.name}</h3>
                    </div>
                    <div className="h-[3px] w-full bg-opacity-30 bg-[#383838]">
                        <motion.div
                            initial={'hidden'}
                            animate={controls}
                            variants={ProgressBarVariants}
                            className={`level h-full opacity-100`} style={{ background: `${color}` }}></motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SkillCard;
