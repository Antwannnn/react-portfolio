import { FromLeftDiv, FromRightDiv } from "../Motion/MotionElements";
import SkillCard from "./subcomponents/SkillCard";
import { useTranslation } from "react-i18next";

interface Skill {
  name: string;
  icon: string;
  level: string;
  color: string;
}

const Skills = () => {

  const { t } = useTranslation('translation', { keyPrefix: "skills"});

  const items = t('items', { returnObjects: true }) as Skill[];

  return (
    <FromLeftDiv className="text-primary z-10 w-full px-3 py-10 flex flex-col text-center gap-10 justify-center items-center"
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <h1 className="text-5xl"> 
        {t('title')}
      </h1>
      <h2 className="text-2xl w-2/3">
        {t('desc')}
      </h2>
      <div className="flex flex-wrap justify-center">
        {items.map((skill, index) => (
          <FromRightDiv key={index} className="h-52" transition={{ type: 'spring', delay: index / 10  , duration: 0.5 }} exit={{}}>
            <SkillCard tech={{ name: skill.name, img: skill.icon }} level={skill.level} color={skill.color} />
          </FromRightDiv>
        ))}
      </div>
    </FromLeftDiv>
  );
};

export default Skills;