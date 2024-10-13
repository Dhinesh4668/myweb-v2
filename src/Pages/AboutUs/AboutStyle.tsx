import styled from 'styled-components'
import Colors from '../../styles/colors.json'

export const Container = styled.div`
    width: 100%;
    padding: 0px 16px;
    margin-bottom: 30px;
`

export const InnerContainer = styled.div`
    background-color: ${Colors.colors.primary.aboutBg};
    height: 80vh;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: black
`
export const LeftContainer = styled.div``
export const RightContainer = styled.div``

export const Title = styled.h1``
export const Profile = styled.img`
    height: 50vh;
    width: 60vh;
    object-fit: contain;
    overflow: hidden;
`
export const LinkRow = styled.div``
export const Icons = styled.img``