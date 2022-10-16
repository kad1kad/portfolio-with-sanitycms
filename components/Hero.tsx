import { motion } from "framer-motion";
import { PageInfo } from "../typings";

import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  console.log(pageInfo);
  const { scroll } = useLocomotiveScroll();
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      data-scroll-section
    >
      <h1
        className="text-6xl text-center font-extrabold md:text-8xl z-10"
        data-scroll
        data-scroll-speed="1"
      >
        Hi, I'm {pageInfo.name}.
      </h1>
      <h2 className="font-bold z-10" data-scroll data-scroll-speed="0">
        {pageInfo.role}
      </h2>
    </motion.div>
  );
}

export default Hero;
