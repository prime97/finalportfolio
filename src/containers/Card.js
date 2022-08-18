import React from "react";
import profile from '../components/Container/Card/images/ami.jpg';
import {FaGithub,FaFacebook,FaYoutube,FaEnvelope} from 'react-icons/fa';
import { CardDiv, CardEdge, CardInfo, Envelop, FacebookLogo, GithubLogo, Link, Name, Profession, Span, YoutubeLogo } from "../components/Container/Card/cardmod";
import { ImageDiv, ProfileImage } from "../components/Container/Card/images/image";

function Card(){
    return(
        
        <CardDiv>
            <CardEdge>
                <ImageDiv>
                    <ProfileImage src={profile}/>
                </ImageDiv>
                <CardInfo>

                    <Name>
                        Mohammad Abubakkar Siddique
                    </Name>
                    <Profession>
                        Student / BSc Computer Science
                    </Profession>

                    <Link>

                    <GithubLogo href="https://github.com/prime97">
                        <FaGithub/>
                        <Span>GitHub</Span>
                    </GithubLogo>

                    <FacebookLogo href="https://www.facebook.com/simonprime97">
                        <FaFacebook/>
                        <Span>FaceBook</Span>
                    </FacebookLogo>
                    
                    <YoutubeLogo href="https://www.youtube.com/channel/UC9egZeFmkeW6-CdahDsHvwQ">
                        <FaYoutube/>
                        <Span>YouTube</Span>
                    </YoutubeLogo>

                    <Envelop href="mailto:me.primesimon440@gmail.com">
                        <FaEnvelope/>
                        <Span>Email</Span>
                    </Envelop>

                    </Link>

                </CardInfo>
            </CardEdge> 
        </CardDiv>
    )
}

export default Card;