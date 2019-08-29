import React, {PureComponent, Fragment} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Home from './containers/Home/Home';
import About from './containers/About/About';
import './App.scss';
class App extends PureComponent {
    render() {
        return (
            <div>
                <Helmet>
                    <title>My Title</title>
                </Helmet>
                <Switch>
                    <Route
                    exact
                    path="/"
                    render={props => <Home />}/>
                    <Route path="/about" component={About} />
                    <Route component={Home} />
                </Switch>           
            </div>
        );
    }
}

export default App;