import React from "react"
import { Link } from "react-scroll"

import linkedinImg from "../../public/images/linkedin.png"
import githubImg from "../../public/images/github.png"

export default function Header() {
    return (
        <div id="header" className="bg-img-header bg-cover w-full h-screen text-color1">
            <div className="flex flex-col-reverse lg:flex-row h-full w-full lg:p-6 xl:p-20">
                <div className="flex flex-col-reverse lg:flex-col flex-1 justify-evenly lg:justify-between lg:py-10">
                    <div className="flex gap-10 self-center ">
                        <a href="https://www.linkedin.com/in/rdcodigo/" target="_blank">
                            <img className=' border-color1 rounded-xl p-2 w-[130px] hover:w-[200px] lg:w-[200px] lg:hover:w-[250px] 2xl:w-[300px] 2xl:hover:w-[350px] duration-500' src={linkedinImg} alt="Linkedin Icon" />
                        </a>
                        <a href="https://github.com/rdcodigo" target="_blank">
                            <img className=' border-color1 rounded-xl p-2 w-[130px] hover:w-[200px] lg:w-[200px] lg:hover:w-[250px] 2xl:w-[300px] 2xl:hover:w-[350px] duration-500' src={githubImg} alt="Github Icon" />
                        </a>
                    </div>

                    <div className="flex self-center gap-10 text-color1 font-buda text-xs lg:text-m">
                        <Link to="about" smooth={true} duration={300} className=" w-[130px] lg:w-[250px] text-center bg-color3 bg-opacity-80 hover:text-color3 hover:bg-color1 border rounded-xl border-color1 lg:px-10">SOBRE</Link>
                        <Link to="portfolio" smooth={true} duration={300} className=" w-[130px] lg:w-[250px] text-center bg-color3 bg-opacity-80 hover:text-color3 hover:bg-color1 border rounded-xl border-color1 lg:px-10">PROJETOS</Link>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center lg:gap-5 2xl:gap-10">
                    <h1 className="font-amita text-xm lg:text-l 2xl:text-xl">
                        Diego Rodrigues
                    </h1>
                    <span className="font-buda text-xxs lg:text-xs 2xl:text-s border-b border-color1">
                        DESENVOLVEDOR WEB FULL-STACK
                    </span>
                </div>
            </div>
        </div>
    )
}