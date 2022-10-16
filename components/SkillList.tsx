import { motion, useAnimation } from "framer-motion";
import { Skill } from "../typings";
import SkillItem from "./SkillItem";

import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  skills: Skill[];
};

function SkillList({ skills }: Props) {
  console.log(skills);

  const { scroll } = useLocomotiveScroll();
  return (
    <div className="overflow-hidden py-3 relative" data-scroll-section>
      <motion.h3
        className="font-extrabold text-5xl mb-5"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2.8,
          },
        }}
        viewport={{ once: true }}
        data-scroll
        data-scroll-speed="0"
      >
        I work with
      </motion.h3>

      <motion.div
        className="flex gap-2 flex-wrap text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-purple-500 to-red-500 animate-gradient-xy"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.8,
          },
        }}
        viewport={{ once: true }}
        data-scroll
        data-scroll-section
        data-scroll-speed="-1"
      >
        {skills
          .map((skill) => <SkillItem key={skill._id} skill={skill} />)
          .reverse()}
      </motion.div>
      <div className="absolute bottom-0 w-[100%] h-8 bg-gradient-to-t from-[#0a1216] to-transparent" />
    </div>
  );
}

export default SkillList;
