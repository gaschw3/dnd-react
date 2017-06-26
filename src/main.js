import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {Router, Route } from 'react-router';
import { hashHistory } from 'react-router';
// Import custom components
import Home from './views/home.js'
import Classes from './views/classes.js';

class Backgrounds extends Component {
    render(){
        return (<h1>Backgrounds page</h1>);
    }
}

class Races extends Component {
    render(){
        return (<h1>Races page</h1>);
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/classes" component={Classes}/>
        <Route path="/backgrounds" component={Backgrounds}/>
        <Route path="/races" component={Races}/>
    </Router>,
    document.getElementById('main')
);