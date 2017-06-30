import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar } from  'react-bootstrap';

import Scrollchor from 'react-scrollchor';

export class ClassArchetypeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var json = this.props.currClass;
    var jp = require('jsonpath');
    var searchString = "$..features[?(@.subclass==\"subclass\")]";

    return (
      <div className="col-sm-5">
      <div>
        <div className="archetypes">
        <ButtonToolbar>
            { 
              jp.query(json, searchString).map( (feature) => {
                return (
                  <Button bsStyle="primary" href={"/dnd-react/#/classes/"+json.name.toLowerCase()+"/"+feature.name}>{feature.title}</Button>
                );
              })
            }  
        </ButtonToolbar>
        </div>
      </div>
      </div>
    );
  }
}