import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/featData.json';

import {FeatList} from './FeatList.js';
import {FeatDetails} from './FeatDetails.js';

export class Feat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      feat: "Feat",
      image: "Feat",
      json: json.feat
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
     this.setState({
        background: name
    });
  }

  render() {
    return(
      <div className="row">
        <JumbotronComponent title="Feats" description="feat.description" image={this.state.image}/>
        <div className="col-sm-4 background">
          <FeatList handleClick={this.handleClick} json={this.state.json} active={this.props.params.featName}/>
        </div>
        <div className="col-sm-8 background">
          <FeatDetails json={this.state.json} background={this.props.params.featName} />
        </div>
      </div>
    );
  }

}