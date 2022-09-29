import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="flex items-center justify-end"
      >
        <SocialIcon
          className="cursor-pointer flex"
          network="email"
          fgColor="black"
          bgColor="white"
        />
        <p className="hidden md:inline-flex text-sm text-black ">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
