import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Presentacion from './Components/Presentation';
import Presentation from './Components/English/Presentation';

const PortafolioEs = () => (
    <div>
        <Presentacion />
    </div>
)

const PortfolioEn = () => (
    <div>
        <Presentation />
    </div>
)

const Routes = () => (
    <Router basename={process.env.PUBLIC_URL}>      
            <Switch>
                <Route exact strict path="/" component= {PortafolioEs} />                
                <Route exact strict path="/en-us" component= {PortfolioEn} />
            </Switch>
    </Router>   
);

export default Routes