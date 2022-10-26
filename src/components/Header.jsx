
export default function Header() {
    return (
        <div className="bg-img-header bg-cover w-full h-screen text-color1">
            <div className="h-16 flex text-xs 2xl:text-sm border-b border-color1  bg-color3 bg-opacity-60 justify-evenly absolute w-full py-4">
                <button className="hover:border rounded-xl border-color1 px-10">Home</button>
                <button className="hover:border rounded-xl border-color1 px-10">About</button>
                <button className="hover:border rounded-xl border-color1 px-10">Jobs</button>
            </div>
            <div className="flex h-full w-full justify-between p-6 xl:p-20">
                <div className="flex flex-1 gap-10 self-end justify-center">
                    <a href="https://www.linkedin.com/in/rdcodigo/" target="_blank">
                        <img className='hover:border border-color1 rounded-lg p-2 w-[200px]' src="../../public/images/linkedin.png" alt="Linkedin Icon" />
                    </a>
                    <a href="https://github.com/rdcodigo" target="_blank">
                        <img className='hover:border border-color1 rounded-lg p-2 w-[200px]' src="../../public/images/github.png" alt="Github Icon" />
                    </a>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                    <h1 className="font-amita text-md 2xl:text-xl">
                        Diego Rodrigues
                    </h1>
                    <span className="font-buda text-xs 2xl:text-sm">
                        DESENVOLVEDOR WEB FULL-STACK
                    </span>
                </div>
            </div>
        </div>
    )
}