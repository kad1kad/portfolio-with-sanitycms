import { motion, useScroll, useTransform } from "framer-motion";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
  speed: number;
};

function Hero({ pageInfo }: Props) {
  console.log(pageInfo);

  const { scrollYProgress } = useScroll();
  const yValue01 = useTransform(scrollYProgress, [0, 0.4, 1], [0, -300, -400]);
  const yValue02 = useTransform(scrollYProgress, [0, 0.4, 1], [0, -200, -300]);
  const yValue03 = useTransform(scrollYProgress, [0, 0.4, 1], [0, -300, -400]);

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center"
      data-scroll-section
    >
      <motion.h1
        className="text-6xl text-center font-bold md:text-8xl z-10 tracking"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        style={{ y: yValue01 }}
        data-scroll
        data-scroll-speed={3}
      >
        Hi, I&apos;m {pageInfo.name}.
      </motion.h1>
      <motion.h2
        className="font-medium z-10"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        style={{ y: yValue02 }}
        data-scroll
        data-scroll-speed={2}
      >
        {pageInfo.role}
      </motion.h2>

      <span className="z-10 text-2xl absolute bottom-24 animate-pulse">
        &#8595;
      </span>

      <motion.div
        className="absolute"
        id="heroGradient"
        data-scroll
        data-scroll-speed={10}
      ></motion.div>
    </motion.div>
  );
}

export default Hero;
