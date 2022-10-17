import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <div>
      <span className="cursor-default pr-2">{skill.title}</span>
    </div>
  );
}

export default SkillItem;
