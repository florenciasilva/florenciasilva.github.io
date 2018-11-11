import React from 'react';
import {Card, Col, Row, CardTitle} from 'react-materialize';

const Projects = () => (
        <Col s={10} m={9} l={9}>
            <Card className="scroll">
                <h3 className="center">Projects</h3>
                <Row>
                <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/IC26J8Z.png'></CardTitle>}>
                            <div className="center">
                            <a href="https://github.com/florenciasilva/cdmx-2018-06-bc-core-am-tic-tac-toe-App-Native" className="title">XO: Tic Tac Toe</a>
                            <div>[Work in Progress] Tic Tac Toe Game made with React Native for iOs and Android</div></div>
                    </Card>
                    </Col>

                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/Xd66I08.png'></CardTitle>}>
                            <div className="center">
                            <a href="#" className="title">Calm.ly Social Network</a>
                            <div>[Hosting in Progress] Social Network made with React</div></div>
                    </Card>
                    </Col>

                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/frwezZP.png'></CardTitle>}>
                            <div className="center">
                            <a href="https://hackathon-here-f1d23.firebaseapp.com/" className="title">Sigue Bus</a>
                            <div>Integral WebApp for tracking and managing of school transportation.</div></div>
                    </Card>
                    </Col>

                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/k29Zwnq.png'></CardTitle>}>
                            <div className="center">
                            <a href="https://florenciasilva.github.io/lab-car-boilerplate/src/index.html" className="title">LabCar</a>
                            <div>UI for fictional taxi company.</div></div>
                    </Card>
                    </Col>
                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/TDC9wR6.png'></CardTitle>}>
                            <div className="center">
                            <a href="https://florenciasilva.github.io/data-dashboard-laboratoria/src/" className="title">Data Dashboard</a>
                            <div>Data Dashboard for Laboratoria's Training Managers.</div></div>
                    </Card>
                    </Col>
                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/6tpRnNb.png'></CardTitle>}>
                            <div className="center">
                            <a href="https://github.com/florenciasilva/modulo-npm-markdown-links" className="title">NPM Module mdLinks </a>
                            <div>NPM Module for validating URLs in .md archives.</div></div>
                    </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
)

export default Projects