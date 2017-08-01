import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/beastiaryData.json';

import {BeastiaryList} from './BeastiaryList.js';
import {BeastiaryDetails} from './BeastiaryDetails.js';

export class Beastiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      beastiary: "Beastiary",
      image: "Beastiary",
      json: json.beastiary
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
    window.location="/dnd-react/#/beastiary/"+name;
     this.setState({
        beastiary: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Beastiary" description="The world is teeming with monsters. This is a list of them or whatever." image={this.state.image}/>
        <div className="beastiary">
          <div className="col-1">
            <BeastiaryList handleClick={this.handleClick} json={this.state.json} active={this.props.params.beastiaryName}/>
          </div>
          <div className="col-1 beastiary-detail">
            <BeastiaryDetails json={this.state.json} beastiary={this.props.params.beastiaryName} />
          </div>
        </div>
      </div>
    );
  }

}