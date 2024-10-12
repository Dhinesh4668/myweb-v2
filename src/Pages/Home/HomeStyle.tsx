import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring' // Import react-spring
import HomeBackground from '../../assets/icons/home-bg.svg'
import { colors } from '../../styles/colors.json'

// main container with a center gradient
const HomeContainer = styled.div`
    background-image: radial-gradient(circle, ${colors.primary.highlight} -200%, transparent 30%), /* Center gradient */ url(${HomeBackground}); /* Existing background image */
    background-size: contain;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        background-size: cover;
        padding: 20px;
    }
`

// center container
const CenterContainer = styled.div`
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`

// main container text (Primary)
const PrimaryText = styled.p`
    font-size: 5.25em;
    color: ${colors.text.primary};
    text-transform: capitalize;

    @media (max-width: 1200px) {
        font-size: 4em;
    }

    @media (max-width: 768px) {
        font-size: 3em;
    }

    @media (max-width: 480px) {
        font-size: 2.5em;
    }
`

// sub text (Secondary)
const SubTitle = styled.p`
    font-size: 1.255em;
    color: ${colors.text.primary};
    width: 50vw;
    font-weight: 300; /* Set font-weight to light */

    @media (max-width: 1200px) {
        font-size: 1.1em;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`

// button styled with Link and react-spring animation
const StyledButton = styled(animated(Link))`
    height: 45px;
    width: 120px;
    background: ${colors.primary.highlight};
    align-content: center;
    align-items: center;
    text-align: center;
    color: ${colors.text.secondary};
    border-radius: 45px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100px;
        height: 40px;
    }

    @media (max-width: 480px) {
        width: 90px;
        height: 35px;
    }

    &:hover {
        border-radius: 10px;
    }
`

// button animation using react-spring
const Button = ({ to, children }) => {
  const [styles, api] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 15 },
  }))

  const handleMouseEnter = () => api.start({ transform: 'scale(1.1)' })
  const handleMouseLeave = () => api.start({ transform: 'scale(1)' })

  return (
    <StyledButton
      to={to}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </StyledButton>
  )
}

// Arrow Icon
const ArrowIcon = styled.img`
    height: 50px;
    width: 50px;
`

// Round styled component (unchanged)
const Round = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 25px;
    background-color: red;
`

export {
  HomeContainer,
  CenterContainer,
  PrimaryText,
  SubTitle,
  Button,
  ArrowIcon,
  Round,
}
