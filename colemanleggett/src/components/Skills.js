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
        autoplay: true
    };

    return (
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
    )
}


const Carousel = styled(slick)`
    margin-top: 10vh;
    width: 50%;
    position: absolute;

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
        margin-bottom: 5vh;
    }`;
export default Skills