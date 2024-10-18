import { useEffect } from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FromRightDiv } from "../../Motion/MotionElements";
import '../../styles/project.css';

export const ProjectCase = (items: any) => {

    const descriptionVariants = {
        visible: {
            y: 20,
            opacity: 1,
            transition: { duration: 1, type: "spring", bounce: 0.5 }
        },
        hidden: {
            opacity: 0,
            y: 0,
        },
    }

    const imgVariants = {
        focused: {
            opacity: 1,
            transition: { duration: 1, type: "spring" }
        },
        unfocused: {
            opacity: 0.66,
        },
    }

    const animate = useAnimation();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const [isDescriptionMenuOpen, setIsDescriptionMenuOpen] = useState(false);

    const handleDescriptionMenu = () => {
        if (isDescriptionMenuOpen) {
            setIsDescriptionMenuOpen(false);
            animate.start('hidden');
            animate.start('unfocused');
        } else {
            setIsDescriptionMenuOpen(true);
            animate.start('visible');
            animate.start('focused');
        }
    }

    useEffect(() => {
        if (isTabletOrMobile) {
            animate.start('visible');
        } else {
            animate.start('hidden');
        }
    }, [isTabletOrMobile, animate])

    return (
        <FromRightDiv 
            className="w-72 flex flex-col" onHoverStart={() => { if (!isTabletOrMobile) handleDescriptionMenu() }}
            onHoverEnd={() => { if (!isTabletOrMobile) handleDescriptionMenu() }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>

            <motion.div
                initial='unfocused' animate={animate} variants={imgVariants}
                className="text-primary h-96 flex flex-col justify-around items-center w-full bg-secondary bg-opacity-15 rounded-xl cursor-pointer">
                <div className="w-72 flex justify-center">
                    <img className="py-5 w-5/6" src={`./assets/projects/${items.project.image}`} alt="" />
                </div>
                <h1 className="px-3 text-xl">{items.project.name}</h1>
                <div className="flex flex-wrap gap-2 w-full justify-center px-5">
                    {items.project.tags.map((tag: any) => (
                        <p className={`px-2 rounded-2xl text-sm opacity-75 italic ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
                <div className="flex gap-2 w-full justify-center">
                    {items.project.link && <a href={items.project.link} rel="noopener noreferrer" target="_blank"><button className="button-red px-5 py-2">Lien</button></a>}
                    {items.project.source_code_link && <a href={items.project.source_code_link} rel="noopener noreferrer" target="_blank"><button className="button-red px-5 py-2">Code source</button></a>}
                </div>
            </motion.div>
            <motion.div initial='hidden' exit={{ y: 0 }} variants={descriptionVariants} animate={animate} className="sticky  overflow-y-auto w-72 bg-cherryred px-2 py-1 h-20 rounded-3xl ">
                <p className="text-sm">{items.project.description}</p>
            </motion.div>
        </FromRightDiv>

    );
};