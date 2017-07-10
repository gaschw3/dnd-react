import React, { Component } from 'react';
import { Link } from 'react-router';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../../jumbotron.js';

import classes from '../../data/classData.json';

export default class Classes extends Component {
  render(){
    var classList = classes.class.map( element => {
      return(
        <div className="col-sm-4 class-tile">
        <h4><Link to={"/classes/"+element.name.toLowerCase()}>{element.name}</Link></h4>
        <p>{element.description}</p>
        </div>
      )
    });


    return (
      <div>
        <JumbotronComponent title="D&D 5e Classes" description="Browse available classes. You can also dig down to specific subclasses if you know what you're looking for. The URL should be usable for bookmarking and sharing." image="Classes"/>
        <Grid bsClass="main">
          <Row>
            <Col>
              {classList}  
            </Col>
          </Row>
        </Grid>
      </div>
  )};
}