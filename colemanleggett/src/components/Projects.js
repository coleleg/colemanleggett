import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Cards from './Cards';

function Projects() {
    return (
        <Container>
            <ProjectContent>
            <Cards
                        img= "/images/gym-crm.png"
                        alt= "gym-crm website"
                        title="Gym Crm: Make Gains!"
                        git="http://github.com/coleleg/gym-crm"
                        site="https://protected-waters-34726.herokuapp.com/"
                    />
                    <Cards
                        img= "/images/gym-crm.png"
                        alt= "gym-crm website"
                        title="Gym Crm: Make Gains!"
                        git="http://github.com/coleleg/gym-crm"
                        site="https://protected-waters-34726.herokuapp.com/"
                    />
                    <Cards
                        img= "/images/gym-crm.png"
                        alt= "gym-crm website"
                        title="Gym Crm: Make Gains!"
                        git="http://github.com/coleleg/gym-crm"
                        site="https://protected-waters-34726.herokuapp.com/"
                    />
                    <Cards
                        img= "/images/gym-crm.png"
                        alt= "gym-crm website"
                        title="Gym Crm: Make Gains!"
                        git="http://github.com/coleleg/gym-crm"
                        site="https://protected-waters-34726.herokuapp.com/"
                    />
            </ProjectContent>
        </Container>

    )
};

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 10vh;
`;

const ProjectContent = styled.div`
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;





export default Projects