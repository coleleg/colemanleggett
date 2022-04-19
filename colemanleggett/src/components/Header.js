import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
    return (
        <Nav>
            <Logo src="/images/full-stack.png" />
            <Name>
                COLEMAN LEGGETT
            </Name> 
            <Menu>
                <a href="https://github.com/coleleg">
                    <GitHubIcon sx={{ color: "white" }} />
                </a>
                <a href="/#about">
                    <span>ABOUT</span>
                </a>
                <a href="/#skills">
                    <span>SKILLS</span>
                </a>
                <a href="/#projects">
                    <span>PROJECTS</span>
                </a>
                <a href="/#contact">
                    <span>CONTACT</span>
                </a>
            </Menu>
        </Nav>
    )
};

const Nav = styled.div`
    min-height: 70px;
    top: 0;
    left: 0;
    right: 0;
    background: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    overflow-x: hidden;
    color: rgb(240, 247, 244);

    @media(max-width: 480px) {
        justify-content: center;
    }
`;

const Logo = styled.img`
`;

const Menu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 24px;
    align-items: center;
    justify-content: right;
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: rgb(240, 247, 244);
        text-decoration: none;
    }

    a:hover {
        transform: scale(1.1);
    }

    @media(max-width: 768px) {
        font-size: 50%;
    }

    @media(max-width: 480px) {
        font-size: 35%;
    }
`;

const Name = styled(Menu)`
    justify-content: left;
`;


export default Header