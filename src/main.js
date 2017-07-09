import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {Router, Route } from 'react-router';
import { hashHistory } from 'react-router';
// Import custom components
import Home from './views/home.js'
import ClassList from './views/classes/ClassList.js';
import {Class} from './views/classes/Class.js';
import {Archetype} from './views/classes/Archetype.js';
import {Background} from './views/background/Background.js';
import {Feat} from './views/feats/Feat.js';
import {Spell} from './views/spells/Spell.js';
import {Race} from './views/races/Race.js';


class NotFound extends Component {
    render(){
        return (<h1>You have found a page that doesn't exist or isn't complete, try some other link.</h1>);
    }
}

export default class Main extends React.Component {
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" exact component={Home}/>
                    <Route path="/classes" component={ClassList}/>
                        <Route path="/classes/:className" component={Class}/>
                        <Route path="/classes/:className/:classArchetype" component={Archetype}/>
                    <Route path="/backgrounds/:backgroundName" component={Background}/>
                    <Route path="/feats/:featName" component={Feat}/>
                    <Route path="/spells/:spellName" component={Spell}/>
                    <Route path="/races/:raceId" component={Race}/>
                    <Route path="*" component={NotFound}/>
            </Router>
        )
    }
}