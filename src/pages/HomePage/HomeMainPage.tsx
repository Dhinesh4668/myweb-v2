import React from 'react';
import {
    HomeContainerWrap,
    HomeTitle,
    Left,
    Right,
    SubText,
    Highlight,
    InnerContainer,
    ScrollContainer
} from './HomeStyles'; // Adjust the import path as needed
import { Button } from '../../../utils/components';
import HomePage from '../../assets/vector/homw-1.svg';
import location from '../../assets/icons/location.svg';
import styled, { keyframes } from 'styled-components';

interface HomeDataItem {
    skill: string;
}

const homeData: HomeDataItem[] = [
    { skill: "React" },
    { skill: "Node.js" },
    { skill: "HTML5" },
    { skill: "React Native" },
    { skill: "JavaScript" },
    { skill: "MongoDB" },
    { skill: "React" },
    { skill: "Node.js" },
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "JavaScript" },
    { skill: "MongoDB" }
];

// Define the floating animation
const float = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

// Define the marquee animation
const marquee = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

// Styled component for the floating icon
const FloatingIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    animation: ${float} 4s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FloatingIconOne = styled.div`
    position: absolute;
    top: 400px;
    left: 500px;
    animation: ${float} 2s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MarqueeText = styled.div`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    animation: ${marquee} 30s linear infinite;
    justify-content: space-evenly;
    p {
        display: inline-block;
        justify-content: space-evenly;
        margin: 0;
    }
`;

const HomeMainPage = () => {
    return (
        <HomeContainerWrap>
            {/* Floating icons */}
            <FloatingIcon>
                <img src={location} height={50} width={100} alt="Location Icon" />
                <p style={{ fontSize: 13, marginTop: -10, marginLeft: 80, backgroundColor: "black", padding: "5px", borderRadius: "5px", color: "white", textAlign: "center" }}>app 📱</p>
            </FloatingIcon>
            <FloatingIconOne>
                <img src={location} height={50} width={100} alt="Location Icon" />
                <p style={{ fontSize: 15, marginTop: -20, marginLeft: 60, backgroundColor: "blue", padding: "5px", borderRadius: "5px", color: "white" }}>web 🌐</p>
            </FloatingIconOne>
            <InnerContainer>
                <Left>
                    <HomeTitle>
                        <Highlight>I develop full-stack mobile & web applications</Highlight> that not only perform seamlessly but also captivate and inspire users.
                    </HomeTitle>
                    <SubText>
                        I am 'DhineshKumar', a developer from INDIA. I create user-friendly User Interfaces and applications for fast-growing startups.
                    </SubText>
                    {/* Self description */}
                    <Button title={"Book a call"} onClick={() => alert("Book a call")} />
                </Left>

                {/* Right */}
                <Right>
                    <img src={HomePage} alt="Home Page" />
                </Right>
            </InnerContainer>
            {/* Scrolling skills */}
            <ScrollContainer>
                <MarqueeText>
                    {homeData.map((data, index) => (
                        <p key={index} style={{ display: "inline-block", margin: "0 20px" }}> - {data.skill}</p>
                    ))}
                </MarqueeText>
            </ScrollContainer>
        </HomeContainerWrap>
    );
};

export default HomeMainPage;
