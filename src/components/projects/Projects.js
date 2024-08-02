import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-Portfolio"
          des=" Dynamic portfolio showcasing my creative projects and expertise in Web Development. Explore my work, skills, education, experience and achievements in a visually engaging and user-friendly interface"
          src={projectOne} gitlink={"www.google.com"} deploylink={"www.google.com"}
        />
        <ProjectsCard
          title="LIFE-PULSE"
          des="LifePulse is a comprehensive blood bank management system. This project is designed to automate and streamline blood
 bank operations, from donor management to blood inventory and distribution to hospitals.
 The system includes a React-based user interface for intuitive interaction, with a Node.js/Express.js backend providing
 RESTful API services.
  MongoDB serves as the primary database, offering scalability and flexibility for storing donor information, blood
 donation records, and inventory data."
          src={projectTwo} gitlink={"https://github.com/Pryanshu963/Life-Pulse"} deploylink={"/"}
        />
        <ProjectsCard
          title="EASY-SHARE"
          des="Design and developed a project that enables users to upload media files and the link generated can be used to download
 that file.
  Engineered a robust media upload solution, merging intuitive functionalities, cloud storage integration; optimized user
 experience, resulting in a 30 % reduction in upload processing time
 The application allows users to upload files, generate shareable links, and control access to shared files"
          src={projectThree} gitlink={"https://github.com/Pryanshu963/Easy-Share"} deploylink={"#"}
        />
       
         
      
       
      </div>
    </section>
  );
}

export default Projects
