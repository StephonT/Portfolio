import Image from "next/legacy/image";
import React from "react";
import watchItLaterImg from "../public/projects/watchitlater.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const watchitlater = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={watchItLaterImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2>Watch It Later</h2>
          <h3>MERN Stack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-white">Projects</p>
          <h2>Overview</h2>
          <p className="text-white py-2 tracking-widest">
            This application is a fully functional and interactive movie and tv
            show watchlist. It allows for users to browse the homepage which
            displays a variety of Most Popular and Top Rated movies and tv shows
            along with allowing them to search for any movie or tv show they
            please. Each page will give the user the ability to rate, comment
            and add the respective movie or tv show to their watchlist under
            Plan to Watch, Watching or Completed. The user will be able to
            browse and search movies without an account, but in order to access
            ratings, comments and create a watchlist they will need to either
            login or signup. By doing so all the user ratings, watchlists and
            comments will be saved to the applications database so it will never
            be lost.
          </p>
          <Link href='https://watch-it-later.herokuapp.com/' target='_blank'><button className="px-8 py-2 mt-4 mr-8">Demo</button></Link>
          <Link href='https://github.com/StephonT/watch-it-later' target='_blank'><button className="px-8 py-2 mt-4 mr-8">Code</button></Link>
        </div>
        {/* Box on Right */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-amber-300 rounded-xl p-4">
          <div className="p-2">
            <p className="text-white text-center font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express.js
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express-Session
              </p>
              <p className="text-amber-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TMDB API
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

export default watchitlater;
