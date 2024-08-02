import React from 'react'
import { FaInstagram,FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {SiLeetcode, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-col gap-6 lgl:gap-3 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            { <span className="bannerIcon">
             <a href='https://leetcode.com/u/PRYANSHU_RATHOUR/'><SiLeetcode /></a> 
            </span> }
            <span className="bannerIcon">
              <a href='https://github.com/Pryanshu963'><FaGithub /> </a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/pryanshu-rathour-357477251/'> <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media