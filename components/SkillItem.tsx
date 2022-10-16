import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <div>
      <span className="cursor-default pr-2 hover:animate-pulse hover:text-purple-500 hover:blur-sm transistion-all duration-700 ease-in-out">
        {skill.title}
      </span>
    </div>
  );
}

export default SkillItem;
