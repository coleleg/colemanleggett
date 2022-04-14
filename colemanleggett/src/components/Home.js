import React from 'react'
import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

function Home() {
    return (
        <Container>
            <Skills />
            <About />
        </Container>
    )
};

const Container = styled.main`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    background: url("images/black-textured.jpg") center center / cover no-repeat fixed;

`;


export default Home