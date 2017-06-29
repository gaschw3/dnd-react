import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/backgroundData.json';

import {BackgroundList} from './BackgroundList.js';
import {BackgroundFeatures} from './BackgroundFeatures.js';

export class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      background: "Backgrounds",
      description: "Every story has a beginning. Your character’s background reveals where you came from, how you became an adventurer, and your place in the world.",
      image: "Bard",
      json: json.background
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, desc, e) {
     this.setState({
        background: name,
        description: desc
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title={this.state.background} description={this.state.description} image={this.state.image}/>
        <BackgroundList handleClick={this.handleClick} json={this.state.json} />
        <BackgroundFeatures json={this.state.json} background={this.state.background} />
      </div>
    );
  }

}