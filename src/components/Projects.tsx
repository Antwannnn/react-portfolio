import { FromLeftDiv, FromRightDiv, FromBottomDiv } from "../Motion/MotionElements";
import { CardBody, CardContainer, CardItem } from "./subcomponents/3DCard";
import { useTranslation } from "react-i18next";

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  source_code_link?: string;
}

const Projects = () => {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });

  const items = t("items", { returnObjects: true }) as Project[];

  return (
    <FromLeftDiv
      className="text-primary z-10 w-full min-h-full px-3 py-10 flex flex-col text-center justify-evenly gap-10 items-center"
      transition={{ type: "spring", duration: 0.5 }}
    >
      <h1 className="text-5xl">{t("title")}</h1>

      <FromBottomDiv className="flex flex-wrap justify-center gap-10">
      {items.map((project, index) => (
        <FromRightDiv
          key={index}
          transition={{ duration: 0.5, type: "spring", delay: index / 10 }}
          className=""
        >
          <CardContainer className="inter-var" key={index}>
            <CardBody className="bg-primary bg-opacity-10 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={`./assets/projects/${project.image}`}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                {project.source_code_link && (
                  <CardItem
                    translateZ={20}
                    as={"a"}
                    href={project.source_code_link}
                    target="__blank"
                    className="px-4 py-2 hover:border-[1px] rounded-xl text-xs font-normal text-white"
                  >
                    Sources
                  </CardItem>
                )}
                {project.link && (
                  <CardItem
                    translateZ={20}
                    as="a"
                    target="__blank"
                    href={project.link}
                    className="px-4 py-2 hover:border-[1px] border-opacity-30 hover:border-white rounded-xl bg-black text-white text-xs font-bold"
                  >
                    Link
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        </FromRightDiv>
      ))}

      </FromBottomDiv>

      <h2 className="text-xl sm:text-2xl w-5/6 text-center">
        Nota Bene : Les liens ci-dessus peuvent être indisponibles ou morts
        puisqu'ils pourraient rediriger vers des serveurs ou dépot git qui ne
        sont plus en ligne ou sont privés.
      </h2>
    </FromLeftDiv>
  );
};

export default Projects;
