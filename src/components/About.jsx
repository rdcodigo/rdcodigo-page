import React from "react"
import { motion } from "framer-motion";

import htmlImg from "../../public/images/html.png"
import cssImg from "../../public/images/css.png"
import javaScriptImg from "../../public/images/javascript.png"
import reactImg from "../../public/images/react.png"
import tailwindImg from "../../public/images/tailwind.png"
import nodeImg from "../../public/images/node.png"
import profileImg from "../../public/images/profile.png"


const variants = {
    leftOut: { x: -200, opacity: 0 },
    rigthOut: { x: +200, opacity: 0 },
    invisible: { opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export default function About() {

    return (
        <div id="about" className="relative flex justify-center items-center bg-color1 bg-cover w-full h-screen">

            <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute right-[10%] top-[5%] z-30 text-m font-amita text-color3 underline"
            >
                Sobre
            </motion.h1>

            <motion.div
                variants={variants}
                initial="rigthOut"
                whileInView="show"
                transition={{
                    type: "spring",
                    damping: 5,
                    mass: 0.5,
                    stifness: 100
                }}
                className='absolute left-[10%] h-[75%] w-[30%] bg-color4'
            >
            </motion.div>

            <motion.div
                variants={variants}
                initial="leftOut"
                whileInView="show"
                transition={{
                    type: "spring",
                    damping: 5,
                    mass: 0.5,
                    stifness: 100
                }}
                className="flex relative w-[85%] h-[60%] m-[5%] md:h-[400px] md:w-[700px] 2xl:h-[600px] 2xl:w-[1000px] drop-shadow-[5px_15px_15px_rgba(0,0,0,1)] md:drop-shadow-[10px_25px_25px_rgba(0,0,0,1)] justify-end"
            >
                <div>
                    <img className="z-10 absolute bottom-0 left-0 w-[130px] md:w-[400px] 2xl:w-[600px]" src={profileImg} alt="Profile IMG" />
                </div>

                <div className='flex flex-1 flex-row-reverse bg-color1 bg-opacity-70 md:bg-opacity-90'>
                    <div className='w-[60%] md:w-[40%] h-full flex justify-center items-center'>
                        <div className='flex gap-1 flex-col justify-center text-xxs md:text-sm 2xl:text-m text-color3 font-amita font-bold w-[80%] h-[80%]'>
                            <h2 className='text-xs text-color3 opacity-60 font-buda'>Nome:</h2>
                            <span className='indent-5'>Diego Rodrigues</span>
                            <h2 className='text-xs text-color3 opacity-60 font-buda'>Graduação:</h2>
                            <span className='indent-5'>Analista de Sitemas</span>
                            <h2 className='text-xs text-color3 opacity-60 font-buda'>Nascimento:</h2>
                            <span className='indent-5'>1990</span>
                            <h2 className='text-xs text-color3 opacity-60 font-buda'>Localização:</h2>
                            <span className='indent-5'>Patos - PB</span>
                            <h2 className='text-xs text-color3 opacity-60 font-buda'>Habilidades:</h2>
                            <div className="grid grid-cols-3 gap-1 items-center py-2">
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src={htmlImg} alt="HTML Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src={cssImg} alt="CSS Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src={javaScriptImg} alt="Javascript Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src={nodeImg} alt="Node Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src={tailwindImg} alt="Tailwind Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src={reactImg} alt="React Icon" />
                            </div>
                        </div>
                    </div>

                </div>

            </motion.div>

        </div>
    )
}