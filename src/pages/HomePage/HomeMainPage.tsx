import React from 'react';
import { HomeContainerWrap, HomeTitle } from './HomeStyles'; // Adjust the import path as needed
import ProjectsList from './helper/ProjectsList';

const HomeMainPage = () => {
    return (
        <HomeContainerWrap>
            <HomeTitle>
                I design products that blend seamless <br />
                functionality with captivating user experiences, <br />
                ensuring every interaction delights and inspires.
            </HomeTitle>
            <p>
                kjsdfhjdsf
                sdjfhsdjf
            </p>
            {/* self des */}
            <ProjectsList />
            {/* skills */}
            {/* cv button */}

            {/* projects list */}
        </HomeContainerWrap>
    );
};

export default HomeMainPage;
