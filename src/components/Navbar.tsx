import { BrowserRouter as Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { IColorProps } from "../interfaces/interfaces";

const Navbar = ({ palette }: IColorProps) => {
  const [isActive, setActive] = useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    let links = document.getElementsByClassName("link");
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute("style", "background-color: #0f1e2d;");
    }
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = `${palette[0]}`;
  };
  console.log(palette);
  return (
    <div className="flex flex-row fixed justify-end w-full z-40 bg-[#0f1e2d] drop-shadow-xl top-0 h-16 lg:h-18 xl:h-14 3xl:h-16">
      <p className="grow text-white self-center	text-md pl-4 lg:text-lg xl:text-md xl:pl-6">
        <Link to="/">Sara Khabazbashi</Link>
      </p>
      <div className="hidden text-white items-center text-md xl:flex 3xl:text-xl">
        <Link
          className="link border-2 border-[#0f1e2d] flex h-full px-4 justify-center items-center"
          onClick={(event) => handleClick(event)}
          to="/"
        >
          HOME
        </Link>
        <Link
          className="link border-2 border-[#0f1e2d] flex h-full px-4 justify-center items-center"
          onClick={(event) => handleClick(event)}
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="link border-2 border-[#0f1e2d] flex h-full px-4 justify-center items-center"
          onClick={(event) => handleClick(event)}
          to="/projects"
        >
          PROJECTS
        </Link>
        <Link
          className="link border-2 border-[#0f1e2d] flex h-full px-4 justify-center items-center"
          onClick={(event) => handleClick(event)}
          to="/contact"
        >
          CONTACT
        </Link>
      </div>
      <button
        className="p-4 z-40 xl:hidden"
        onClick={() => setActive(!isActive)}
      >
        {isActive ? (
          <img
            className="h-7 w-7 invert xl:h-8 xl:w-8"
            src="./close.png"
            alt="closeicon"
          />
        ) : (
          <img
            className="h-7 w-7 invert xl:h-8 xl:w-8"
            src="./options.png"
            alt="optionsicon"
          />
        )}
      </button>
      {isActive && (
        <div
          onClick={() => setActive(false)}
          className="absolute text-white text-md flex flex-col w-full text-end bg-black space-y-5 opacity-80 pt-24 pb-10 
          items-end md:pt-24 md:space-y-10 md:w-1/2 md:h-screen md:text-xl lg:space-y-6 xl:hidden"
        >
          <Link
            className="w-1/4 px-4 md:w-1/3 md:px-6 xl:px-8"
            onClick={() => {
              setActive(false);
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="w-1/4 px-4 md:w-1/3 md:px-6 xl:px-8"
            onClick={() => {
              setActive(false);
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            className="w-1/4 px-4 md:w-1/3 md:px-6 xl:px-8"
            onClick={() => {
              setActive(false);
            }}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="w-1/4 px-4 md:w-1/3 md:px-6 xl:px-8"
            onClick={() => {
              setActive(false);
            }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
