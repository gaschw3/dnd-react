import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {Router, Route } from 'react-router';
import { hashHistory } from 'react-router';
// Import custom components
import Home from './views/home.js'
import ClassList from './views/classes/ClassList.js';
import {Class} from './views/classes/Class.js'
import {Archetype} from './views/classes/Archetype.js'


class NotFound  extends Component {
    render(){
        return (<h1>Looks like you broke it, pard</h1>);
    }
}

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
        <Route path="/" exact component={Home}/>
            <Route path="/classes" component={ClassList}/>
                <Route path="/classes/:className" component={Class}/>
                <Route path="/classes/:className/:classArchetype" component={Archetype}/>
            <Route path="/backgrounds" component={Backgrounds}/>
            <Route path="/races" component={Races}/>
    </Router>,
    document.getElementById('main')
);