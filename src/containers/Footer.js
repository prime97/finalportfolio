import React from "react";
import {FaGithub,FaFacebook,FaYoutube,FaEnvelope} from 'react-icons/fa';
import { FooterFrame, SocialMediaFrame, Span, GithubLogo, FacebookLogo, YoutubeLogo, Envelop, ShortInfo, Paragraph, Label, Link } from "../components/Footermod";
function Footer(){
    return(
        <FooterFrame>
            <SocialMediaFrame>
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
                </SocialMediaFrame>
                <ShortInfo>
                    <Paragraph>
                        Developed using <Label role="link" aria-label="react">⚛️</Label> by  <Link href="mailto:me.primesimon440@gmail.com">Siddique</Link>
                    </Paragraph>
                </ShortInfo>
        </FooterFrame>
    )
}

export default Footer;