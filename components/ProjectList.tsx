import { Project } from "../typings";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  // console.log(projects);
  const { scroll } = useLocomotiveScroll();

  return (
    <div className="py-10 w-full z-10" data-scroll-section>
      <h2 className="text-5xl font-bold w-full">Projects</h2>
      <motion.div
        className="md:flex gap-5 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2.5,
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
