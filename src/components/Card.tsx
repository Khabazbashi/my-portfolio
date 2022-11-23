import { Iproject } from "../interfaces/project";
import { Icolor } from "../interfaces/colors";

const Card = (props: { project: Iproject; color: Icolor }) => {
  const { title, url, image, altText, description } = props.project;
  const { color } = props.color;
  const {
    asset: { _ref },
  } = image;

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="flex flex-col rounded-3xl p-4 drop-shadow-lg md:h-full md:p-6 transition-transform	ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:duration-300"
    >
      <div className="flex flex-row justify-between	items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="h-2.5 w-5" src="./link.png" alt="linkicon" />
        </a>
      </div>
      <div
        className="flex my-5 bg-cover bg-center bg-no-repeat justify-center rounded-xl h-52 
          md:h-50 lg:h-72 "
        aria-label={altText}
        style={{
          backgroundImage: `url(https://cdn.sanity.io/images/${
            process.env.REACT_APP_PROJECT_ID
          }/production/${_ref.slice(6).replace(/-([^-]*)$/, "." + "$1")})`,
        }}
      ></div>
      <div className="flex h-[50%] grow">
        <p className="text-lg text-justify xl:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Card;
