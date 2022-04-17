import React from 'react'
import styled from 'styled-components';

function About() {
    return (
        <Container>
            <ProfileImg src ="https://lh3.googleusercontent.com/a-/AOh14GhvXI5hbukrQGgBnVmETGqghd1FxTVshDsilLXc5w=s288-p-rw-no" />
            <TextBox>
            <p>
                Hi, I'm Coleman.  I've always been interested in software development, but was never truly introduced to it until a few summers back at a company I had been with for many years.
                In order to enhance the experience of and communication between our sales and operations teams, our Operations Manager began building VBA applications to smooth
                out various processes that were vital to our business.  We were slow during the summer, and he began teaching me about what he was working on and how to build these applications.
                I caught on pretty quickly, and I was ultimately tasked with building apps for many of our new service offerings.
            </p>
            <br />
            <p>
                Fast forward a couple of years and I started to take it upon myself to learn about web development.  I'm now a full stack web developer with many proficiencies (see my skills 
                section below) and have recently earned a full stack certificate from the University of Central Florida.  Apart from my hard skills, I'm a great team player with a calm and positive 
                attitude and excellent deductive reasoning skills that have come in pretty handy when debugging code.
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