import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import {FaChevronDown} from 'react-icons/fa';
import { info } from '../config'
import { Container } from '../components/Container/Container'
import {Title} from '../components/Container/Title'
import { Paragraph } from "../components/Paragraph/Paragraph";
import { ScrollDiv } from "../components/Container/ScrollView";


const { about } = info;
function About(){
    return(
        
           
    <Container>
        <Title>Hello there!</Title>
            <Paragraph> {about} </Paragraph>
            
            <ScrollIntoView selector ="#skills">
                <ScrollDiv>
                    <FaChevronDown className='animate-bounce mx-auto text-center text-3xl text-blue-500'/>
                </ScrollDiv>
            </ScrollIntoView>
        
    </Container>
    )
}

export default About;