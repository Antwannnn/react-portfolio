import { useNavigate } from "react-router-dom";
import { FromTopDiv, FromBottomDiv } from '../Motion/MotionElements'

const Experiences = ({ onEnter, onExit }: any) => {

  const navigate = useNavigate();

  return (
    <FromTopDiv className="text-primary z-10 w-full px-3 py-10 flex flex-col text-center gap-10 justify-center items-center"
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div>
        <h1 className="text-5xl">Experiences</h1>
      </div>
      <FromBottomDiv className="flex flex-col gap-2">
        <h2 className="text-3xl">{"{ Aucune experience professionnelle pour l'instant }"}</h2>
        <h2 className="text-2xl">A vous de changer ça ! <button className=" text-lg button-red px-3 py-2" onClick={() => navigate("/contact")}>Contactez moi !</button></h2>
      </FromBottomDiv>
    </FromTopDiv>
  );
};

export default Experiences;