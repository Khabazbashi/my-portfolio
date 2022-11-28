import { useEffect, useState } from "react";
import { sanityRepo } from "../sanity/sanity-repo";
import { ISkill } from "../interfaces/interfaces";
import { IColorProps } from "../interfaces/interfaces";
import LoadingButton from "../components/LoadingButton";
import Skill from "../components/Skill";
import SkeletonSkill from "../components/SkeletonSkill";
import addadata from "../data/data.json";

const About = ({ palette }: IColorProps) => {
  const [hasLoaded, setLoaded] = useState<Boolean>(false);
  const [skills, setSkills] = useState<ISkill[]>();

  useEffect(() => {
    if (!hasLoaded) {
      getSkills();
    }
  }, [hasLoaded]);

  const getSkills = async () => {
    await sanityRepo
      .getAllSkills()
      .then((result) => setSkills(result))
      .then(() => setLoaded(true));
  };

  return (
    <div className="h-full flex flex-col items-center text-center px-6 lg:w-5/6 2xl:w-4/5 3xl:w-2/3 4xl:w-[52%] 5xl:w-[48%] m-auto">
      <div className="mt-32 lg:w-2/3 2xl:mt-40 4xl:mb-10">
        <h1
          style={{ color: `${palette[1]}` }}
          className="text-4xl mb-8 font-bold  2xl:text-4xl"
        >
          About me
        </h1>
        <p className="text-lg 3xl:text-xl">{addadata.about.info}</p>
      </div>
      <div>
        <h2
          style={{ color: `${palette[1]}` }}
          className="text-3xl font-bold text-center break-words mt-16"
        >
          Technical Skills
        </h2>
        {hasLoaded ? (
          <div className="skill-container flex flex-row flex-wrap justify-evenly wrap mt-10 mb-12">
            {skills &&
              skills.map((item, index) => (
                <Skill
                  key={index}
                  data={item}
                  palette={palette[Math.floor(Math.random() * palette.length)]}
                />
              ))}
          </div>
        ) : (
          <div className="flex flex-col my-6 justify-center items-center">
            <LoadingButton />
            <div className="flex flex-wrap my-6 justify-center">
              {Array.from({ length: 20 }, (_, index) => {
                return <SkeletonSkill key={index} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default About;
