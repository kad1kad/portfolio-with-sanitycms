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

  const xRange = [1, 0.7, 0.2];
  const opacityRange = [0, 0.7, 1];
  const opacity = useTransform(scrollYProgress, xRange, opacityRange);

  return (
    <div className="overflow-hidden py-3 relative" data-scroll-section>
      <motion.h3
        className="font-extrabold text-5xl mb-5 pt-7"
        style={{ opacity, y: yValue02 }}
        data-scroll
        data-scroll-speed={1}
      >
        I work with
      </motion.h3>

      <motion.div
        className="flex gap-2 flex-wrap text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-purple-500 to-red-500 animate-gradient-xy"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
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
