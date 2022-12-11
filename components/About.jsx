import Image from "next/image";
import React from "react";
import TreadFace from "../public/assets/face.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-white uppercase text-xl tracking-widest">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="text-white py-2">I am a non-traditional developer </p>
          <p className="text-white py-2">
            I started web development on CodeAcademy in April of 2022, where I learned HTML, CSS, and Javascript. After completing each lesson, I grew a passion for the tech industry and decided to start a 6 month Coding Bootcamp at Rutgers University where I recently earned a Full-Stack Development certificate. During those 6 months, I learned how to use different technologies within the full stack. I am proficient in building front-end applications using HTML, CSS, Javascript, and React.
          </p>
          <p className="text-white py-2">
             I have experience working directly with clients and taking mock wireframes to deployed applications. In my spare time, I learn a new technology then apply the newly learned skill into an application using React or another React framework. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.   
          </p>
        </div>
        <div className=" h-auto m-auto shadow-lg shadow-amber-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="border-2 border-amber-300 rounded-xl"
            src={TreadFace}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
