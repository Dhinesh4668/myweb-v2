import React, { useEffect, useState } from 'react';
import { HeaderContainer, Logo, HeaderLink, LinkContainer } from './HeadderStyles';
import Bash from '../Components/asstet/bash-icon.svg';

const Header = () => {
    const [hideHeader, setHideHeader] = useState(false);

    const handleSwipe = (event) => {
        if (event.deltaY > 0) {
            setHideHeader(true);
        } else {
            setHideHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleSwipe);
        return () => {
            window.removeEventListener('wheel', handleSwipe);
        };
    }, []);

    const linkData = [
        { title: "About Me", link: "/about" },
        { title: "Home", link: '/' },
        { title: "Blog", link: "/blog" },
        { title: "Projects", link: "/projects" }
    ];

    return (
        <HeaderContainer hideHeader={hideHeader}>
            <Logo src={Bash} alt="Logo" />
            <LinkContainer>
                {linkData.map((data, index) => (
                    <HeaderLink key={index} to={data.link}>
                        {data.title}
                    </HeaderLink>
                ))}
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;
