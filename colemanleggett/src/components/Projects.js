import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
    return (
        <Container>
            <ProjectContent>
                <Card>
                    <img src = "/images/gym-crm.png" alt="gym-crm website" />
                        <h3 className="card-title">Gym-Crm: Make Gains!</h3>
                        <p className="git-btn"><a href="http://github.com"><GitHubIcon /></a></p>
                        <p className="site-btn"><a><LinkIcon /></a></p>
                </Card>
                <Card>
                    <img src = "/images/gym-crm.png" alt="gym-crm website" />
                        <h3 className="card-title">Gym-Crm</h3>
                        <p className="git-btn"><a href="http://github.com"><GitHubIcon /></a></p>
                        <p className="site-btn"><a><LinkIcon /></a></p>
                </Card>
                <Card>
                    <img src = "/images/gym-crm.png" alt="gym-crm website" />
                        <h3 className="card-title">Gym-Crm</h3>
                        <p className="git-btn"><a href="http://github.com"><GitHubIcon /></a></p>
                        <p className="site-btn"><a><LinkIcon /></a></p>
                </Card>
                <Card>
                    <img src = "/images/gym-crm.png" alt="gym-crm website" />
                        <h3 className="card-title">Gym-Crm</h3>
                        <p className="git-btn"><a href="http://github.com"><GitHubIcon /></a></p>
                        <p className="site-btn"><a><LinkIcon /></a></p>
                </Card>
            </ProjectContent>
        </Container>

    )
};

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 7vh;
`;

const ProjectContent = styled.div`
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Card = styled.div`
    border-radius: 5px;
    border: 3px solid #0A0A0A;
    overflow: hidden;
    background-color: #0A0A0A;
    box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
        rgb(0 0 0 / 75%) 0 15px 10px -9px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
    }

    .card-title {
        margin-bottom: .5vw;
        margin-left: .5vw;
        color: rgb(240, 247, 244);
        transform: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
    }
    
    .git-btn {
        margin-top: .5vw;
        margin-left: .5vw;
        color: rgb(240, 247, 244);
        cursor: pointer;
        transform: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
    }

    .site-btn {
        margin-top: .5vw;
        margin-left: .5vw;
        color: rgb(240, 247, 244);
        cursor: pointer;
        transform: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 75%) 0px 40px 58px -16px,
            rgb(0 0 0 / 85%) 0px 30px 22px -10px;
        border: 3px solid rgba(249, 249, 249, .9);

        img {
            transform: translateY(-30%);
            transition: transform 250ms ease;
            transition-delay: 250ms;
        }

        .card-title {
            transform: translateY(-450%);
            transition: transform 250ms ease;
            transition-delay: 250ms;
            
        }

        .git-btn {
            transform: translateY(-350%);
            transition: transform 250ms ease;
            transition-delay: 250ms;
        }
        
        .site-btn {
            transform: translateY(-400%);
            transition: transform 250ms ease;
            transition-delay: 250ms;
        }

    }
`;





export default Projects