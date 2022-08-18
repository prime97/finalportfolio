import { FaArrowRight } from "react-icons/fa";
import { ArrowRight, Button, ButtonText, Frame, Header, Span } from "../components/contactmod";

export default function ContactMe(){
    return(

        <Frame>
            <Header>Contact me</Header>
            <a href="mailto:me.primesimon440@gmail.com">
                <Button>
                    <ButtonText>
                        <Span>Get in touch</Span>
                        <ArrowRight>
                        <FaArrowRight/>
                        </ArrowRight>
                    </ButtonText>
                </Button>
            </a> 
        </Frame>
    )
}