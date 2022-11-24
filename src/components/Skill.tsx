import { ISkill } from "../interfaces/interfaces";
import { IColor } from "../interfaces/interfaces";

const Skill = (props: { skill: ISkill; color: IColor }) => {
  const { skill, level, imageUrl, altText } = props.skill;
  const { color } = props.color;

  return (
    <div
      className="skill flex items-center justify-center rounded-full drop-shadow-lg 
     h-28 w-28 3xl:h-32 3xl:w-32 xl:shadow-none"
    >
      <p className="pointer-events-none text-[#0f1e2d]">{skill}</p>
    </div>
  );
};

export default Skill;
