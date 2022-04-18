import React from 'react';
import styled from 'styled-components';

function Details() {
    let project = window.localStorage.getItem('props');
    project = JSON.parse(project);
    console.log(project);
    return (
        <Container>
            <Content>
                <ImgContainer>
                    <img src={project.img} alt={project.alt} />
                </ImgContainer>
                <Description>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </Description>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    background: url("images/black-textured.jpg") center center / cover no-repeat fixed;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ImgContainer = styled.div`
    margin-left: 10vw;
    padding: 5vw;
    img {
        border-radius: 30px;
        box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
        rgb(0 0 0 / 75%) 0 15px 10px -9px;
    }
`
const Description = styled.div`
    margin-right: 10vw;
    padding: 5vw;
    background-color: #0A0A0A;
    color: rgb(240, 247, 244);
    border-radius: 5px;
    border: 3px solid #0A0A0A;
    box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
        rgb(0 0 0 / 75%) 0 15px 10px -9px;
`
export default Details