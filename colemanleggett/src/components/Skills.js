import React from 'react';
import styled from 'styled-components';
import slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { blue } from '@mui/material/colors';

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
        <Container>
            <IconWrap>
                <PsychologyIcon sx={{ color: blue[100] }} className="icons" />
            </IconWrap>
            <CarouselWrap>
                <Carousel {...settings}>
                    <Wrap>
                        <img src = "/images/JS-logo.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/css.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/html.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/mysql.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/mongodb.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/node.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/react.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/RestApi.png" />
                    </Wrap>
                    <Wrap>
                        <img src = "/images/graphql.png" />
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
    height: 50%;
    width: 100%;
    
    .icons {
        transform: scale(10.0);
    }
`;

const IconWrap = styled.div`
    align-items: center;
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const CarouselWrap = styled.div`
    display: flex;
    justify-content: right;
    width: 40%;
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
    
`;

const Wrap = styled.div`
    img {
        margin: auto;
    }
`;

export default Skills