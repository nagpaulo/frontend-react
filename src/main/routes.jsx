import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Todo from '../view/todo/todo';
import About from '../view/about';

export default props => (
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos"/>
    </Router>
)