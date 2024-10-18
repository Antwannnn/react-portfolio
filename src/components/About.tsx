import PersonalTimeline from "./subcomponents/Timeline";
import { TransitionDiv, FromBottomDiv, FromTopDiv } from '../Motion/MotionElements'
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next"; 

const About = () => {

  const isVertical = useMediaQuery({ query: '(max-width: 900px)' })

  const { t } = useTranslation('translation', { keyPrefix: "about"});

  return (
    <FromTopDiv transition={{ duration: 0.5, type: 'spring' }}
      className="text-primary z-10 w-full px-3 flex flex-col md:text-start gap-5 my-10 justify-evenly items-center"
    >
      <div className="w-4/6 text-center flex flex-col gap-6">
        <h1 className="text-2xl sm:text-5xl font-bold">{t('title')}</h1>
        <h2 className="text-xl sm:text-2xl text-secondary">{t('desc-subtitle')}</h2>
        <p className="text-md sm:text-lg ">
          {t('desc')}
        </p>
      </div>
      <TransitionDiv transition={{ delay: 0.5 }} className="separator w-5/6" />
      <FromBottomDiv className="w-4/6 flex flex-col justify-center gap-1 items-center" transition={{ duration: 0.5, delay: 1, type: 'spring' }}>
        <h2 className="text-2xl text-secondary">
          {t('timeline.title')}
        </h2>
        <PersonalTimeline items={t('timeline.items')} orientation={`${isVertical ? "vertical" : "horizontal"}`}/>

      </FromBottomDiv>

    </FromTopDiv>

  );
};

export default About;