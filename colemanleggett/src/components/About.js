import React from 'react'
import styled from 'styled-components';

function About() {
    return (
        <Container id="about">
            <ProfileImg src ="https://lh3.googleusercontent.com/a-/AOh14GhvXI5hbukrQGgBnVmETGqghd1FxTVshDsilLXc5w=s288-p-rw-no" />
            <TextBox>
            <p>
                Hi, I'm Coleman.  I've always been interested in software development, but was never truly introduced to it until a few summers back at a company I had been with for many years.
                I began working on various VBA applications with the Operations Manager there which sparked my love for coding and pushed me to learn more.  I'm a mostly self-taught programmer who has 
                has some recent experience in IT and various AWS services.
            </p>
            <br />
            <p>
                Check out some of my projects and let me know what you think!
            </p>
            </TextBox>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 7vh;
    color: rgb(240, 247, 244);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px) {
        flex-direction: column;
        margin-bottom: 5vh;
    }
`;

const ProfileImg = styled.img`
    border-radius: 50%;
    padding: 10px 10px;
    box-shadow: 0 40px 15px -15px rgba(0, 0, 0, 0.3), 
        inset 0 -50px 20px -20px rgba(0, 0, 0, 0.4);

        @media(max-width: 768px) {
            margin-bottom: 3vh;
        }

        @media(max-width: 480px) {
            max-height: 50%;
            max-width: 50%;
        }
    `;

const TextBox = styled.div`
    margin-left: 5vw;
    padding: 10px 10px;

    @media(max-width: 768px) {
        margin: auto;
    }
`;

export default About