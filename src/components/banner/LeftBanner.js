import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "MERN Developer.","Frontend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">PRYANSHU RATHOUR</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a  final year CSE student pursuing B.TECH from KIET group of institutions, Ghaziabad with overall CGPA of 8.45. My area of expertise is in C++ programming. I've tackled over 300 Data Structures and Algorithms problems on LeetCode and CodeChef, demonstrating my dedication to mastering problem-solving skills. I'm passionate about Full Stack development, and built some impactful projects using the MERN stack. Eager to leverage my expertise and contribute effectively to relevant endeavors..
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner