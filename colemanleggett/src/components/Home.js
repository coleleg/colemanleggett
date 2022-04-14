import React from 'react'
import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

function Home() {
    return (
        <Container>
            hello
        </Container>
    )
};

const Container = styled.main`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    
    &:before {
        background: url("images/black-textured.jpg") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;


export default Home