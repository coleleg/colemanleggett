import React from 'react';
import styled from 'styled-components';
import slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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