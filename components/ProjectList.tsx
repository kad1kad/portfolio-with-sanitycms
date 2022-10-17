import { Project } from "../typings";
import ProjectItem from "./ProjectItem";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  // console.log(projects);

  return (
    <div className="w-full" data-scroll-section>
      <h2 className="text-5xl font-bold w-full">Projects</h2>
      <div className="md:flex gap-5 justify-center">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
