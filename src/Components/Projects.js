import React from 'react';
import {Card, Col, Row, CardTitle} from 'react-materialize';
import Reactibook from '../assets/reactibook-portfolio.JPG'
import Cipher from '../assets/cipher-portfolio.JPG';
import Seventh from '../assets/seventh-portfolio.JPG';
import Pokedeck from '../assets/pokedeck-portfolio.JPG';

const Projects = () => (
        <Col s={10} m={9} l={9}>
            <Card className="scroll">
                <h3 className="center">Proyectos</h3>
                <Row>
                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image= {Reactibook}></CardTitle>}>
                            <div className="center">
                                <a href="https://github.com/florenciasilva/reactibook" className="title">Reactibook</a>
                                <div>Red Social creada con React, Redux y Firebase.</div>
                            </div>
                    </Card>
                    </Col>

                <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/IC26J8Z.png'></CardTitle>}>
                            <div className="center">
                                <a href="https://github.com/florenciasilva/xoTicTacToe" className="title">XO: Tic Tac Toe</a>
                                <div>Juego Tres en Línea creado con React Native para iOs y Android</div>
                            </div>
                    </Card>
                    </Col>

                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image={Pokedeck}></CardTitle>}>
                            <div className="center">
                            <a href="https://github.com/florenciasilva/talent-fest-grin" className="title">Pokedeck</a>
                            <div>WebApp para creación de decks del juego de cartas PokemonTCG creada con React y Firebase.</div></div>
                    </Card>
                    </Col>

                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image={Seventh}></CardTitle>}>
                            <div className="center">
                            <a href="https://github.com/florenciasilva/seventh" className="title">Seventh</a>
                            <div>[Work In Progress] Juego tipo Unfolding creado con React</div></div>
                    </Card>
                    </Col>

                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image={Cipher}></CardTitle>}>
                            <div className="center">
                                <a href="https://github.com/florenciasilva/cifrado-cesar" className="title">Caesars Cipher</a>
                                <div>Cifrado cesar creado con JavaScript Vanilla</div>
                            </div>
                    </Card>
                    </Col>
                    <Col m={4} l={4}>
                    <Card className='small'
                        header={<CardTitle image='https://i.imgur.com/6tpRnNb.png'></CardTitle>}>
                            <div className="center">
                            <a href="https://github.com/florenciasilva/modulo-npm-markdown-links" className="title">Módulo NPM mdLinks </a>
                            <div>Módulo NPM para validar links en archivos .md</div></div>
                    </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
)

export default Projects