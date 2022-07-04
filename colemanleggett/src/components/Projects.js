import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

function Projects() {

    return (
        <Container id="projects">
            <ProjectContent>
                <Cards
                    img= "../../public/images/gym-crm.png"
                    alt= "gym-crm website"
                    title="Gym Crm: Make Gains!"
                    git="http://github.com/coleleg/gym-crm"
                    site="https://protected-waters-34726.herokuapp.com/"
                    description="A simple and effective CRM for small, club-style gyms."
                    technology="JavaScript, Mongo, GraphQL, React, Express, Apollo, JWT, CSS, Node/NPM"
                />
                <Cards
                    img= "../../public/images/rtf-converter.png"
                    alt= "rtf-converter screenshot"
                    title="RTF Converter"
                    git="https://github.com/coleleg/rtf-converter"
                    site="https://coleleg.github.io/rtf-converter/"
                    description="Uses Regex to find data in an RTF file and converts it the user's desired format.
                                I made this for the company I used to work for and it is saving them hundreds of hours per year of typing kitchen prep-lists.
                                They are able to use this to mass convert hundreds of menu items per week into CSV format that can be added to an excel spreadhseet and printed.
                                Click the GitHub link and check the readme for a test string."
                    technology="JavaScript, Regex"
                />
                <Cards
                    img= "../../public/images/book-tracker.png"
                    alt= "Book Tracker website screenshot"
                    title="Book Tracker"
                    git="https://github.com/coleleg/book-tracker"
                    site="https://liber-tracker.herokuapp.com/"
                    description="Search for and Save books.  Keep track of how many pages you've read!"
                    technology="JavaScript, React, Mongo, Express, CSS, REST API, Web API, JWT, Node/NPM"
                />
                <Cards
                    img= "../../public/images/quiz-game.png"
                    alt= "Game of Thrones quiz game screenshot"
                    title="Game of Thrones Quiz Game"
                    git="https://github.com/coleleg/quiz-game"
                    site="https://coleleg.github.io/quiz-game/"
                    description="Think you know Game of Thrones?  
                    Make sure your volume is on for the best experience."
                    technology="JavaScript, JQuery, HTML, CSS"
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