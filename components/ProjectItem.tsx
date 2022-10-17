import { Project } from "../typings";
import Button from "./Button";

type Props = {
  project: Project;
};

function ProjectItem({ project }: Props) {
  console.log(project);

  return (
    <div className="mt-5 md:w-[40rem]">
      <div className="h-[40rem] py-1 relative">
        <div className="bg-violet-600/10 h-[40rem] w-[100%] blur-xl absolute" />
        <h4 className="font-semibold text-2xl my-5">{project.title}</h4>

        <div>
          <div className="flex flex-wrap gap-3 leading-5">
            {project.technologies.map((tech) => (
              <p className=" text-[#58ccdc] " key={tech._id}>
                {tech.title}
              </p>
            ))}
          </div>
        </div>

        <h4 className="font-semibold text-2xl pt-7 leading-10">Idea</h4>
        <p className="max-w-[25rem]">{project.summary}</p>

        <div className="flex gap-3 bottom-5 absolute text-3xl ">
          <Button text="Code" link={project.linkToCode} />
          <Button text="Live" link={project.linkToLive} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
