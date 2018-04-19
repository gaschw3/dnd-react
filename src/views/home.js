import React, { Component } from 'react';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../jumbotron.js';

export default class Home extends Component {
    render(){
      return (
        <div>
          <JumbotronComponent image="Main" title="EotCC D&D 5e Reference" description="This is a suite of tools pulled into a React app for use by intrepid adventurers and explorers. Looking more and more like it will eventually work." />
          <Grid bsClass="main">
            <Row>
              <Col sm={1} />
              <Col sm={5}>
                <h4><a href="/dnd-react/#/classes">Classes</a></h4>
                <p>Reference page of 5e classes and their descriptions. You can tell this section got made first because it is the most stupidly designed.</p>
                <h4><a href="/dnd-react/#/backgrounds/acolyte">Backgrounds</a></h4>
                <p>View backgrounds for D&D.</p>
                <h4><a href="/dnd-react/#/races/aarakocra">Races</a></h4>
                <p>View entries for the races in D&D, including subraces and variants.</p>
                <h4><a href="/dnd-react/#/feats/acrobat">Feats</a></h4>
                <p>View a list of the feats in my games.</p>
                <h4><a href="/dnd-react/#/campaign">Campaign</a> <span className="label label-wip">new, WIP</span></h4>
                <p>Under construction: View person/place info or session recaps for the current game.</p>
              </Col>
              <Col sm={5}>
                <h4><a href="/dnd-react/#/spells/abi-dalzims-horrid-wilting">Spells</a></h4>
                <p>Searchable table and details for all spells available in my games.</p>
                <h4><a href="/dnd-react/#/conditions/blinded">Conditions</a></h4>
                <p>Quick-reference for all the conditions in D&D 5e.</p>
                <h4><a href="/dnd-react/#/items/undef">Items</a></h4>
                <p>Table and details for most items in 5e.</p>
                <h4><a href="/dnd-react/#/beastiary/undef">Beastiary</a></h4>
                <p>Table and details for monsters in D&D 5e. Shows relevant stats as well as special abilities, actions, and reactions.</p>
                <h4><a href="/dnd-react/#/rules/undef">Rules</a></h4>
                <p>Check a wide variety of rules and flavor text from official and unofficial sources.</p>
              </Col>
              <Col sm={1} />
            </Row>
          </Grid>
        </div>
    );
    }
}