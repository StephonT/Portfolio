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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            natus fuga laborum corrupti sit totam, eveniet animi debitis
            aspernatur accusantium ipsam nemo accusamus reprehenderit! Quidem
            eligendi voluptates recusandae provident dolores.
          </p>
          <p className="text-white py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            repellat dolorum dolorem exercitationem molestias minus non at quasi
            error vero, sed ea adipisci nam soluta aliquid illum quis commodi.
            Aut!
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
