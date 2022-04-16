import React from 'react';
import styled from 'styled-components';

function Contact() {
    return (
        <Container>
            <TextContainer>
                <h3>Thanks for checking out my portfolio- contact me here.</h3>
            </TextContainer>
            <FormContainer>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input></Input>
                    <Label>Email:</Label>
                    <Input></Input>
                    <Message>Message:</Message>
                </FormGroup>
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

const FormGroup = styled.div`
    display: block;
    width: 100%;
    border-radius: 5px;
    padding: 1rem;
    border: 3px solid #0A0A0A;
    background-color: #0A0A0A;
    box-shadow: rgb(0 0 0 / 65%) 0px 25px 30px -9px,
        rgb(0 0 0 / 75%) 0 15px 10px -9px;
`;

const Label = styled.label`
    margin-bottom: .5em;
    color: rgb(240, 247, 244);
    display: block;
`;

const Input = styled.input`
    padding: .5em;
    border: none;
    border-radius: 2px;
    width: 100%;
    margin-bottom .5em;
`;

const Message = styled.textarea`
    margin-top: .5em;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 150px;
    max-height: 250px;
`;

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3rem;
    height: 100%;
    width: 40%;
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