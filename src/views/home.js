import React, { Component } from 'react';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../jumbotron.js';

export default class Home extends Component {
    render(){
      return (
        <div>
          <JumbotronComponent image="Main" title="EotCC D&D 5e Reference" description="This is a suite of tools pulled into a React app for use by intrepid adventurers and explorers. May or may not ever actually work." />
          <Grid bsClass="main">
            <Row>
              <Col sm={1} />
              <Col sm={5}>
                <h4><a href="/dnd-react/#/classes">Classes</a></h4>
                <p>Reference page of 5e classes and their descriptions. You can tell this section got made first because it is the most stupidly designed.</p>
                <h4><a href="/dnd-react/#/backgrounds/acolyte">Backgrounds</a></h4>
                <p>View all official backgrounds in D&D 5e, including those from supplement material.</p>
                <h4><a href="/dnd-react/#/races/aarakocra">Races</a></h4>
                <p>View entries for each of the races in D&D 5e, including subraces and variants.</p>
                <h4><a href="/dnd-react/#/feats/acrobat">Feats</a></h4>
                <p>View a list of the feats in D&D 5e, including those from Unearthed Arcana and supplements.</p>
              </Col>
              <Col sm={5}>
                <h4><a href="/dnd-react/#/spells/abi-dalzims-horrid-wilting">Spells</a></h4>
                <p>Table and details for all spells available in D&D 5e. The list can be easily searched and filtered, and the entries can be shared through the generated URL.</p>
                <h4><a href="/dnd-react/#/conditions/blinded">Conditions</a></h4>
                <p>Quick-reference for all the conditions in D&D 5e.</p>
                <h4><a href="/dnd-react/#/items/undef">Items</a></h4>
                <p>View a 404 page, because this isn't done.</p>
                <h4><a href="/dnd-react/#/beastiary/undef">Beastiary</a></h4>
                <p>View a 404 page, because this isn't done.</p>
                <h4><a href="/dnd-react/#/rules">Rules</a></h4>
                <p>View a 404 page, because this isn't done.</p>
              </Col>
              <Col sm={1} />
            </Row>
          </Grid>
        </div>
    );
    }
}