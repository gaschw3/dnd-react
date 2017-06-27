import React, { Component } from 'react';
import {Link } from 'react-router';
import { hashHistory } from 'react-router';

import {Grid, Row, Col} from  'react-bootstrap';
import JumbotronComponent from '../../jumbotron.js';

import classes from '../../data/classData.json';

export default class Classes extends Component {
  render(){
    var classList = classes.class.map( element => {
      return(
        <div>
        <h4><Link to={"/classes/"+element.name.toLowerCase()}>{element.name}</Link></h4>
        <p>{element.description}</p>
        </div>
      )
    });


    return (
      <div>
        <button onClick={()=>hashHistory.goBack()}>
          Back
        </button>
        <JumbotronComponent title="D&D 5e Classes" description="Browse available classes. You can also select specific subclasses if you already know what you're looking for. The URL should be usable for bookmarking and sharing." />
        <Grid>
          <Row>
            <Col sm={4}>
              {classList}  
            </Col>
          </Row>
        </Grid>
      </div>
  )};
}