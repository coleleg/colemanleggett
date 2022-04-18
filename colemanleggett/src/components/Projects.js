import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

function Projects() {

    return (
        <Container id="projects">
            <ProjectContent>
                <Cards
                    img= "/images/gym-crm.png"
                    alt= "gym-crm website"
                    title="Gym Crm: Make Gains!"
                    git="http://github.com/coleleg/gym-crm"
                    site="https://protected-waters-34726.herokuapp.com/"
                    description="Lorem Ipsum it's easter"
                />
                <Cards
                    img= "/images/portfolio.png"
                    alt= "coleman's portfolio website"
                    title="My Portfolio"
                    git="http://github.com/coleleg/colemanleggett"
                    site="https://protected-waters-34726.herokuapp.com/"
                />
                <Cards
                    img= "/images/password-generator.png"
                    alt= "password generator website"
                    title="Password Generator"
                    git="http://github.com/coleleg/password-generator"
                    site="https://coleleg.github.io/password-generator/"
                />
                <Cards
                    img= "/images/note-taker.png"
                    alt= "note taker website"
                    title="Note Taker"
                    git="http://github.com/coleleg/note-taker"
                    site="https://young-island-76408.herokuapp.com/"
                />
            </ProjectContent>
        </Container>

    )
};

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 10vh;

    @media(max-width: 480px) {
        margin-top: 0;
    }
`;

const ProjectContent = styled.div`
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media(max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media(max-width: 480px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    
`;





export default Projects