import React from 'react'
import { DoubleQuts, InnerContainer, Name, ParentDiv, Right } from './About_style'
import { Button } from '../../Components'


const About = {
    name: "DhinesKumar Thirupathi",
    position: "full stack developer",
    content: "a dedicated full-stack mobile and web developer hailing from the vibrant state of Tamil Nadu, India. With a passion for crafting seamless digital experiences, I specialize in leveraging the latest technologies to deliver innovative solutions. i know about MERN , ReactNaative , flutter , SQL DataBase ,GCP and Devops, gitops"
}
const AboutusPage = () => {
    return (
        <ParentDiv>


            {/* inner container */}
            <InnerContainer>

                <Right>
                    <DoubleQuts />
                    <p>
                        <Name>{About.name}</Name><br />
                        <span>{About.position}</span><br /><br />
                        {About.content}
                    </p>
                </Right>
            </InnerContainer>

        </ParentDiv>
    )
}

export default AboutusPage