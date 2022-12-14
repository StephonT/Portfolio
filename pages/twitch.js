import Image from "next/legacy/image";
import React from "react";
import tuImg from "../public/projects/twitch.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tuImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2>Twitch UI</h2>
          <h3>Next.js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-white">Projects</p>
          <h2>Overview</h2>
          <p className="text-white py-2 tracking-widest">This project was built using Next.js. I added authentication using NextAuth.js. This made it very easy to add authentication to this application. In this project, I gave the user the ability sign in using their Google Account or their Github account. I only added this feature to gain experience with NextAuth.js. I also used the mockaroo website for the mock data. Click the link to explore the website Mockaroo. This website was fairly easy to create mock data. I used Tailwind.css to style this application.</p>
          <Link href='https://twitch-replica.vercel.app/' target='_blank'><button className="px-8 py-2 mt-4 mr-8">Demo</button></Link>
          <Link href='https://github.com/StephonT/Twitch-Replica' target='_blank'><button className="px-8 py-2 mt-4 mr-8">Code</button></Link>
        </div>
        {/* Box on Right */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-amber-300 rounded-xl p-4">
          <div className="p-2">
            <p className="text-white text-center font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextAuth.js
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind.css
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Icons
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer text-amber-300">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;