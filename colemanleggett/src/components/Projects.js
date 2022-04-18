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
                    description="A simple and effective CRM for small, club-style gyms."
                    technology="JavaScript, Mongo, GraphQL, React, Express, Apollo, JWT"
                />
                <Cards
                    img= "/images/portfolio.png"
                    alt= "coleman's portfolio website"
                    title="My Portfolio"
                    git="http://github.com/coleleg/colemanleggett"
                    site="/"
                    description="You're looking at it.  Check local storage to see how this page renders."
                    technology="JavaScript, React"
                />
                <Cards
                    img= "/images/password-generator.png"
                    alt= "password generator website"
                    title="Password Generator"
                    git="http://github.com/coleleg/password-generator"
                    site="https://coleleg.github.io/password-generator/"
                    description="One of my first applications."
                    technology="JavaScript, React"
                />
                <Cards
                    img= "/images/note-taker.png"
                    alt= "note taker website"
                    title="Note Taker"
                    git="http://github.com/coleleg/note-taker"
                    site="https://young-island-76408.herokuapp.com/"
                    description="Take notes with Express.js!  A REST application."
                    technology="JavaScript, Express, REST API"
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