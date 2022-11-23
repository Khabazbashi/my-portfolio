import { useEffect, useState } from "react";
import { fetchColorPalette } from "../colorGenerator";
import { sanityRepo } from "../sanity/sanity-repo";
import { Iproject } from "../interfaces/project";
import Card from "../components/Card";
import addadata from "../data/data.json";
import "../App.css";

const Projects = () => {
  const [colorPalette, setColorPalette] = useState<Array<string>>();
  const [hasLoaded, setLoaded] = useState<Boolean>(false);
  const [projects, setProjects] = useState<Iproject[]>();

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
  console.log(projects);
  if (hasLoaded) {
    return (
      <div
        className="flex flex-col items-center text-center px-4 md:px-10 lg:px-20 xl:min-h-[93.5%] 2xl:min-h-[96%] 
        3xl:min-h-[97%]"
      >
        <h1 className="text-4xl font-bold text-[#0f1e2d] mt-20 mb-10 md:mt-32 xl:text-5xl">
          My Projects
        </h1>
        <div
          className="grid place-items-center grid-cols-1 my-4 gap-4 md:grid-cols-2 md:mb-24 md:mt-10 md:gap-7 lg:w-11/12 lg:grid-cols-2 lg:gap-10
            2xl:mt-20 2xl:grid-cols-3 2xl:w-10/12 3xl:w-3/4 4xl:w-2/3 5xl:w-1/2"
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
