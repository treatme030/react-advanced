import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import People from './People';
import Person from './Person';

const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route> 
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/people">
                    <People/>
                </Route>
                <Route path="/person/:id" children={<Person/>}></Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    );
};

export default ReactRouterSetup;