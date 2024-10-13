import React from 'react'
import { Container, InnerContainer, LeftContainer, Profile, RightContainer, Title } from './AboutStyle.tsx'
import ProfileImage from '../../assets/me.png'
import { SubTitle } from '../Home/HomeStyle.tsx'
import AboutData from '../../../utils/data/AboutData.json'

const AboutUs: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        {/*  left */}
        <LeftContainer>
          <Profile src={ProfileImage} />
        </LeftContainer>

        {/*  right */}
        <RightContainer>
          <Title>{AboutData.title}</Title>
          <SubTitle>{AboutData.content}</SubTitle>
        </RightContainer>
      </InnerContainer>
    </Container>
  )
}

export default AboutUs