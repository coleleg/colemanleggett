import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

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
                        <IconContainer>
                            <p className="git-btn"><a href={project.git}><GitHubIcon style={{ fontSize: 40 }} sx={{color: "white"}} /></a></p>
                            <p className="site-btn"><a href={project.site}><LinkIcon style={{ fontSize: 40 }} sx={{color: "white"}} /></a></p>
                        </IconContainer>
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
    margin-right: 15vw;
    padding: 2vw;
    background-color: #0A0A0A;
    color: rgb(240, 247, 244);
    border-radius: 5px;
    border: 3px solid #0A0A0A;
    box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
        rgb(0 0 0 / 75%) 0 15px 10px -9px;

    h3 {
        margin-bottom: 2vh;
    }
`

const IconContainer = styled.div`
    margin-top: 2vh;
    display: flex;
    justify-content: center;

    p {
        padding: 2vh;
    }

    .site-btn, .git-btn {
        opacity: 75%;
    }

    .site-btn:hover, .git-btn:hover {
        opacity: 100%;
        transform: scale(1.05);
    }
`
export default Details