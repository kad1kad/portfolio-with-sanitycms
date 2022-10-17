import { motion, useScroll, useTransform } from "framer-motion";
import { Skill } from "../typings";
import SkillItem from "./SkillItem";

type Props = {
  skills: Skill[];
};

function SkillList({ skills }: Props) {
  console.log(skills);

  const { scrollYProgress } = useScroll();
  const yValue01 = useTransform(scrollYProgress, [0, 0.5, 0.7], [0, -50, 0]);
  const yValue02 = useTransform(scrollYProgress, [0.3, 0.75, 1], [-50, -50, 0]);

  return (
    <div className="overflow-hidden py-3 relative" data-scroll-section>
      <motion.h3
        className="font-extrabold text-5xl mb-5 pt-7"
        style={{ y: yValue02 }}
        data-scroll
        data-scroll-speed={1}
      >
        I work with
      </motion.h3>

      <motion.div
        className="flex gap-2 flex-wrap text-5xl font-extrabold"
        style={{ y: yValue01 }}
        data-scroll
        data-scroll-speed={2}
      >
        {skills
          .map((skill) => <SkillItem key={skill._id} skill={skill} />)
          .reverse()}
      </motion.div>
      <div className="absolute bottom-0 w-full h-5 bg-gradient-to-t from-[#0a1216] via-transparent to-transparent" />
    </div>
  );
}

export default SkillList;
