import Image from "next/image";
import React from "react";

// tech images
import CSS from "../public/assets/images/tech-logos/css.png";
import HTML from "../public/assets/images/tech-logos/html.png";
import JavaScript from "../public/assets/images/tech-logos/javascript.png";
import Mongo from "../public/assets/images/tech-logos/mongo.png";
import Node from "../public/assets/images/tech-logos/node.png";
import Reactimg from "../public/assets/images/tech-logos/react.png";
import Tailwind from "../public/assets/images/tech-logos/tailwind.png";
import TypeScript from "../public/assets/images/tech-logos/typescript.png";
import Github from "../public/assets/images/tech-logos/github.png"
import Nextjs from "../public/assets/images/tech-logos/nextjs.png"

const Skills = () => {

    return (
      <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-white'>
            Skills
          </p>
          <h2 className='py-4'>What I Can Do</h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={HTML} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={CSS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={JavaScript} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Reactimg} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Tailwind} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Mongo} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Mongo</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Github} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={TypeScript} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Typescript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Node} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Nextjs} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Skills;
