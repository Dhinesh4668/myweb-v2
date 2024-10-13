/**
 * Home Component
 *
 * This component displays the hero profile data (title and subtitle) from a JSON file.
 * It uses styled components for layout and text formatting.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 *
 * @returns {JSX.Element} The Home component displaying hero title and subtitle.
 * @author Dhinesh
 */


import React from 'react'
import heroProfile from '../../../utils/data/heroData.json'
import Arrow from '../../assets/icons/growIcon.svg'
import {
  ArrowIcon,
  Button,
  CenterContainer,
  FloatingIcon,
  HomeContainer,
  IconsContainer,
  PrimaryText,
  Round,
  SubTitle,
} from './HomeStyle.tsx'
import AboutUs from '../AboutUs/AboutUs.tsx'
import Icon1 from '../../assets/skills/svelte-icon.svg'
import Icon2 from '../../assets/skills/github-icon.svg'
import Icon3 from '../../assets/skills/bash-icon.svg'
import Icon4 from '../../assets/skills/android-vertical.svg'
import Icon5 from '../../assets/skills/docker.svg'
import Icon6 from '../../assets/skills/typescript.svg'
import Icon7 from '../../assets/skills/redux.svg'
import Icon8 from '../../assets/skills/expo.svg'

const generateOvalPosition1 = (index: number) => {
  // Define positions in an oval shape: left-right edges and top-bottom edges
  const positions = [
    { top: '10%', left: '5%' }, // top-left
    { top: '10%', right: '5%' }, // top-right
    { bottom: '10%', left: '5%' }, // bottom-left
    { bottom: '10%', right: '5%' }, // bottom-right
    { top: '50%', left: '5%' }, // middle-left
    { top: '50%', right: '5%' }, // middle-right
    { top: '20%', left: '50%' }, // center-top-left
    { top: '20%', right: '50%' }, // center-top-right
  ]

  return positions[index % positions.length] // Cycle through positions for each icon
}

const Home: React.FC = () => {

  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8]

  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * 90) + '%' // Random top value between 0% and 90%
    const left = Math.floor(Math.random() * 90) + '%' // Random left value between 0% and 90%
    return { top, left }
  }
  return (
    <React.Fragment>
      <HomeContainer>
        <IconsContainer>
          {/* Random positions for each icon */}
          {icons.map((data: string, index: number) => (
            <FloatingIcon src={data} style={generateOvalPosition1(index)} />
          ))}


        </IconsContainer>
        <CenterContainer>
          <PrimaryText>{heroProfile?.title}
            <ArrowIcon src={Arrow} />
          </PrimaryText>
          <SubTitle>{heroProfile?.subtitle}</SubTitle>
        </CenterContainer>

        {/*  button*/}
        <Button to="/">contact
          <Round />
        </Button>

      </HomeContainer>
      {/*  about us*/}
      <AboutUs />
    </React.Fragment>
  )
}

export default Home
