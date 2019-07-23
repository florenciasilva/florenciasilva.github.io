import React from 'react';
import styled from 'styled-components';
import Rainbow from '../assets/rainbow-flare.png';
import Social from './Social';

const Contact = () => {
    return (
        <Footer>
            <Title>let's get in touch</Title>
            <Wrapper>
                <Social />
                <a href="mailto:hensgrej@gmail.com"  aria-label="Send me an email!"><Icon className="fas fa-envelope-square"></Icon></a>
            </Wrapper>
        </Footer>
    );
};

const Footer = styled.footer`
    height: 35vh;
    width: 90vw;
    background-image: url(${Rainbow});
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px 10px #fcfcfa inset;
    transform: scaleX(-1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Monospace', monospace;
    margin-top: 2rem;
    flex-direction: column;
    `;

const Title = styled.h1 `
    transform: scaleX(-1);
    font-weight: 300;
    filter: opacity(80%)
`
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scaleX(-1);
`

const Icon = styled.i`
    font-size: 3rem;
    color: palevioletred;
    margin: 0 1rem 0 0;
    @media only screen and (max-width: 480px) {
        margin: .5rem 1rem 0 0;

    }

`

export default Contact;