import styled from 'styled-components';
import { colors } from '../../../utils/theme';
import DoubleQutsImage from '../../assets/icons/double-quotes-l-svgrepo-com.svg';
import { color } from 'framer-motion';

export const ParentDiv = styled.div`
    display: flex;
    height: 85vh;
    background-color: ${colors.black};
    margin: 1rem;
    padding: 5px;
    border-radius: 0.3rem;
    color: white;
    flex: 1;
    margin-top: 3rem;
`;

export const DoubleQuts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${DoubleQutsImage});
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px; /* Set a fixed width */
    height: 50px; /* Set a fixed height */
    position: absolute;
    right: 42rem; /* Adjusted positioning */
    top: -4rem; /* Adjusted positioning */
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1rem;
    gap: 30px;
`;



export const Right = styled.div`
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 50%;
    flex-wrap: nowrap;
    position: relative; 
    width: 10%;
    text-align: left;
`;

// test styles
export const AboutContentContainer = styled.div`
`;
// name
export const Name = styled.div`
    color: ${colors.primary};
    font-size: 30px;
    font-weight: 700;

`
// position
// des