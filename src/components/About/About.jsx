import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_logo/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[5vw] md:px-[10vw] font-sans mt-10 md:mt-15 pb-18"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between md:gap-1 lg:gap-2">
        {/* Left Side */}
        <div className="md:w-[55%] text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Hi, I am
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Tanuj Gupta
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "React Developer",
                  "Front End Developer",
                  "Full Stack Enthusiast",
                  "MERN Stack Developer",
                  "Java Programmer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
            I'm currently working on the MERN stack, where I’m continuously
            enhancing my skills in building responsive front-end interfaces and
            robust back-end systems using modern JavaScript frameworks.
            Alongside, I have gained a solid foundation in Java and developed a
            strong understanding of object-oriented programming concepts.
          </p>
          <a
            href="https://drive.google.com/file/d/1RH_dYARqtmOoY-vSbcDKHXI3qeYm8Ga1/view?usp=sharing"
            // href="https://drive.google.com/file/d/1QicTCR0_hd3rKoGXQ-rda5LA1enI5L0C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-6 rounded-full text-sm font-semibold transition duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec",
            }}
          >
            RESUME VIEW
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-[40%] flex justify-center md:justify-end ml-[-10px]">
          <Tilt
            className="w-66 h-66 sm:w-78 sm:h-78 md:w-90 md:h-90 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
