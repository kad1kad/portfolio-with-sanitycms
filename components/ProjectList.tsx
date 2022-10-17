import { Project } from "../typings";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  // console.log(projects);

  return (
    <div className="w-full" data-scroll-section>
      <h2 className="text-5xl font-bold w-full">Projects</h2>
      <motion.div
        className="md:flex gap-5 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        }}
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectList;
