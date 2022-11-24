import { BrowserRouter as Route, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="flex flex-row justify-end z-40 bg-[#0f1e2d] drop-shadow-xl sticky top-0 h-16 lg:h-18 3xl:h-20">
      <p className="grow text-white self-center	text-md pl-4 lg:text-lg xl:text-xl xl:pl-6">
        SARA KHABAZBASHI
      </p>
      <div className="hidden text-white items-center space-x-5 mx-6 text-lg xl:flex 3xl:text-xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
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
          className="absolute text-white text-md flex flex-col w-full text-end bg-black space-y-5 opacity-80 pt-20 pb-4 
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
