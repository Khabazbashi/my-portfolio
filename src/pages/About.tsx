import React, { useEffect, useState } from "react";
import { fetchColorPalette } from "../colorGenerator";
import addadata from "../data/data.json";
import "../App.css";

const About = () => {
  const [colorPalette, setColorPalette] = useState<Array<string>>();
  const [hasLoaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const getColorPalette = async () => {
      await fetchColorPalette().then((result) => setColorPalette(result));
    };

    if (!hasLoaded) {
      getColorPalette();
      setLoaded(true);
    }
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    let color =
      colorPalette &&
      colorPalette[Math.floor(Math.random() * colorPalette.length)];
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = `${color}`;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = "#efefef";
  };

  return (
    <div className="flex flex-col items-center text-center px-4 md:px-28 xl:px-64 3xl:px-80">
      <div className="my-20 md:mt-32 3xl:mb-36">
        <h1 className="text-4xl mb-8 font-bold text-[#0f1e2d] xl:text-5xl">
          {addadata.about.title}
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl 3xl:text-[25px]">
          {addadata.about.info}
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-[#0f1e2d] font-bold leading-tight leading-7 text-center break-words mb-[5%] xl:text-4xl">
          {addadata.about.subtitle}
        </h2>
        <div
          className="grid grid-cols-3 my-12 self-center gap-3 md:grid-cols-4 md:gap-10 lg:grid-cols-7 
          lg:gap-7 xl:grid-cols-9 xl:gap-10"
        >
          {colorPalette &&
            addadata.about.stack.noicons.map((x, i) => (
              <div
                key={i}
                className="skill flex items-center justify-center rounded-full drop-shadow-lg 
                 h-28 w-28 3xl:h-32 3xl:w-32 xl:shadow-none"
                onMouseEnter={(event) => handleMouseEnter(event)}
                onMouseLeave={(event) => handleMouseLeave(event)}
              >
                <p className="pointer-events-none text-[#0f1e2d]">{x}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default About;
