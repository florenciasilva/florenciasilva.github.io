import React from 'react';
import styled from 'styled-components';

const Social = () => {
    return (
        <Wrapper>
            <a href="https://github.com/florenciasilva" aria-label="Find me on github" target="_blank" rel="noopener noreferrer">
                <Icon className="fab fa-github" />
            </a>
            <a href="https://twitter.com/hensgrej" aria-label="Follow me on Twitter" target="_blank" rel="noopener noreferrer">
                <Icon className="fab fa-twitter-square" />
            </a>
            <a href="https://linkedin.com/in/florenciasilvaolivera" aria-label="Add me to your Linkedin network" target="_blank" rel="noopener noreferrer">
                <Icon className="fab fa-linkedin" />
            </a>
        </Wrapper>
    );
};

const Icon = styled.i`
    font-size: 3rem;
    margin-top: 2vw;
    color: palevioletred;
    margin: 0 1rem 0 0;
`
const Wrapper = styled.article `
    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: row;
        margin-top: .5rem;
    }
`

export default Social;