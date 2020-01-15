import React, { useState } from 'react';
import styled from 'styled-components';
import Flare from '../assets/rainbow.png'
import Social from './Social';

const About = () => {
    const [ scrolled, setScroll ] = useState(0)
    const scrollDown = () => {
        window.scroll({
            top: 1000,
            behavior: 'smooth'
          });
          setScroll(1);
    }
    console.log(window.scroll())
    return (
        <>
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
        <FlexWrapper>
            <Chevron onClick={scrollDown}><i className="fas fa-chevron-down"></i></Chevron>
        </FlexWrapper>
        </>
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
    @media only screen and (max-width: 480px) {
        font-size: 3rem;
    }
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
    @media only screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

const Tags = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    margin-top: -.2rem;
    margin-bottom: .2rem;
    @media only screen and (max-width: 480px) {
        font-size: 1rem;
    }
`
const Image = styled.img `
    width: 100%;
    height: auto;
    max-width: 30vw;
`

const Chevron = styled.button`
    font-size: 3rem;
    margin-top: 2vw;
    color: palevioletred;
    margin: 0 1rem 0 0;
    border: none;
    background: transparent;

`
const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default About;