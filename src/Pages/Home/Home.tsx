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
import { ArrowIcon, Button, CenterContainer, HomeContainer, PrimaryText, Round, SubTitle } from './HomeStyle.tsx'
import AboutUs from '../AboutUs/AboutUs.tsx'

const Home: React.FC = () => {

  return (
    <React.Fragment>
      <HomeContainer>
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
