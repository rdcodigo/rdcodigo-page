import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
    projectImg,
    projectLink,
    projectTitle,
    projectParagraph,
    projectRepository,
    projectFooter,
    Project
} from "./Project";


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};


export const Portfolio = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, projectImg.length, page);
    const linkIndex = wrap(0, projectLink.length, page);
    const titleIndex = wrap(0, projectTitle.length, page);
    const paragraphIndex = wrap(0, projectParagraph.length, page);
    const footerIndex = wrap(0, projectFooter.length, page);
    const repositoryIndex = wrap(0, projectRepository.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div id="portfolio" className="flex items-center bg-color3 bg-cover w-full h-screen relative px-[5%]">
            <AnimatePresence initial={false} custom={direction}>
                <motion.h1
                    whileInView={{ scale: [0, 1] }}
                    className="absolute right-[10%] top-[5%] z-30 text-m font-amita text-color1 underline"
                >
                    Projetos
                </motion.h1>

                <div>
                    <motion.div
                        whileInView={{ scale: [0, 1] }}
                    >
                        <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring",
                            stiffness: 300,
                            damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        >
                            <Project
                                link={projectLink[linkIndex]}
                                img={projectImg[imageIndex]}
                                title={projectTitle[titleIndex]}
                                paragraph={projectParagraph[paragraphIndex]}
                                footer={projectFooter[footerIndex]}
                                repository={projectRepository[repositoryIndex]}
                            />
                        </motion.div>

                    </ motion.div>
                </div>
            </AnimatePresence>

            <div className="next absolute left-[2%] top-[35%] bg-color1 rounded-[30px] w-[15px] h-[30%] flex justify-center items-center cursor-pointer font-bold text-s z-20 scale-[-1] opacity-20 hover:opacity-100" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev absolute right-[2%] top-[35%] bg-color1 rounded-[30px] w-[15px] h-[30%] flex justify-center items-center cursor-pointer font-bold text-s z-20 opacity-20 hover:opacity-100" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </div>
    );
};