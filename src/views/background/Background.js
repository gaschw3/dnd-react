import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/backgroundData.json';

import {BackgroundList} from './BackgroundList.js';
import {BackgroundFeatures} from './BackgroundFeatures.js';

export class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      background: "Background",
      image: "Background",
      active: "",
      json: json.background
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, desc) {
     this.setState({
        background: name,
        description: desc,
    });
  }

  render() {
    return(
      <div className="row">
        <JumbotronComponent title="Backgrounds" description="Every story has a beginning. Your character’s background reveals where you came from, how you became an adventurer, and your place in the world." image={this.state.image}/>
        <div className="col-sm-4 background">
          <BackgroundList handleClick={this.handleClick} json={this.state.json} active={this.props.params.backgroundName}/>
        </div>
        <div className="col-sm-8 background">
          <BackgroundFeatures json={this.state.json} background={this.props.params.backgroundName} />
        </div>
      </div>
    );
  }

}