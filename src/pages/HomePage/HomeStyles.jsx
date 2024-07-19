import styled from "styled-components";
import { size } from "../../../utils/theme";
import { colors } from "../../../utils/theme";
import Background from "../../assets/bg.svg";

export const HomeContainerWrap = styled.div`
  background-image: url(${Background});
  position: relative;
  background-size: 100%; // Increase background size by 2%
  background-repeat: no-repeat;
`;

export const InnerContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 10rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 2rem;
  }
`;

export const Left = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  gap: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const SubText = styled.p`
  font-size: 16px;
  font-weight: normal;
  /* font-family: Arial, sans-serif; */
  text-align: left;
  color: #666;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Highlight = styled.span`
  color: ${colors.primary};
`;

export const Right = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  margin-left: 2rem;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const HomeTitle = styled.p`
  font-size: ${size.large};
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const LineContainer = styled.div`
  /* position: absolute; */
  width: 100%;
`;

export const HomeLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  /* margin-bottom: 2rem; */
  /* margin-top: -5rem; */

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const VeriticalLine = styled.div`
  width: 1px;
  height: 12vh;
  background-color: black;
  margin-left: 80%;
`;

// line scroll
export const ScrollContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  height: 4rem;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;
