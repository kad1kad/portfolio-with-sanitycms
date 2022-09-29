import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <h1 className="text-4xl">Hi, I'm Kad.</h1>
      <h2>Frontend Developer</h2>
    </motion.div>
  );
}

export default Hero;
