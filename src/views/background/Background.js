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
      image: "Background",
      active: "",
      index: undefined,
      json: json.background
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, desc, index, e) {
     this.setState({
        background: name,
        description: desc,
        active: name,
        index: index
    });
  }

  render() {
    return(
      <div className="row">
        <JumbotronComponent title={this.state.background} description={this.state.description} image={this.state.image}/>
        <div className="col-sm-4 background">
          <BackgroundList handleClick={this.handleClick} json={this.state.json} active={this.state.active}/>
        </div>
        <div className="col-sm-8 background">
          <BackgroundFeatures json={this.state.json} index={this.state.index} />
        </div>
      </div>
    );
  }

}