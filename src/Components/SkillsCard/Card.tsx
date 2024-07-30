import { Icon, MainCardContainer, Title, ContentWrapper, LearnMoreButton, Line, TitleWrapper, Description } from './CardStyle';

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
    return (
        <MainCardContainer>
            <TitleWrapper>
                <Icon src={image} alt={`image_${image}`} />
                <Title>{title}</Title>
            </TitleWrapper>
            <Line />
            <ContentWrapper>
                <Description>{description}</Description>
                <LearnMoreButton to={link}>
                    Learn More
                </LearnMoreButton>
            </ContentWrapper>
        </MainCardContainer>
    );
}

export default Card;
