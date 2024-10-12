import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logoimage from '../../public/sample.svg'
import { Link } from 'react-router-dom'
import { colors } from '../styles/colors.json'

// Styled components
const CenteredContainer = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
`

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
    position: sticky;
    top: 0;
    background: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent')};
    backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
    display: flex;
    justify-content: space-between; /* Space between items */
    align-items: center;
    padding: 10px 30px;
    border-radius: 40px;
    margin: 20px;
    width: fit-content;
    transition: background 0.3s ease, backdrop-filter 0.3s ease; /* Smooth transition */

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements vertically */
        padding: 10px; /* Reduce padding */
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.text.primary};
    margin-right: 10px;
    font-family: 'DXGliter', sans-serif;

    img {
        margin-right: 10px;
    }

    padding-right: 10px;

    @media (max-width: 768px) {
        font-size: 18px; /* Adjust font size for smaller screens */
    }
`

const HeaderLogo = styled.img`
    height: 20px;
    width: 20px;
`

const NavLinks = styled.nav`
    display: flex;
    gap: 10px;

    a {
        color: #fff;
        font-size: 16px;
        text-decoration: none;

        &:hover {
            color: #aaa;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column; /* Stack links vertically */
        gap: 5px; /* Reduce gap between links */
        align-items: center; /* Center links */
    }
`

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <CenteredContainer>
      <HeaderContainer isScrolled={isScrolled}>
        <Link style={{ textDecoration: 'none' }} to={'/'}>
          <Logo>
            <HeaderLogo src={Logoimage} alt="Logo" />
            {''}Dhinesh{''}
          </Logo>
        </Link>
        <NavLinks>
          <a href="#whyus">Why us</a>
          <a href="#about">About us</a>
          <a href="#vlog">Blog</a>
        </NavLinks>
        {/* <ContactButton type="primary">
                Contact Us <ArrowRightOutlined />
            </ContactButton> */}
      </HeaderContainer>
    </CenteredContainer>
  )
}

export default Header
