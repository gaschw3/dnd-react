import React from 'react';
import { Button, ButtonToolbar } from  'react-bootstrap';

export class ClassArchetypeList extends React.Component {
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