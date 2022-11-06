import React from "react"
import { motion } from "framer-motion"

import linkedinImg from "../../public/images/linkedin.png"
import githubImg from "../../public/images/github.png"
import scrollDownImg from "../../public/images/scrollDownImg.png"
import { Link } from "react-scroll"

export default function Header() {
    return (
        <div id="header" className="bg-img-header bg-cover w-full h-screen text-color1">
            <div className="flex flex-col-reverse lg:flex-row h-full w-full lg:p-6 xl:p-20">
                <div className="flex flex-1 justify-center lg:self-end lg:py-10">
                    <div className="flex gap-10 self-center">
                        <a href="https://www.linkedin.com/in/rdcodigo/" target="_blank">
                            <img className='rounded-xl p-2 w-[130px] hover:w-[200px] md:w-[200px] md:hover:w-[250px] 2xl:w-[300px] 2xl:hover:w-[350px] duration-500' src={linkedinImg} alt="Linkedin Icon" />
                        </a>
                        <a href="https://github.com/rdcodigo" target="_blank">
                            <img className='rounded-xl p-2 w-[130px] hover:w-[200px] md:w-[200px] md:hover:w-[250px] 2xl:w-[300px] 2xl:hover:w-[350px] duration-500' src={githubImg} alt="Github Icon" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center lg:gap-5 2xl:gap-10">
                    <h1 className="font-amita text-xm md:text-l 2xl:text-xl">
                        Diego Rodrigues
                    </h1>
                    <span className="font-buda text-xxs md:text-xs 2xl:text-s border-b border-color1">
                        DESENVOLVEDOR WEB FULL-STACK
                    </span>
                </div>
                <Link to="about" smooth={true} duration={300} className="absolute bottom-0 right-[50%] translate-x-[50%]">
                    <motion.img
                        key={scrollDownImg}
                        src={scrollDownImg}
                        alt="Scroll Down"
                        initial={{y: 0}}
                        animate={{y: -50}}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="cursor-pointer bottom-0 opacity-70 w-[30px] md:w-[50px] 2xl:w-[70px] duration-500"  />
                </Link>
            </div>
        </div>
    )
}