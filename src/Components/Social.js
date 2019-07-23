import React, { Fragment } from 'react';
import styled from 'styled-components';

const Social = () => {
    return (
        <Fragment>
            <a href="https://github.com/florenciasilva" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <Icon className="fab fa-github" />
            </a>
            <a href="https://twitter.com/hensgrej" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <Icon className="fab fa-twitter-square" />
            </a>
            <a href="https://linkedin.com/in/florenciasilvaolivera" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <Icon className="fab fa-linkedin" />
            </a>
        </Fragment>
    );
};

const Icon = styled.i`
    font-size: 3rem;
    margin-top: 2vw;
    color: palevioletred;
    margin: 0 1rem 0 0;

`

export default Social;