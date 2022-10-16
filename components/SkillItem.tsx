import { Skill } from "../typings";
import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  const { scroll } = useLocomotiveScroll();
  return (
    <div>
      <span className="cursor-default pr-2 hover:animate-pulse hover:text-purple-500 hover:blur-sm">
        {skill.title}
      </span>
    </div>
  );
}

export default SkillItem;
