import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/featData.json';

import {FeatList} from './FeatList.js';
import {FeatDetails} from './FeatDetails.js';

export class Feat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      feat: "Feats",
      image: "Feats",
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
      <div>
        <JumbotronComponent title="Feats" description="As characters grow and advance in levels they can choose to specialize in a certain talent or area of expertise to gain special capabilities. Feats embody training, experience, and abilities beyond those provided by class, race, or background." image={this.state.image}/>
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