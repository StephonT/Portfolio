import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TreadLogo from "../public/assets/Treadwell-Logo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#1e3f71');
  
  const router = useRouter()

  useEffect(()=> {
   if(
    router.asPath === '/codeflow' ||
    router.asPath === '/photoport' ||
    router.asPath === '/twitch' ||
    router.asPath === '/watchitlater'
   ) {
    setNavBg('transparent')
    
   } else{
    setNavBg('#1e3f71')
   
   }
  },[router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    // NAV Bar
    <div
    style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={TreadLogo}
            alt="/"
            width="125"
            height="50"
            style={{ marginTop: "25px" }}
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-xl hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-xl hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-xl hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-xl hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-xl hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* background overlay when mobile menu is opened */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            {/* top part of mobile menu */}
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
              <Image
                src={TreadLogo}
                alt="/"
                width="87"
                height="35"
                style={{ marginTop: "25px" }}
              />
              </Link>
              
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-amber-400 p-3 cursor-pointer bg-[#1e3f71] "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-amber-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Take a look around my portfolio!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul id="mobile-list" className="uppercase">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-40 mobile-icons">
              <p className="uppercase tracking-widest">Lets Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-amber-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#1e3f71]">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-amber-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#1e3f71]">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-amber-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#1e3f71]">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-amber-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-[#1e3f71]">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
