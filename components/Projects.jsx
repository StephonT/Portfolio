import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

//Projects
import CodeFlow from '../public/projects/Code-Flow.jpg'
import PhotoPort from "../public/projects/photoPort.jpg";
import Twitch from "../public/projects/twitch.jpg";
import WatchItLater from "../public/projects/watchItLater.jpg";


const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-white">Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual component to keep clean code (ProjectItem) */}
          <ProjectItem title="Code Flow" backgroundImg={CodeFlow} techUsed='MERN Stack' projectUrl="/property"/>
          <ProjectItem title="PhotoPort" backgroundImg={PhotoPort} techUsed='React.js' projectUrl="/property"/>
          <ProjectItem title="Twitch" backgroundImg={Twitch} techUsed='Next.js, NextAuth, Tailwind' projectUrl="/property"/>
          <ProjectItem title="WatchItLater" backgroundImg={WatchItLater} techUsed='MERN Stack' projectUrl="/property"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
