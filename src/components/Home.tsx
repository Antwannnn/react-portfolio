import { useNavigate } from "react-router-dom";
import { FromRightDiv, FromLeftDiv } from '../Motion/MotionElements'
import { useTranslation } from "react-i18next";

const Home = () => {

  const navigate = useNavigate();

  const { t } = useTranslation('translation', { keyPrefix: "home"});

  return (
      <FromLeftDiv 
      className="text-primary z-10 w-full px-10 flex flex-col md:flex-row text-center gap-3 md:text-start justify-center items-center" 
      transition={{ type: 'spring', duration: 0.5 }}
      >
        <div className="flex flex-col gap-4 md:w-3/6">
          <h1 className="text-5xl strong">{t('title')}</h1>
          <FromRightDiv className="flex flex-col gap-4 items-center md:items-start" transition={{ type: 'spring', delay: 0.5, duration: 0.5 }}>
            <h2 className="text-xl">{t('description')}</h2>
            <button onClick={() => navigate("/about")} className="w-fit px-5 py-3 button">{t('button')}</button>
          </FromRightDiv>
        </div>
        <img className="w-80 rounded-full" src={`./assets/${t('photo')}`} alt="" />
      </FromLeftDiv>

  );
};

export default Home;