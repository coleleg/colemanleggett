import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { useNavigate } from 'react-router-dom';

const Cards = props => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        window.localStorage.setItem('props', JSON.stringify(props));
        navigate('/details');
    }


    return (
        <Wrap onClick={handleClick} >
            <img src = {props.img} alt={props.alt} />
            <h3 className="card-title">{props.title}</h3>
            <p className="git-btn"><a href={props.git}><GitHubIcon sx={{color: "white"}} /></a></p>
            <p className="site-btn"><a href={props.site}><LinkIcon sx={{color: "white"}} /></a></p>
        </Wrap>
    )
}
    
    const Wrap = styled.div`
    height: 80%;

    // implement if more than 1 row of cards
    // margin-top: 2vh;

    max-height: 397px;
    min-height: 397px;
    border-radius: 5px;
    border: 3px solid #0A0A0A;
    overflow: hidden;
    background-color: #0A0A0A;
    box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
        rgb(0 0 0 / 75%) 0 15px 10px -9px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
        cursor: pointer;
    }

    .card-title {
        margin-left: 1vw;
        margin-bottom: 1vh;
        color: rgb(240, 247, 244);
        transform: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
    }
    
    .git-btn {
        margin-bottom: 1vh;
        margin-left: 1vw;
        color: rgb(240, 247, 244);
        cursor: pointer;
        transform: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;

        // makes it so the cursor doesn't extend all the way across the card
        width: 10%;
    }

    .site-btn {
        margin-top: .5vw;
        margin-left: 1vw;
        color: rgb(240, 247, 244);
        cursor: pointer;
        transform: translateY(1%);
        transition: transform 250ms ease;
        transition-delay: 250ms;
        
        // makes it so the cursor doesn't extend all the way across the card
        width: 10%;
    }

    

        @media(hover) {

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: translateY(1%);
                transition: transform 250ms ease;
                transition-delay: 250ms;
                cursor: pointer;
            }
        
            .card-title {
                margin-left: 1vw;
                margin-bottom: 1vh;
                color: rgb(240, 247, 244);
                transform: translateY(1%);
                transition: transform 250ms ease;
                transition-delay: 250ms;
            }
            
            .git-btn {
                margin-bottom: 1vh;
                margin-left: 1vw;
                color: rgb(240, 247, 244);
                cursor: pointer;
                transform: translateY(1%);
                transition: transform 250ms ease;
                transition-delay: 250ms;
        
                // makes it so the cursor doesn't extend all the way across the card
                width: 10%;
            }
        
            .site-btn {
                margin-top: .5vw;
                margin-left: 1vw;
                color: rgb(240, 247, 244);
                cursor: pointer;
                transform: translateY(1%);
                transition: transform 250ms ease;
                transition-delay: 250ms;
                
                // makes it so the cursor doesn't extend all the way across the card
                width: 10%;
            }
            
            &:hover {
                transform: scale(1.05);
                box-shadow: rgb(0 0 0 / 75%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 85%) 0px 30px 22px -10px;
                border: 3px solid rgba(249, 249, 249, .9);
        
                img {
                    transform: translateY(-30%);
                    transition: transform 250ms ease;
                    transition-delay: 250ms;
                }
        
                .card-title {
                    transform: translateY(-450%);
                    transition: transform 250ms ease;
                    transition-delay: 250ms;
                }
        
                .git-btn {
                    opacity: 75%;
                    transform: translateY(-350%);
                    transition: transform 250ms ease;
                    transition-delay: 250ms;
        
                    &:hover {
                        transform: translateY(-350%);
                        opacity: 100%;
                        margin-left: 1.5vw;
                    }
                }
                
                .site-btn {
                    opacity: 75%;
                    transform: translateY(-400%);
                    transition: transform 250ms ease;
                    transition-delay: 250ms;
        
                    &:hover {
                        transform: translateY(-400%);
                        opacity: 100%;
                        margin-left: 1.5vw;
                    }
                }
        }
    }
`;


export default Cards