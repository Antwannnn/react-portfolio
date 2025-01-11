import { useNavigate } from "react-router-dom";
import { FromTopDiv, FromBottomDiv } from '../Motion/MotionElements';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive"; 
import { PinContainer } from "./subcomponents/3DPin";

interface Experience {
  title: string;
  place: string;
  date: string;
  link: string;
  image: string;
}

const Experiences = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'experiences' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const items = t('items', { returnObjects: true }) as Experience[];  // Type assertion
  
  const hasExperiences: boolean = items.length === 0;

  return (
    <FromTopDiv className="text-primary z-10 w-full px-3 py-10 flex flex-col text-center gap-10 justify-center items-center"
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div>
        <h1 className="text-5xl">{t('title')}</h1>
      </div>
      {hasExperiences ? (
        <FromBottomDiv className="flex flex-col gap-2">
          <h2 className="text-3xl">{t('noexperiencedesc')}</h2>
          <h2 className="text-2xl">
            {t('noexperiencetext')}{" "}
            <button className="text-lg button-red px-3 py-2" onClick={() => navigate("/contact")}>
              {t('button')}
            </button>
          </h2>
        </FromBottomDiv>
      ) : (
        <FromBottomDiv className="flex w-full h-full flex-wrap gap-20 justify-center items-center">
          {items.map((experience, index) => (
            <PinContainer
              key={index}
              title={experience.title}
              orgName={experience.place}
              href={experience.link}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-primary sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {experience.title}
                </h3>

                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-secondary ">{experience.date}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary bg-opacity-10">
                  <img src={`./assets/experiences/${experience.image}`} className="-z-10" alt={experience.title} />
                </div>
              </div>
            </PinContainer>
          ))}
        </FromBottomDiv>
      )}
    </FromTopDiv>
  );
};

export default Experiences;
