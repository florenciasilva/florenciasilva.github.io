import React from 'react';
import styled from 'styled-components';
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

const App = () => {
  return (
    <main>
      <SkipNavLink tabIndex="0"/>
        <About />
      <SkipNavContent />
      <Wrapper>
        <Projects />
      </Wrapper>
      <Contact />
    </main>
  );
}

const Wrapper = styled.section`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
export default App;
