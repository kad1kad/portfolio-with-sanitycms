import { Project } from "../typings";
import Button from "./Button";
import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  project: Project;
};

function ProjectItem({ project }: Props) {
  const { scroll } = useLocomotiveScroll();
  console.log(project);

  return (
    <div
      className="mt-5 md:w-[40rem]"
      data-scroll
      data-scroll-section
      data-scroll-speed="1"
    >
      <div className="h-[40rem] py-1 relative">
        <div className="bg-violet-600/10 h-[40rem] w-[100%] blur-xl absolute" />
        <h4 className="font-semibold text-2xl my-5">{project.title}</h4>
        <div className="flex flex-wrap gap-3 leading-3 h-16 text-transparent bg-clip-text bg-gradient-to-br from-slate-200  to-red-400">
          {project.technologies.map((tech) => (
            <p key={tech._id}>{tech.title}</p>
          ))}
        </div>
        <div className="flex gap-3 bottom-5 absolute text-3xl ">
          <Button text="Code" link={project.linkToCode} />
          <Button text="Live" link={project.linkToLive} />
        </div>
        <h4 className="font-semibold text-2xl pt-7 leading-10">Idea</h4>
        <p className="max-w-[33rem]">{project.summary}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
