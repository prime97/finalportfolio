import React from "react";
import profile from '../images/ami.jpg';
import {FaGithub,FaFacebook,FaYoutube,FaEnvelope} from 'react-icons/fa';
function Card(){
    return(
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
                <div className=''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='profile face'/>
                </div>
                    <div className="text-center mt-5">
                        <p className='text-xl sm:text-2xl text-gray-900 font-semibold'>
                            Mohammad Abubakkar Siddique
                        </p>
                        <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                            Student / BSc Computer Science
                        </p>
                
                        <div className='flex align-center justify-center mt-4'>
                            
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
                    </div>
            </div>
        </div>
    )
}

export default Card;