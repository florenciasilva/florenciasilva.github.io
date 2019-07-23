import React from 'react';
import styled from 'styled-components';
import Flare from '../assets/rainbow.png'
import Social from './Social';

const About = () => {
    return (
        <Container>
            <Description>
                <Intro>Florencia Silva</Intro>
            <Wrapper>
                <Subtitle>Front End Developer</Subtitle>
                <Tags>laboratorian  agile  self-taught</Tags>
                <Social />
            </Wrapper>
            </Description>
            <Image src={Flare} alt="Rainbow lens flare" />
        </Container>
        );
};

const Container = styled.section `
    display: flex;
    justify-content: center;
    width: 80vw;
    margin-top: 5vh;
    flex-direction: row;
    align-items: center;
`

const Description = styled.article `
    flex-direction: column;
`

const Intro = styled.h1`
    width: 36vw;
    color: palevioletred;
    font-size: 4rem;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
`

const Wrapper = styled.article `
    width: 30vw;
`

const Subtitle = styled.p`
    width: 35vw;
    color: black;
    font-size: 2.2rem;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
`

const Tags = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    margin-top: -.2rem;
    margin-bottom: .2rem;
`
const Image = styled.img `
    width: 100%;
    height: auto;
    max-width: 30vw;
`
export default About;