import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImg from "../public/assets/contactMe.jpg";

const Contact = () => {
  
  return (
    <div id="contact" className="w-full scroll-margin lg:h-screen flex justify-center items-center">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-white">Contact</p>
        <h2 className="py-4">How To Get In Touch With Me</h2>
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* left */}
          <div className="col-span-1 lg:col-span-2 w-full h-full shadow-lg shadow-amber-300 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contactImg}
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <p className="py-4 text-white">
                  I am available for freelance or full-time positions.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8 text-amber-300">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/stephon-treadwell/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/StephonT" target="_blank">
                    <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:streadwe@gmail.com" target="_blank">
                    <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e3f71]">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
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
