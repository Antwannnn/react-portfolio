import React from "react";
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

const SkillCard: React.FC<SkillCardProps> = ({ tech = { name: 'None', img: './images/skills/default' }, description = 'None', color = '#ffffff', level = 0 }) => {
    return (
        <div className="card-inner w-44 h-full flex justify-center items-center">
            <div className="">
                    <img className="w-28 opacity-60" src={tech.img} alt={tech.name} />
                <div className="card-content">
                    <div className="text-secondary text-center text-xl">
                        <h3>{tech.name}</h3>
                    </div>
                    <div className="card-description">
                        
                    </div>
                    <div className="card-level">
                        <div className="level" style={{ backgroundColor: color, width: `${level}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
