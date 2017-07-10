import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/conditionData.json';

import {ConditionList} from './ConditionList.js';
import {ConditionDetails} from './ConditionDetails.js';

export class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      condition: "Conditions",
      image: "Conditions",
      json: json.condition
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
     this.setState({
        condition: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Conditions" description="Conditions alter a creature’s capabilities in a variety of ways and can arise as a result of a spell, class feature, sttack, or other effect. Most conditions are impairments, but a few can be advantageous." image={this.state.image}/>
        <div className="col-sm-4 background">
          <ConditionList handleClick={this.handleClick} json={this.state.json} active={this.props.params.conditionName}/>
        </div>
        <div className="col-sm-8 background">
          <ConditionDetails json={this.state.json} background={this.props.params.conditionName} />
        </div>
      </div>
    );
  }

}