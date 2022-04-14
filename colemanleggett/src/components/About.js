import React from 'react'
import styled from 'styled-components';

function About() {
    return (
        <Container>
            <ProfileImg src ="https://lh3.googleusercontent.com/a-/AOh14GhvXI5hbukrQGgBnVmETGqghd1FxTVshDsilLXc5w=s288-p-rw-no" />
            <TextBox>
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello
                Hello Hello

            </TextBox>
        </Container>
    )
}

const Container = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProfileImg = styled.img`
    border-radius: 50%;
    padding: 10px 10px;
    `;

const TextBox = styled.div`
    margin-left: 10vw;
    padding: 10px 10px`;

export default About