import React from "react";
import {FaGithub,FaFacebook,FaYoutube,FaEnvelope} from 'react-icons/fa';
function Footer(){
    return(
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/prime97">
                <FaGithub/>
                    <span class='sr-only'>Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.facebook.com/simonprime97">
                <FaFacebook/>
                    <span class='sr-only'>Facebook</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.youtube.com/channel/UC9egZeFmkeW6-CdahDsHvwQ">
                <FaYoutube/>
                    <span class='sr-only'>Youtube</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href="mailto:me.primesimon440@gmail.com">
                <FaEnvelope/>
                    <span class='sr-only'>Email</span>
            </a>
            </div>
            <div className="flex justify-center mt-4">
                <p className="text-black mb-4">
                    Developed using <span className="mr-2" role="link" aria-label="react">⚛️</span> by <a className="text-blue-500 hover:underline" href="mailto:me.primesimon440@gmail.com">Siddique</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;