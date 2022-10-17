import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <div>
      <p className="cursor-default pr-2 text-gradient  bg-gradient-to-br from-[#58ccdc]  via-[#8263db] to-[#ff557e] animate-gradient-xy">
        {skill.title}
      </p>
    </div>
  );
}

export default SkillItem;
