import React from "react";
import {SiJavascript, 
        SiTailwindcss,
        SiJava,
        SiHtml5,
        SiPython,
        SiReact,
        SiCplusplus,
        SiMysql} from "react-icons/si";
import { CPlusPlusLogo, 
        HTMLLogo, 
        JavaLogo, 
        JavaScriptLogo, 
        MySQLLogo, 
        P1, P2, 
        PythonLogo, 
        ReactLogo, 
        Skillborders, 
        SkillFrame, 
        SkillSection, 
        TailwindCSSLogo } from "../components/Skillsmod/Skillsmod";
import { info } from '../config'    

const { short_line } = info;
function Skills(){
    return(
        <SkillSection id="skills">

            <P2>{short_line}</P2>

            <SkillFrame>

                <Skillborders>
                    <CPlusPlusLogo>
                        <SiCplusplus/>
                    </CPlusPlusLogo>
                    <P1>C++</P1>
                </Skillborders>

                <Skillborders>
                    <JavaLogo>
                        <SiJava/>
                    </JavaLogo>
                    <P1>Java</P1>
                </Skillborders>

                <Skillborders>
                    <PythonLogo>
                        <SiPython/>
                    </PythonLogo>
                    <P1>Python</P1>
                </Skillborders>
                
                <Skillborders>
                    <HTMLLogo>
                        <SiHtml5/>
                    </HTMLLogo>
                    <P1>HTML</P1>
                </Skillborders>

                <Skillborders>
                    <MySQLLogo>
                        <SiMysql/>
                    </MySQLLogo>
                    <P1>MySQL</P1>
                </Skillborders>

                <Skillborders>
                    <JavaScriptLogo>
                        <SiJavascript/>
                    </JavaScriptLogo>
                    <P1>JavaScript</P1>
                </Skillborders>

                <Skillborders>
                    <TailwindCSSLogo>
                        <SiTailwindcss/>
                    </TailwindCSSLogo>
                    <P1>Tailwind</P1>
                </Skillborders>

                <Skillborders>
                    <ReactLogo>
                        <SiReact/>
                    </ReactLogo>
                    <P1>React</P1>
                </Skillborders>

            </SkillFrame>
        </SkillSection>
    )
}

export default Skills;