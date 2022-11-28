import { useEffect, useState } from "react";
import { sanityRepo } from "../sanity/sanity-repo";
import { IProject } from "../interfaces/interfaces";
import { IColorProps } from "../interfaces/interfaces";
import SkeletonCard from "../components/SkeletonCard";
import LoadingButton from "../components/LoadingButton";
import Card from "../components/Card";

const Projects = ({ palette }: IColorProps) => {
  const [hasLoaded, setLoaded] = useState<Boolean>(false);
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    if (!hasLoaded) {
      getProjects();
    }
  }, [hasLoaded]);

  const getProjects = async () => {
    await sanityRepo
      .getAllProjects()
      .then((result) => setProjects(result))
      .then(() => setLoaded(true));
  };

  return (
    <div className="flex flex-col m-auto items-center text-center px-6 md:px-10">
      <h1
        style={{ color: `${palette[1]}` }}
        className="text-4xl font-bold text-[#0f1e2d] mt-32 mb-8 2xl:mt-40"
      >
        Projects
      </h1>
      {hasLoaded ? (
        <div
          className="grid place-items-center grid-cols-1 gap-4 py-4 mb-8 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-12 lg:w-3/4 
            xl:w-10/12 xl:grid-cols-3 2xl:mt-10 2xl:w-[75%] 3xl:w-[65%] 3.5xl:w-[55%] 4xl:grid-cols-4 4xl:w-[60%] 5xl:w-[50%]"
        >
          {projects &&
            projects.map((project, index) => (
              <Card key={index} project={project} palette={palette[2]} />
            ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-20">
          <LoadingButton />
          <div className="flex flex-row">
            <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
