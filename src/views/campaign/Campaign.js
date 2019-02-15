import React, { Component } from 'react';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../../jumbotron.js';

export class Campaign extends Component {
    render(){
      return (
        <div>
          <JumbotronComponent image="Campaign" title="The Once and Future Queen" description="Pfennig has always been blighted by a connection with the Shadowfell. Zombies rise from graves, spirits return to haunt the living, and cursed creatures raid civilized lands. Rumors abound that Gods have abandoned the country and oblivion nears. Pfennig needs heros." />
          <Grid bsClass="main">
            <Row>
              <Col sm={1} />
              <Col sm={5}>
                <h4><a href="/dnd-react/#/campaign/characters">Characters</a> <span className="label label-broke">broken</span></h4>
                <p>Not a working link yet.</p>
                <h4><a href="/dnd-react/#/campaign/">Placeholder</a> <span className="label label-broke">broken</span></h4>
                <p>Not even a working title, not to mention link.</p>
              </Col>
              <Col sm={5}>
                <h4><a href="/dnd-react/#/campaign/recap/3">Recaps</a></h4>
                <p>Session recaps. They vary in length depending on how much I felt like writing after we finished for the night.</p>
                <h4><a href="/dnd-react/#/campaign/info">Info</a> <span className="align-top label label-broke">broken</span></h4>
                <p>Also doesn't work</p>
              </Col>
              <Col sm={1} />
            </Row>
          </Grid>
        </div>
    );
    }
}