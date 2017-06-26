import React, { Component } from 'react';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../jumbotron.js';

import classes from '../data/classData.json';

export default class Classes extends Component {
  render(){
    var test = classes.class.map( element => {
      return(
        <div>
        <h4><a href={"#/classes/"+element.name.toLowerCase()}>{element.name}</a></h4>
        <p>{element.description}</p>
        </div>
      )});
    return (
      <div>
        <JumbotronComponent title="D&D 5e Classes" description="Browse available classes. You can also filter for specific subclasses for easier reference, and share produced URL for quick-access." />
        <Grid>
          <Row>
            <Col sm={6}>
              {test}
            </Col>
          </Row>
        </Grid>
      </div>
  )};
}