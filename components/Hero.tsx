import { motion } from "framer-motion";
import Link from "next/link";
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
      <h1 className="text-6xl text-center font-extrabold md:text-8xl ">
        Hi, I'm {pageInfo.name}.
      </h1>
      <h2 className="font-bold ">{pageInfo.role}</h2>

      {/* <div className="pt-5 leading-7">
        <Link href="#about">
          <h4 className="heroLink">About</h4>
        </Link>
        <Link href="#skills">
          <h4 className="heroLink">Skills</h4>
        </Link>
        <Link href="#projects">
          <h4 className="heroLink">Projects</h4>
        </Link>
      </div> */}
    </motion.div>
  );
}

export default Hero;
