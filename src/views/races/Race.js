import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/raceData.json';

import {RaceList} from './RaceList.js';
import {RaceFeatures} from './RaceFeatures.js';

export class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      race: "Race",
      image: "Races",
      active: "",
      json: json.race
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
     this.setState({
        race: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Races" description="There are many varieties of exotic folk in the world. Your character’s race not only affects ability scores and racial powers, but also provides cues for building their story." image={this.state.image}/>
        <div className="col-sm-5 background">
          <RaceList handleClick={this.handleClick} json={this.state.json} active={this.props.params.raceId}/>
        </div>
        <div className="col-sm-7 background">
          <RaceFeatures json={this.state.json} race={this.props.params.raceId} />
        </div>
      </div>
    );
  }

}