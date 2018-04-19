import React from 'react';
import JumbotronComponent from '../../../jumbotron.js';

import json from '../../../data/recapData.json';

import {RecapList} from './RecapList.js';
import {RecapDetails} from './RecapDetails.js';

export class Recap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      recap: "Recap",
      image: "Recaps",
      active: "",
      json: json.recap
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
     this.setState({
        recap: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Recaps" description="Whatever, WIP page." image={this.state.image}/>
        <div className="col-sm-4 background">
          <RecapList handleClick={this.handleClick} json={this.state.json} active={this.props.params.recapNum}/>
        </div>
        <div className="col-sm-8 background">
          <RecapDetails json={this.state.json} recap={this.props.params.recapNum} />
        </div>
      </div>
    );
  }

}