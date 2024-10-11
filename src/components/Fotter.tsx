import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 250px;

  h4 {
    font-size: 18px;
    margin-bottom: 20px;
    color: #f0db4f; /* Highlight color */
  }

  p, a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a:hover {
    color: #f0db4f; /* Change color on hover */
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin: 0 10px;
  }

  a {
    font-size: 24px;
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #555;

  p {
    margin: 5px 0;
  }

  a {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #f0db4f;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                {/* About Section */}
                <FooterSection>
                    <h4>About Me</h4>
                    <p>
                        Hi, I'm [Your Name], a Full Stack Developer specializing in MERN Stack and mobile
                        development with React Native. Passionate about creating intuitive digital
                        experiences that make an impact.
                    </p>
                </FooterSection>

                {/* Contact Section */}
                <FooterSection>
                    <h4>Contact</h4>
                    <ul>
                        <li>Email: <a href="mailto:yourname@example.com">yourname@example.com</a></li>
                        <li>Phone: +1 234 567 890</li>
                        <li>Location: City, Country</li>
                    </ul>
                </FooterSection>

                {/* Quick Links Section */}
                <FooterSection>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </FooterSection>

                {/* Social Media Section */}
                <FooterSection>
                    <h4>Follow Me</h4>
                    <SocialLinks>
                        <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </SocialLinks>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
                </p>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
