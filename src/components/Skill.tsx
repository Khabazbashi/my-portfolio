import { ISkill } from "../interfaces/interfaces";
import "../App.css";

interface SkillProps {
  data: ISkill;
  palette: String;
}

const Skill = ({ data, palette }: SkillProps) => {
  const { skill, level, imageUrl, altText } = data;

  if (imageUrl) {
    return (
      <div className="flex items-center justify-center skill w-24 h-24 m-5">
        <img src={imageUrl} />
      </div>
    );
  } else {
    return (
      <div
        style={{ backgroundColor: `${palette}` }}
        className="flex items-center justify-center skill w-24 h-24 m-5 rounded-full p-4"
      >
        <span className="text pointer-events-none text-sm text-white">
          {skill}
        </span>
      </div>
    );
  }
};

export default Skill;
