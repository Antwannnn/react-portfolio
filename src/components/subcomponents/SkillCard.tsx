import React from "react";
import './styles/card.css';

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
        <div className="card">
            <div className="card-body">

            </div>
        </div>
    );
};

export default SkillCard;
