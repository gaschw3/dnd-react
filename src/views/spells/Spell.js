import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/spellData.json';

import {SpellList} from './SpellList.js';
import {SpellDetails} from './SpellDetails.js';

export class Spell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      spell: "Spells",
      image: "Spells",
      json: json.spell
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
    window.location="/dnd-react/#/spells/"+name;
     this.setState({
        spell: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Spells" description="Some characters are able to shape and direct the invisible weave of magic suffusing the world. Created spells can be tools, weapons, and wards - they can deal damage or undo it, impose conditions, alter minds, and even restore life to the dead." image={this.state.image}/>
        <div className="spell">
          <div className="col-1">
            <SpellList handleClick={this.handleClick} json={this.state.json} active={this.props.params.spellName}/>
          </div>
          <div className="col-1 spell-detail">
            <SpellDetails json={this.state.json} spell={this.props.params.spellName} />
          </div>
        </div>
      </div>
    );
  }

}