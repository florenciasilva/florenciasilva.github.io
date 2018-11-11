import React from 'react';
import {Card, Col, Row, Button} from 'react-materialize';
import Projects from './Projects';
import {Link} from 'react-router-dom';

const Presentation = () => (
    <div>
        <Row>
        <Col s={10} m={3} l={3}>
        <Card className="yellow-card">
            <h6>Hi! My name is:</h6>
            <h2 className='center'>Florencia Silva Olivera</h2>
            <h5>I'm a Front End Developer with knowledge in JS, ReactJS and ReactNative
                with six month experience.
            </h5>
            <p>Laboratorian <span className="bold">|</span> Agile <span className="bold">|</span> Self-Taught</p>
            <Row>
            <Button><a href="https://drive.google.com/file/d/16TrK313KGCVTyV___0vPYC6bYMOmpupo/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download my CV</a></Button>
            </Row>
            <div className="margin-links">
            <Row>
                <a href="https://github.com/florenciasilva" target="_blank" rel="noopener noreferrer" className="black-text links"><i class="fab fa-github-square"></i> github/florenciasilva</a>
            </Row>
            <Row>
                <a href="https://linkedin.com/in/florenciasilvaolivera" target="_blank" rel="noopener noreferrer" className="black-text links"><i class="fab fa-linkedin"></i> linkedin/florenciasilvaolivera</a>
            </Row>
            <Row>
                <a href="mailto:hensgrej@gmail.com" target="_blank" rel="noopener noreferrer" className="black-text links"><i class="fas fa-envelope-square"></i> hensgrej@gmail.com</a>
            </Row>
            <Row className="lang-link-row">
                <Link to='/en-us' className="lang-link">English</Link> <span className="bold">|</span> <Link to="/" className="lang-link">Español</Link>
            </Row>
            </div>
        </Card>

        </Col>
        <Projects />

        </Row>
    </div>
);

export default Presentation