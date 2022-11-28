import { ISkill } from "../interfaces/interfaces";
import { IColor } from "../interfaces/interfaces";
import { useState, useRef, useEffect } from "react";
import "../App.css";

const Skill = (props: { skill: ISkill }) => {
  const { skill, level, imageUrl, altText } = props.skill;

  // const setClassName = (level: number) => {
  //   if (level === 5) {
  //     return "hexagon -big";
  //   } else if (level >= 3) {
  //     return "hexagon -normal";
  //   } else {
  //     return "hexagon -small";
  //   }`${setClassName(level)}`
  // };

  if (imageUrl) {
    return (
      <div className="flex items-center justify-center skill w-20 h-20 m-5">
        <img src={imageUrl} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center skill w-20 h-20 m-5 rounded-full p-4 bg-[#0f1e2d]">
        <span className="text pointer-events-none text-sm text-white">
          {skill}
        </span>
      </div>
    );
  }
};

export default Skill;
