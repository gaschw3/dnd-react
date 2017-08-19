import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/rulesData.json';

import {RuleList} from './RuleList.js';
import {RuleFeature} from './RuleFeature.js';

export class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      rule: "Rule",
      image: "Rules",
      active: "",
      json: json.rules
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
     this.setState({
        rule: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Rules" description="There are lots of rules, these are most of them." image={this.state.image}/>
        <div className="col-sm-5 background">
          <RuleList handleClick={this.handleClick} json={this.state.json} active={this.props.params.ruleName}/>
        </div>
        <div className="col-sm-7 background">
          <RuleFeature json={this.state.json} rule={this.props.params.ruleName} />
        </div>
      </div>
    );
  }

}