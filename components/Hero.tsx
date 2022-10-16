import { motion } from "framer-motion";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  console.log(pageInfo);

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <h1 className="text-6xl text-center font-extrabold md:text-8xl z-10">
        Hi, I am {pageInfo.name}.
      </h1>
      <h2 className="font-bold z-10">{pageInfo.role}</h2>
    </motion.div>
  );
}

export default Hero;
