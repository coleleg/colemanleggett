import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(formState);

        // send instead of sendTo for formstate
        emailjs.send('service_y37pu5b', 'template_uvw4zdq', formState, 'j4oceoFjx1CJSJJEJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setFormState({
            name: '',
            email: '',
            message: ''
        });

        // allows for email submission & clearing of the actual text in the form
        alert("Thanks for your interest!");
        window.location.reload();
};

    return (
        <Container>
            <TextContainer>
                <h3>Thanks for checking out my portfolio- contact me here.</h3>
            </TextContainer>
            <FormContainer>
                <form onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange}></input>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Your Email" onChange={handleChange}></input>
                    <label>Message:</label>
                    <textarea name="message" onChange={handleChange}/>
                    <button type="submit">Send</button>
                </form>
            </FormContainer>
        </Container>
    )
};

const Container = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 20vh;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
`;

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3rem;
    height: 100%;
    width: 40%;

    form {
        display: block;
        width: 100%;
        border-radius: 5px;
        padding: 1rem;
        border: 3px solid #0A0A0A;
        background-color: #0A0A0A;
        box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
            rgb(0 0 0 / 75%) 0 15px 10px -9px;

            label {
                margin-bottom: .5em;
                color: rgb(240, 247, 244);
                display: block;
            }
        
            input {
                padding: .5em;
                border: none;
                border-radius: 2px;
                width: 100%;
                margin-bottom 1em;
            }
        
            textarea {
                padding: .5em;
                width: 100%;
                max-width: 100%;
                min-width: 100%;
                height: 150px;
                max-height: 250px;
                margin-bottom: .5em;
            }

            button {
                margin-top: .5em;
                width: 100%;
                height: 3vh;
                font-weight: bold;
                text-color: #0A0A0A;
                cursor: pointer;
            }
    }
`;

const TextContainer = styled.div`
    color: rgb(240, 247, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40%;
`;

export default Contact