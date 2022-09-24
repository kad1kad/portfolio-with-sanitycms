import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="">
      <div className="flex items-center justify-end">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="black"
          bgColor="white"
        />
        <p className="hidden md:inline-flex text-sm text-black ">
          Get In Touch
        </p>
      </div>
    </header>
  );
}

export default Header;
