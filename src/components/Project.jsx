import { motion } from "framer-motion"

//Images Links
import memoryGameImg from "../../public/images/memoryGame.png"
import pageImg from "../../public/images/page.png"

export const projectImg = [
    memoryGameImg,
    pageImg
]

//Deploy Links
const memoryGameLink = "https://memory-game-xi-wheat.vercel.app/"
const pageLink = ""

export const projectLink = [
    memoryGameLink,
    pageLink
]

// Repository Links
const memoryGameRepository = "https://github.com/rdcodigo/memory-game"
const pageRepository = "https://github.com/rdcodigo/page"

export const projectRepository = [
    memoryGameRepository,
    pageRepository
]

// Items Titles
const memoryGameTitle = "Jogo da Memória"
const pageTitle = "Página pessoal"

export const projectTitle = [
    memoryGameTitle,
    pageTitle
]

// Items Paragraphs
const memoryGameParagraph = "Jogo desenvolvido durante o curso Desenvolvedor Web Full-stack do programador BR."
const pageParagraph = "Esta página pessoal que contém informações sobre mim e meus projetos."

export const projectParagraph = [
    memoryGameParagraph,
    pageParagraph
]

// Items Footers
const memoryGameFooter = "Acesse o repositório"
const pageFooter = "Acesse o repositório"

export const projectFooter = [
    memoryGameFooter,
    pageFooter
]

const variants = {
    leftOut: { x: -200, opacity: 0 },
    rigthOut: { x: +200, opacity: 0 },
    invisible: { opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export function Project(props) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.a
                variants={variants}
                initial="rigthOut"
                whileInView="show"
                transition={{
                    type: "spring",
                    damping: 5,
                    mass: 0.5,
                    stifness: 100
                }}
                href={props.link}
                target="_blank"
            >
                <img
                    src={props.img}
                    className="relative h-[100px] w-[200px] md:h-[350px] md:w-[700px] 2xl:h-[600px] 2xl:w-[1000px] drop-shadow-[10px_35px_35px_rgba(0,0,0,1)] justify-end rounded hover:opacity-50"
                />
            </motion.a>
            <motion.div
                variants={variants}
                initial="leftOut"
                whileInView="show"
                className="realative px-10 md:px-20 flex flex-col md:h-[400px] md:w-[500px] 2xl:h-[670px] 2xl:w-[700px] items-center justify-center text-color1 font-buda gap-10"
            >

                <h1 className="text-xs md:text-s">{props.title}</h1>

                <p className="self-start text-xs md:text-s">
                    {props.paragraph}
                </p>

                <a 
                    className="text-xxs md:text-xs hover:underline"
                    href={props.repository}
                    target="_blank">
                    {props.footer}
                </a>
            </motion.div>
        </div>
    )
}