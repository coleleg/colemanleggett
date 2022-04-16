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
        <Container>
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