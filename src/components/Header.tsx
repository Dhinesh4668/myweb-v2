import React from 'react';
import styled from 'styled-components';
import Logoimage from '../../public/sample.svg';
import { Link } from 'react-router-dom';
import { colors } from '../styles/colors.json'

// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;
const HeaderContainer = styled.header`
  background-color: #000;
  display: flex;
  justify-content: center; /* Center the content */
  align-items: center;
  padding: 10px 30px;
  border-radius: 40px;
  margin: 20px;
  width: fit-content;
  align-items: center;
  align-content: center;

`;

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
`;

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
`;





const Header: React.FC = () => {
  return (
    <CenteredContainer>
      <HeaderContainer>
        <Link style={{
          textDecoration: "none"
        }} to={"/"}>
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
  );
};

export default Header;
