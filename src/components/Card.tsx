import { IProject } from "../interfaces/interfaces";
import "../App.css";

interface ProjectProps {
  project: IProject;
  palette: String;
}

const Card = ({ project, palette }: ProjectProps) => {
  const { title, url, imageUrl, altText, description } = project;
  return (
    <div className="card flex flex-col rounded-xl drop-shadow-lg p-6 bg-[#efefef] md:h-full">
      <div className="flex flex-row justify-between	items-center">
        <h2 style={{ color: `${palette}` }} className="text-xl font-bold">
          {title}
        </h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="h-2.5 w-5" src="./link.png" alt="linkicon" />
        </a>
      </div>
      <div
        className="flex my-5 bg-cover bg-center bg-no-repeat justify-center rounded-xl h-52 
          md:h-50 lg:h-52 xl:h-40"
        title={altText}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="flex h-[50%] grow">
        <p className="text-left break-normal xl:text-md">{description}</p>
      </div>
    </div>
  );
};

export default Card;
