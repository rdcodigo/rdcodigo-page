import LinkedinIcon from '../../public/images/linkedin.svg'
import GithubIcon from '../../public/images/github.svg'

export default function Header() {
    return (
        <div className="bg-img-header bg-cover w-full h-screen text-color1">
            <div className="h-16 flex text-xs border-b border-color1  bg-color2 bg-opacity-50 justify-evenly absolute w-full py-4">
                <button className="hover:border rounded-xl border-color1 px-10">Home</button>
                <button className="hover:border rounded-xl border-color1 px-10">Skills</button>
                <button className="hover:border rounded-xl border-color1 px-10">Jobs</button>
            </div>
            <div className="flex h-full w-full justify-between items-center px-10">
                <div className="flex gap-10 self-end py-5">
                    <a href="https://www.linkedin.com/in/rdcodigo/" target="_blank">
                        <img className='hover:border rounded-lg p-2' width={200} src={LinkedinIcon} alt="Linkedin Icon" />
                    </a>
                    <a href="https://github.com/rdcodigo" target="_blank">
                        <img className='hover:border rounded-lg p-2' width={200} src={GithubIcon} alt="Github Icon" />
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-amita text-xxl">
                        Diego Rodrigues
                    </h1>
                    <span className="font-buda text-xs">
                        DESENVOLVEDOR WEB FULL-STACK
                    </span>
                </div>
            </div>
        </div>
    )
}