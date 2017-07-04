import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/spellData.json';

import {SpellList} from './SpellList.js';
import {SpellDetails} from './SpellDetails.js';

export class Spell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      spell: "Feat",
      image: "Feat",
      json: json.feat
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
     this.setState({
        spell: name
    });
  }

  render() {
    return(
      <div className="row">
        <JumbotronComponent title="Spells" description="spell.description" image={this.state.image}/>
        <div className="col-sm-4 spell">
          <FeatList handleClick={this.handleClick} json={this.state.json} active={this.props.params.spellName}/>
        </div>
        <div className="col-sm-8 spell">
          <FeatDetails json={this.state.json} spell={this.props.params.spellName} />
        </div>
      </div>
    );
  }

}