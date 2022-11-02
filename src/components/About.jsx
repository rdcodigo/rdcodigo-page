import React from "react"

export default function About() {
    return (
        <div id="about" className="relative flex justify-center items-center bg-color1 bg-cover w-full h-screen">
            <h1 className="absolute right-[10%] top-[5%] z-30 text-m font-amita text-color3">Sobre</h1>

            <div className='absolute left-[10%] h-[85%] w-[30%] bg-color4'>

            </div>

            <div className="flex relative h-[400px] w-[700px] 2xl:h-[600px] 2xl:w-[1000px] drop-shadow-[10px_35px_35px_rgba(0,0,0,1)] justify-end">
                

                <div>
                    <img className="z-10 absolute bottom-0 left-0 w-[400px] 2xl:w-[600px]" src="../../../public/images/profile-image.png" alt="" />
                </div>

                <div className='flex flex-1 flex-row-reverse bg-color1 bg-opacity-90'>
                    <div className='w-[40%] h-full flex justify-center items-center'>
                        <div className='flex gap-1 flex-col text-sm 2xl:text-m text-color3 font-amita font-bold w-[80%] h-[70%]'>
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
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src="../../public/images/html.png" alt="HTML Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src="../../public/images/css.png" alt="Github Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src="../../public/images/javascript.png" alt="Github Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src="../../public/images/node.png" alt="Github Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src="../../public/images/tailwind.png" alt="Github Icon" />
                                <img className='drop-shadow-[5px_5px_3px_rgba(13,14,16,1)] w-[40px] 2xl:w-[60px]' src="../../public/images/react.png" alt="Github Icon" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}