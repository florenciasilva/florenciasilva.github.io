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
      <SkipNavLink />
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
`
export default App;
