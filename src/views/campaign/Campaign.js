import React, { Component } from 'react';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../../jumbotron.js';

export class Campaign extends Component {
    render(){
      return (
        <div>
          <JumbotronComponent image="Campaign" title="EotCC D&D 5e Reference" description="Test area; new secret home for campaign planning and summaries and whatnot." />
          <Grid bsClass="main">
            <Row>
              <Col sm={1} />
              <Col sm={5}>
                <h4><a href="/dnd-react/#/campaign/characters">Characters</a></h4>
                <p>Not a real link yet.</p>
              </Col>
              <Col sm={5}>
                <h4><a href="/dnd-react/#/campaign/recap/1">Recaps</a></h4>
                <p>Session recaps</p>
                <h4><a href="/dnd-react/#/campaign/info">Info</a></h4>
                <p>Information about people and places the party has been</p>
              </Col>
              <Col sm={1} />
            </Row>
          </Grid>
        </div>
    );
    }
}