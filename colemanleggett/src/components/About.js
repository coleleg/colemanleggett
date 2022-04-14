import React from 'react'
import styled from 'styled-components';

function About() {
    return (
        <Container>
            <ProfileImg src ="https://lh3.googleusercontent.com/a-/AOh14GhvXI5hbukrQGgBnVmETGqghd1FxTVshDsilLXc5w=s288-p-rw-no" />
            <TextBox>
            <p>
                Duis turpis elit, lobortis id blandit eget, viverra volutpat ligula. Ut vitae quam non elit lobortis sollicitudin at eget nisl. 
                Vivamus in massa sit amet dui tempus sagittis ut in augue. Vestibulum a sapien nisl. Nam vulputate dui a quam rutrum faucibus. 
                Pellentesque egestas mi mollis, laoreet turpis non, congue augue. Nulla nunc eros, sagittis sed nisi non, consectetur condimentum ante. 
                Sed consequat magna ac mi ullamcorper, sed ullamcorper mauris pharetra. Maecenas vitae ligula sed tortor vehicula blandit ut et dui. 
                Phasellus erat justo, rhoncus at mi et, porttitor condimentum sapien. Sed laoreet, augue ac sagittis commodo, nisl neque bibendum velit,
                vitae varius tellus augue eget dolor. Nam mi diam, imperdiet porta aliquam vel, luctus vel enim. Praesent pulvinar neque a turpis viverra, 
                ac pulvinar metus tempus. Quisque finibus justo sed urna accumsan, vitae ornare velit tincidunt. Nulla gravida sollicitudin lectus quis venenatis.
                Pellentesque in tortor nec diam rutrum euismod.
            </p>
            </TextBox>
        </Container>
    )
}

const Container = styled.div`
    color: rgb(240, 247, 244);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProfileImg = styled.img`
    border-radius: 50%;
    padding: 10px 10px;
    `;

const TextBox = styled.div`
    margin-left: 5vw;
    padding: 10px 10px
`;

export default About