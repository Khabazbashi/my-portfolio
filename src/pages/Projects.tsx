import { useEffect, useState } from "react";
import { fetchColorPalette } from "../colorGenerator";
import { sanityRepo } from "../sanity/sanity-repo";
import { IProject } from "../interfaces/interfaces";
import Card from "../components/Card";
import "../App.css";

const Projects = () => {
  const [colorPalette, setColorPalette] = useState<Array<string>>();
  const [hasLoaded, setLoaded] = useState<Boolean>(false);
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    const getColorPalette = async () => {
      await fetchColorPalette().then((result) => setColorPalette(result));
    };

    const getProjects = async () => {
      await sanityRepo.getAllProjects().then((result) => setProjects(result));
    };

    if (!hasLoaded) {
      getProjects();
      getColorPalette();
      setLoaded(true);
    }
  }, [hasLoaded]);
  if (hasLoaded) {
    return (
      <div
        className="flex flex-col items-center text-center px-4 m-auto md:px-10 lg:w-[90%] 
        xl:min-h-[93.5%] 2xl:w-[80%] 2xl:min-h-[96%] 3xl:min-h-[97%] 3xl:w-[65%] 3.5xl:w-[58%] 
        4xl:w-[52%] 5xl:w-[45%]"
      >
        <h1 className="text-4xl font-bold text-[#0f1e2d] mt-20 mb-10 md:mt-32 4xl:text-5xl">
          My Projects
        </h1>
        <div
          className="grid place-items-center grid-cols-1 my-4 gap-4 md:grid-cols-2 md:mb-24 md:mt-10 md:gap-7 lg:grid-cols-2 lg:gap-20 
            xl:gap-12 xl:grid-cols-3"
        >
          {colorPalette &&
            projects &&
            projects.map((project, index) => (
              <Card
                key={index}
                project={project}
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
    );
  } else {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
};

export default Projects;
