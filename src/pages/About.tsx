import React, { useEffect, useState } from "react";
import { fetchColorPalette } from "../colorGenerator";
import { sanityRepo } from "../sanity/sanity-repo";
import { ISkill } from "../interfaces/interfaces";
import Skill from "../components/Skill";
import addadata from "../data/data.json";
import "../App.css";

const About = () => {
  const [colorPalette, setColorPalette] = useState<Array<string>>();
  const [hasLoaded, setLoaded] = useState<Boolean>(false);
  const [skills, setSkills] = useState<ISkill[]>();

  useEffect(() => {
    const getSkills = async () => {
      await sanityRepo.getAllSkills().then((result) => setSkills(result));
    };

    const getColorPalette = async () => {
      await fetchColorPalette().then((result) => setColorPalette(result));
    };

    if (!hasLoaded) {
      getSkills();
      getColorPalette();
      setLoaded(true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center text-center px-4 md:px-28 xl:px-64 3xl:px-80">
      <div className="my-20 md:mt-32 3xl:mb-36">
        <h1 className="text-4xl mb-8 font-bold text-[#0f1e2d] xl:text-5xl">
          About me
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl 3xl:text-[25px]">
          {addadata.about.info}
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-[#0f1e2d] font-bold leading-tight leading-7 text-center break-words mb-[5%] xl:text-4xl">
          Skills
        </h2>
        <div
          className="grid grid-cols-3 my-12 self-center gap-3 md:grid-cols-4 md:gap-10 lg:grid-cols-7 
          lg:gap-7 xl:grid-cols-9 xl:gap-10"
        >
          {colorPalette &&
            skills &&
            skills.map((x, i) => (
              <Skill
                key={i}
                skill={x}
                color={{
                  color:
                    colorPalette[
                      Math.floor(Math.random() * colorPalette.length)
                    ],
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default About;
