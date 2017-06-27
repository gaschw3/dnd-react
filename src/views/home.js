import React, { Component } from 'react';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../jumbotron.js';

export default class Home extends Component {
    render(){
      return (
        <div>
          <JumbotronComponent image="Main" title="EotCC D&D 5e Reference" description="This is a suite of tools pulled into a React app for use by intrepid adventurers and explorers. May or may not ever actually work." />
          <Grid>
            <Row>
              <Col sm={6}>
                <h4><a href="/#/classes">Classes</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
                <h4><a href="/#/backgrounds">Backgrounds</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
                <h4><a href="/#/races">Races</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
                <h4><a href="/#/feats">Feats</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
              </Col>
              <Col sm={6}>
                <h4><a href="/#/spells">Spells</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
                <h4><a href="/#/items">Items</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
                <h4><a href="/#/beastiary">Beastiary</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
                <h4><a href="/#/rules">Rules</a></h4>
                <p>Blah blah blah, all the stuffs the same</p>
              </Col>
            </Row>
          </Grid>
        </div>
    );
    }
}