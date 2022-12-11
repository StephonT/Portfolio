import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-amber-300 tracking-widest uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="py-4">
            Hi, I am <span className="text-white">Stephon</span>
          </h1>
          <h1 className="py-4">A Full-Stack Web Developer</h1>
          <p className="text-white tracking-widest py-4 max-w-[70%] m-auto">
            I am currently a Police Sergeant in the state of New Jersey. I am
            looking to switch careers to become a Software Engineer. I am
            passionate about building web applications on the front-end as well
            as the back-end. I am currently building projects using React.js and
            collaborating with other Software Developers on full stack projects.
            Feel free to contact me if you would like to collaborate on a
            project, have questions for me, or would like to hire me! Please
            refer to the contact section of my portfolio for my contact
            information.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-amber-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
              <Link href='https://www.linkedin.com/in/stephon-treadwell/' target='_blank'><FaLinkedinIn /></Link>
            </div>
            <div className="rounded-full shadow-lg shadow-amber-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
              <Link href='https://github.com/StephonT' target='_blank'><FaGithub /></Link>
            </div>
            <div className="rounded-full shadow-lg shadow-amber-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
              <Link href='mailto: streadwe@gmail.com'><AiOutlineMail /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
