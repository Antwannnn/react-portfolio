import { FromLeftDiv, FromRightDiv } from "../Motion/MotionElements";
import SkillCard from "./subcomponents/SkillCard";
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation('translation', { keyPrefix: "skills"});

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
        {t('items').map((skill, index) => (
          <FromRightDiv key={index} className="h-52" transition={{ type: 'spring', delay: 0.5, duration: 0.5 }} exit={{}}>
            <SkillCard tech={{ name: skill.name, img: skill.icon }} level={skill.level} color={skill.color} />
          </FromRightDiv>
        ))}
      </div>
    </FromLeftDiv>
  );
};

export default Skills;