import React from 'react';
import styled from 'styled-components';
import slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import js from '../images/JS-logo.png';
import css from '../images/css.png';
import html from '../images/html.png';
import mysql from '../images/mysql.png';
import mongo from '../images/mongodb.png';
import node from '../images/node.png';
import react from '../images/react.png';
import rest from '../images/RestApi.png';
import graphQL from '../images/graphql.png';


function Skills() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidetoShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true
    };

    return (
        <Container id="skills">
            <CarouselWrap>
                <Carousel {...settings}>
                    <Wrap>
                        <img src = {js} />
                    </Wrap>
                    <Wrap>
                        <img src = {css} />
                    </Wrap>
                    <Wrap>
                        <img src = {html} />
                    </Wrap>
                    <Wrap>
                        <img src = {mysql} />
                    </Wrap>
                    <Wrap>
                        <img src = {mongo} />
                    </Wrap>
                    <Wrap>
                        <img src = {node} />
                    </Wrap>
                    <Wrap>
                        <img src = {react} />
                    </Wrap>
                    <Wrap>
                        <img src = {rest} />
                    </Wrap>
                    <Wrap>
                        <img src = {graphQL} />
                    </Wrap>
                </Carousel>
            </CarouselWrap>
        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    margin-top: 5vh;
    margin-bottom: 5vh;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 100%;
`;

const CarouselWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;

    @media(max-width: 1200px) {
        width: 80%;
    }

    @media(max-width: 480px) {
        width: 90%;
    }
`;

const Carousel = styled(slick)`
    width: 70%;
    
    ul li button {
        &:before {
            font-size: 10px;
            color: white;
        }

    }

    li.slick-active button::before {
        color: white;
    }

    @media(max-width: 768px) {
        width: 90%;
    }


    
`;

const Wrap = styled.div`
    img {
        margin: auto;

        @media(max-width: 1200px) {
            max-width: 50%;
            max-height: 50%;
        }

        @media(max-width: 768px) {
            margin-bottom: 2vh;
        }

        @media(max-width: 480px) {
            max-width: 44%;
            max-height: 44%;
        }
    }
`;

export default Skills