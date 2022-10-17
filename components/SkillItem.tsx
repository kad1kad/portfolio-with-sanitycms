import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <div>
      <p className="cursor-default pr-2 text-gradient  bg-gradient-to-br from-rose-400 via-purple-500 to-red-500 animate-gradient-xy">
        {skill.title}
      </p>
    </div>
  );
}

export default SkillItem;
