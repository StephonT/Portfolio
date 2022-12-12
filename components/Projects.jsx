import React from "react";
import ProjectItem from "./ProjectItem";

//Projects
import cfImg from '../public/projects/Code-Flow.jpg'
import ppImg from "../public/projects/photoPort.jpg";
import tuImg from "../public/projects/twitch.jpg";
import wilImg from "../public/projects/watchItLater.jpg";


const Projects = () => {
  return (
    <div id="projects" className="w-full scroll-margin">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-white">Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual component to keep clean code (ProjectItem) */}
          <ProjectItem title="Code Flow" backgroundImg={cfImg} techUsed='MERN Stack' projectUrl="/codeflow"/>
          <ProjectItem title="PhotoPort" backgroundImg={ppImg} techUsed='React.js' projectUrl="/photoport"/>
          <ProjectItem title="Twitch" backgroundImg={tuImg} techUsed='Next.js, NextAuth, Tailwind' projectUrl="/twitch"/>
          <ProjectItem title="WatchItLater" backgroundImg={wilImg} techUsed='MERN Stack' projectUrl="/watchitlater"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
