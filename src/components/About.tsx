import PersonalTimeline from "../components/subcomponents/Timeline";
import { TransitionDiv, FromBottomDiv, FromTopDiv } from '../Motion/MotionElements'
import { useMediaQuery } from "react-responsive";
import { curriculum } from '../constants/infos';

const About = ({ onEnter, onExit }: any) => {

  const isVertical = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <FromTopDiv transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
      onViewportEnter={onEnter}
      onViewportLeave={onExit}
      className="text-primary z-10 w-full px-3 flex flex-col md:text-start gap-5 my-10 justify-evenly items-center"
    >
      <div className="w-4/6 text-center flex flex-col gap-6">
        <h1 className="text-2xl sm:text-5xl font-bold">À propos de moi</h1>
        <h2 className="text-xl sm:text-2xl text-secondary">Qui suis-je ?</h2>
        <p className="text-md sm:text-lg ">Je m'appelle <span className="strong">Antoine Leboucher</span>, j'ai 20 ans et je suis étudiant au département
          informatique de l'<span className="strong">IUT de Blagnac</span>. Actuellement en 2ème année, je suis à la recherche d'une <span className="strong">alternance</span> pour la 3ème année de mon BUT.
          Ma passion pour l'informatique et tout ce qui l'entoure remonte à mon enfance, et je suis aujourd'hui très heureux de pouvoir avoir l'occasion
          de faire de ma passion mon métier.
        </p>
      </div>
      <TransitionDiv transition={{ delay: 1 }} className="separator w-5/6" />
      <FromBottomDiv className="w-4/6 flex flex-col justify-center gap-1 items-center" transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}>
        <h2 className="text-2xl text-secondary">Mon cursus</h2>
        <PersonalTimeline items={curriculum} orientation={`${isVertical ? "vertical" : "horizontal"}`}/>

      </FromBottomDiv>

    </FromTopDiv>

  );
};

export default About;