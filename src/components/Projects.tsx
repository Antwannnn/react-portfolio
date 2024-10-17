import { FromLeftDiv, FromRightDiv} from "../Motion/MotionElements";
import { ProjectCase } from "./subcomponents/ProjectCase";
import { projects } from "../constants/infos";

const Projects = ({ onEnter, onExit }: any) => {
    return (
        <FromLeftDiv
            className="text-primary z-10 w-full min-h-full px-3 py-10 flex flex-col text-center justify-evenly gap-10 items-center"
            transition={{ type: 'spring', duration: 0.5 }}
        >
            <h1 className="text-5xl">Projets</h1>

            <FromRightDiv transition={{duration: 0.5, type: 'spring', delay: 0.5}} className="flex flex-wrap w-full items-center gap-10 justify-center">
                {projects.map((project, index) => {
                    return (
                        <ProjectCase key={index} project={project} index={index} />
                    )
                })}
            </FromRightDiv>

            <h2 className="text-xl sm:text-2xl w-5/6 text-center">
                Nota Bene : Les liens ci-dessus peuvent être indisponibles ou morts puisqu'ils pourraient rediriger vers des serveurs ou dépot git qui ne sont plus en ligne ou sont privés.
                </h2>

        </FromLeftDiv>
    );
};

export default Projects;