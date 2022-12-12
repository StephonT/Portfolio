import Image from "next/legacy/image";
import React from "react";
import codeFlowImg from "../public/projects/Code-Flow.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const codeflow = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={codeFlowImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2>Code Flow</h2>
          <h3>MERN Stack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-white">Projects</p>
          <h2>Overview</h2>
          <p className="text-white py-2 tracking-widest">
            CodeFlow is a social media application where users can post and
            share their coding projects with others. By logging in or signing up,
            the user will be able to use the project form to submit their
            project with a title, description, tags, repository link and
            deployed application link. Other users can then view those projects
            and like it, comment on it and also reply to other comments made on
            the project. Along with this the user will have access to their own
            personal profile page where they can add a biography and custom
            profile picture and view their posted projects. The user also has
            the option to friend other users which allows them to view their
            friends profiles and projects. Check out the deployed application
            using the links below
          </p>
          <Link href="https://code-flow-app.herokuapp.com/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href='https://github.com/StephonT/codeflow' target="_blank"><button className="px-8 py-2 mt-4 mr-8">Code</button></Link>
        </div>
        {/* Box on Right */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-amber-300 rounded-xl p-4">
          <div className="p-2">
            <p className="text-white text-center font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GraphQL
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongoose
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Apollo/Client
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Json Web Token
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-amber-300">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default codeflow;
