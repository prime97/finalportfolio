import React from "react";
import {SiJavascript, SiTailwindcss,SiJava,SiHtml5,SiPython,SiReact,SiCplusplus,SiMysql} from "react-icons/si";
function Skills(){
    return(
        <div className="max-w-4xl mx-auto justify-center py-12" id="skills">
            <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
                Coding languages I know
            </p>
            <div className="flex flex-wrap justify-center pt-2">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiCplusplus color="#2196f3" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">C++</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJava color="#e83313" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Java</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython color="#f7db07" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Python</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiHtml5 color="#f74f07" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">HTML</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiMysql color="#f7c307" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">MySQL</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript color="#f77f07" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">JavaScript</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color="#07bff7" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Tailwind CSS</p>
                </div>

                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiReact color="#8707f7" className='mx-auto text-4xl'/>
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
                </div>

            </div>
        </div>
    )
}

export default Skills;