import React from 'react';
import { FromTopDiv, FromBottomDiv } from '../Motion/MotionElements';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface SkillCardProps {
    category: string;
    items: { name: string; description: string }[];
    projects?: { name: string }[];
    ownIndex: number;
}

interface SkillGroup {
    category: string;
    items: { name: string; description: string }[];
    projects?: { name: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ category, items, projects, ownIndex }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  
  return (
    <motion.div
      className="relative w-[300px] h-auto min-h-[400px] rounded-2xl p-6 backdrop-blur-md bg-background-secondary/20 hover:scale-105 transition-all duration-300 ease-in-out border-2 border-primary/0 hover:border-primary/50"
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 z-0" />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-secondary mb-6">{category}</h3>
        <div className="space-y-4">
          {items.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + ownIndex / 3}}
              className={`${isMobile ? 'bg-primary/30' : 'bg-primary/5'} p-4 rounded-lg backdrop-blur-sm`}
            >
              <h4 className="text-lg font-semibold text-primary mb-2">{skill.name}</h4>
              <p className="text-sm text-primary/80">{skill.description}</p>
            </motion.div>
          ))}
          
          {projects && projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: items.length * 0.2 + ownIndex / 3 }}
              className="mt-4"
            >
              <h4 className="text-lg font-semibold text-primary mb-2">Proyectos relacionados:</h4>
              <div className="flex flex-wrap gap-2">
                {projects.map((project, index) => (
                  <span
                    key={index}
                    className="bg-primary/20 px-3 py-1 rounded-full text-xs font-semibold text-primary"
                  >
                    {project.name}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ButSkills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'butskills' });
  
  const skills = t('skills', { returnObjects: true }) as SkillGroup[];

  return (
    <FromTopDiv className="min-h-screen w-full px-3 py-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl  text-primary mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-secondary">
          {t('subtitle')}
        </p>
      </div>

      <FromBottomDiv className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <SkillCard ownIndex={index} {...skillGroup} />
          </motion.div>
        ))}
      </FromBottomDiv>
    </FromTopDiv>
  );
};

export default ButSkills; 