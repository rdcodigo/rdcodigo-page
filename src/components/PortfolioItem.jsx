//Images Links
import memoryGameImg from "../../public/images/memoryGame.png"
import emBreveImg from "../../public/images/emBreve.jpg"

export const portfolioItemImg = [
    memoryGameImg,
    emBreveImg
]

//Deploy Links
const memoryGameLink = "https://memory-game-xi-wheat.vercel.app/"
const emBreveLink = ""

export const portfolioItemLink = [
    memoryGameLink,
    emBreveLink
]

// Repository Links
const memoryGameRepository = "https://github.com/rdcodigo/memory-game"
const emBreveRepository = ""

export const portfolioItemRepository = [
    memoryGameRepository,
    emBreveRepository
]

// Items Titles
const memoryGameTitle = "Memory Game"
const emBreveTitle = ""

export const portfolioItemTitle = [
    memoryGameTitle,
    emBreveTitle
]

// Items Paragraphs
const memoryGameParagraph = "Jogo desenvolvido durante o curso Desenvolvedor Web Full-stack do programador BR."
const emBreveParagraph = "MAIS PROJETOS EM BREVE"

export const portfolioItemParagraph = [
    memoryGameParagraph,
    emBreveParagraph
]

// Items Footers
const memoryGameFooter = "Acesse o repositório"
const emBreveFooter = ""

export const portfolioItemFooter = [
    memoryGameFooter,
    emBreveFooter
]



export function PortfolioItem(props) {
    return (
        <div className="flex items-center">
            <a href={props.link} target="_blank" className="w-60%">
                <img className="relative h-[350px] w-[700px] 2xl:h-[600px] 2xl:w-[1000px] drop-shadow-[10px_35px_35px_rgba(0,0,0,1)] justify-end rounded"
                    src={props.img}
                />
            </a>
            <div className="px-20 flex flex-col h-[400px] w-[500px] 2xl:h-[670px] 2xl:w-[700px] items-center justify-center text-m text-color1 font-buda gap-10">
                <h1>{props.title}</h1>
                <p className="self-start text-s indent-5">{props.paragraph}</p>
                <a className="text-xs hover:underline" href={props.repository} target="_blank">{props.footer}</a>
            </div>
        </div>
    )
}