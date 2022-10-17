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
      <p className="mt-4">
        Apart from working on personal projects, I&apos;m an open–source fan,
        keen to find projects to contribute to. To date I&apos;ve contributed to
        open–source Projects, such as{" "}
        <a href="https://www.hyperui.dev/">HyperUI &#10132;</a>
      </p>
      <div className="md:flex gap-5 justify-center">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
