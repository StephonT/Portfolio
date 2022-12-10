import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import contactImg from "../public/assets/contactMe.jpg";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-white">Contact</p>
        <h2 className="py-4">How To Get In Touch With Me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-amber-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contactImg}
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Name Here</h2>
                <p className="text-white">Full-Stack Developer</p>
                <p className="py-4 text-white">
                  I am available for freelance or full-time positions. Contact
                  me.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8 text-amber-300">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-amber-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-amber-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-amber-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-amber-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-amber-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-amber-300" rows="10"
                  />
                </div>
                <button className="w-full p-4 text-amber-300 mt-4">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href='/'>
            <div className="rounded-full shadow-lg shadow-white p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
              <HiOutlineChevronDoubleUp className="text-amber-300" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
