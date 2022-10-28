import { Link } from "react-scroll"

export default function Header() {
    return (
        <div id="" className="bg-img-header bg-cover w-full h-screen text-color1">
            <div className="flex h-full w-full p-6 xl:p-20">
                <div className="flex flex-col flex-1 justify-between py-10">
                    <div className="flex gap-10 self-center ">
                        <a href="https://www.linkedin.com/in/rdcodigo/" target="_blank">
                            <img className='hover:w-[250px] border-color1 rounded-xl p-2 w-[200px] 2xl:w-[300px] 2xl:hover:w-[350px] duration-500' src="../../public/images/linkedin.png" alt="Linkedin Icon" />
                        </a>
                        <a href="https://github.com/rdcodigo" target="_blank">
                            <img className='hover:w-[250px] border-color1 rounded-xl p-2 w-[200px] 2xl:w-[300px] 2xl:hover:w-[350px] duration-500' src="../../public/images/github.png" alt="Github Icon" />
                        </a>
                    </div>

                    <div className="flex self-center gap-10 text-color1 font-buda text-m 2xl:text-sm">
                        <Link to="about" smooth={true} duration={300} className="w-[250px] text-center bg-color3 bg-opacity-80 hover:text-color3 hover:bg-color1 border rounded-xl border-color1 px-10 2xl:text-m 2xl:w-[250px]">SOBRE</Link>
                        <Link to="portfolio" smooth={true} duration={300} className="w-[250px] text-center bg-color3 bg-opacity-80 hover:text-color3 hover:bg-color1 border rounded-xl border-color1 px-10 2xl:text-m 2xl:w-[250px]">PORTFOLIO</Link>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-5 2xl:gap-10">
                    <h1 className="font-amita text-l 2xl:text-xl">
                        Diego Rodrigues
                    </h1>
                    <span className="font-buda text-xs 2xl:text-s border-b border-color1">
                        DESENVOLVEDOR WEB FULL-STACK
                    </span>
                </div>
            </div>
        </div>
    )
}