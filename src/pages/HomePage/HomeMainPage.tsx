// import React from 'react';
import {
    HomeContainerWrap,
    HomeTitle,
    Left,
    Right,
    SubText,
    Highlight,
    InnerContainer,
    ScrollContainer
} from './HomeStyles';
import { Button } from '../../Components';
import HomePage from '../../assets/vector/homw-1.svg';
import location from '../../assets/icons/location.svg';
import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from "react";
import supabase from "../../../supabase.ts";
import { Linkedin, Insta, Mail, Redit } from '../../assets/social/index.ts';
import AboutusPage from '../Aboutus/AboutusPage.tsx';

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

const socilal = [
    {
        name: "LinkeDin",
        icon: Linkedin
    },
    {
        name: "Insta",
        icon: Insta
    }
]

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
    top: 300px;
    left: 650px;
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
    const [ProfileData, setProfileData] = useState<{ des?: string; name?: string }>({})
    useEffect(() => {
        const fetchHomeData = async () => {
            const { data: homeData, error } = await supabase
                .from('homeData')
                .select('*');
            if (error) {
                console.log("error while fetching the data", error)
            } else {
                setProfileData(homeData[0])
                // console.log(ProfileData)
            }
        }

        // download resume


        fetchHomeData();
    }, []);
    const getFile = async () => {
        const { data, error } = await supabase.storage.from("resume").download("resume/bg.svg");
        if (error) {
            console.error("Error downloading file: ", error.message);
            return;
        }
        console.log(data)

    }
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
                        {/*<Highlight>I develop full-stack mobile & web applications</Highlight> that not only perform seamlessly but also captivate and inspire users.*/}
                        {ProfileData.des}
                    </HomeTitle>
                    <SubText>
                        {/*I am 'DhineshKumar', a developer from INDIA. I create user-friendly User Interfaces and applications for fast-growing startups.*/}
                        {ProfileData.name}
                    </SubText>
                    {/* Self description */}
                    <Button title={"Book a call"} onClick={getFile} />
                </Left>

                {/* Right */}
                <Right>
                    <img src={HomePage} alt="Home Page" />
                </Right>
            </InnerContainer>
            {/* Scrolling skills */}
            <div
                style={{
                    margin: "0rem 10rem",
                    marginTop: "-6rem"
                }}
            >

                {/* {socilal.map((data, index) => (
                    <img src={data.icon} height={50} width={50} alt={data.name} />
                ))} */}
            </div>
            {/* <ScrollContainer>
                <MarqueeText>
                    {homeData.map((data, index) => (
                        <p key={index} style={{ display: "inline-block", margin: "0 20px" }}> - {data.skill}</p>
                    ))}
                </MarqueeText>
            </ScrollContainer> */}
            <AboutusPage />
        </HomeContainerWrap>
    );
};

export default HomeMainPage;
