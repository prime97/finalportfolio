import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import {FaChevronDown} from 'react-icons/fa';

function About(){
    return(
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-2xl text-black md:text-4xl font-bold text-center'>
                Hello there!
            </p>

            <p className='text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4'>
                I am Siddique, student of 3rd year BSc Computer Science, in London Metropolitan Uniersity. 
                I am a passionate programmer who loves to learn new programming languages and currently learning how to develop web app using react.
                Since I started my journey at my Uni, I participated in a java programming competition and won the 1st prize. 
                Apart from it, I made some basic Java Applications and a website using JavaBeans, SQL and glassfish server for my Uni assignments.
                I also was a success coach in Uni for the foundation and 1st year students. I helped them with their programming modules and tasks.
            </p>

            <ScrollIntoView selector ="#skills">
                <div className="mx-auto p-20">
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500'/>
                </div>
            </ScrollIntoView>
        </div>
    )
}

export default About;