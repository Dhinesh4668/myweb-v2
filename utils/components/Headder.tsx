import React from 'react';
import { HeaderContainer, Logo, Button, HeaderLink, LinkContainer } from './HeadderStyles';

const Header = (): React.FC => {
    const linkData = [
        {
            title: "about me",
            link: "/about"
        },
        {
            title: "Home",
            link: '/'
        },
        {
            title: "Blog",
            link: "/blog"
        },
        {
            title: "Projects",
            link: "/projects"
        }
    ];

    return (
        <HeaderContainer>
            <Logo src="/path/to/logo.png" alt="Logo" />
            <LinkContainer>
                {linkData.map((data, index) => (
                    <HeaderLink
                        key={index}
                        to={data.link}
                    >
                        {data.title}
                    </HeaderLink>
                ))}
            </LinkContainer>
            <Button onClick={() => alert("Sample")}>let's talk 👋</Button>
        </HeaderContainer>
    );
};

export default Header;
