import React from 'react';
import styled from 'styled-components';
import slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PsychologyIcon from '@mui/icons-material/Psychology';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

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
            <TitleWrap>
                <PsychologyIcon className="icons" />
                <SkillsTitle>
                    <h1>SKILLS</h1>
                </SkillsTitle>
            </TitleWrap>
            <DoubleArrowIcon className="icons" />
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
                </Carousel>
            </CarouselWrap>
        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    margin-top: 5vh;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    
    .icons {
        transform: scale(5.0);
    }
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
`;

const SkillsTitle = styled.div`
    margin-left: 3vw;
    margin-right: 3vw;
    
`;

const CarouselWrap = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 5vw;
    width: 75%;
`;

const Carousel = styled(slick)`
    width: 50%;

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
    }`;
export default Skills