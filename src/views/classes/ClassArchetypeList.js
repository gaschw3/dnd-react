import React from 'react';
import { Button, ButtonToolbar } from  'react-bootstrap';

export class ClassArchetypeList extends React.Component {
  render() {
    var json = this.props.currClass;
    var jp = require('jsonpath');
    var searchString = "$..features[?(@.filter==\"yes\")]";

    return (
      <div>
        <div className="archetypes">
        <ButtonToolbar>
            { 
              jp.query(json, searchString).map( (feature) => {
                var active = (feature.name === this.props.currArchetype ? " disabled" : "")
                return (
                  <div><Button bsStyle={"primary" + active} href={"/dnd-react/#/classes/"+json.name.toLowerCase()+"/"+feature.name}>{feature.title}</Button></div>
                );
              }, this)
            }  
        </ButtonToolbar>
        </div>
      </div>
    );
  }
}