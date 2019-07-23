import React from 'react';
import styled from 'styled-components';
import ProjectData from '../projects.json';
import images from '../assets';

const Projects = () => {
    return ProjectData.projects.map((project, i) => {
        return (
            <Container key={i}>
                    <Title>{project.title}</Title>
                    <Image src={images[project.thumbnail]} className="project-img" alt={project.title}/>
                    <Date>{project.date}</Date>
                    <Tags>{project.tags}</Tags>
                    <Wrapper>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    </Wrapper>
            </Container>
        );
    });
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin: 2% 2% 0 0
    width: 30vw;
    font-family: 'Roboto Mono', monospace;
`
const Title = styled.h1`
    margin-left: -2%;
`
const Image = styled.img`
    height: 35vh;
    object-fit: cover;
`

const Date = styled.time`
    display: block;
`

const Tags = styled.p`
    width: 30vw;
    text-align: center;
`

const Wrapper = styled.article`
& a {
    font-size: 1.2rem;
    text-decoration: none;
    margin-left: 1rem;
    text-decoration: underline;
    color: black;
    }
    `

export default Projects;