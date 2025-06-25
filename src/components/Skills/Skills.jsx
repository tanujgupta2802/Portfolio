import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <>
      {/* Section title */}
      <div id="skills" className="text-center mb-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h3>
        <div className="h-1 w-26 bg-purple-500 mt-2 mx-auto rounded-xl"></div>
      </div>

      {/* Section Category */}
      <div className="flex flex-wrap gap-3 lg:gap-10 py-10 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%] border-2 border-gray-400 rounded-xl py-5 px-4 sm:px-6 shadow-[0_0_5px_#ffffffaa] backdrop-blur-md

"
          >
            <h3 className="text-2xl text-gray-400 font-semibold text-center mb-5">
              {category.title}
            </h3>
            {/* <Tilt
              className="rounded-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            > */}
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skills) => (
                <div
                  key={skills.name}
                  className="flex justify-start items-center w-full py-2 px-3 border border-gray-400 rounded-4xl"
                >
                  <img
                    src={skills.logo}
                    alt={`${skills.name} logo`}
                    className="h-6 w-6"
                  />
                  <span className="text-sm text-gray-300 pl-4">
                    {skills.name}
                  </span>
                </div>
              ))}
            </div>
            {/* </Tilt> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
