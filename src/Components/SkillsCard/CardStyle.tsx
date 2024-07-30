import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../utils/theme";

export const MainCardContainer = styled.div`
  background-color: black;
  height: 100%;
  width: 70%;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    /* color: white; */
  &:before {
    content: '';
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary};
    transition: bottom 0.5s ease-in-out;
    z-index: 0;
    border-radius: 0px 10px;
  }

  &:hover {
    &:before {
      bottom: 0;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  text-align: center;
  align-self: center;
  align-content: center;
  z-index: 1;

`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;

`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  /* color: #333; */
  color: white;

`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: white;
  margin: 0.5rem 0;
  &:hover {
    background-color: white;
  }
`;

export const LearnMoreButton = styled(Link)`
  display: inline-block;
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin-top: 1rem;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: black;
 
    color: white;
    border: 1px solid black;
  }
`;

export const Description = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;