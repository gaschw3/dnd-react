import React from 'react';
import { Link } from 'react-router';

import Scrollchor from 'react-scrollchor';

export class ClassArchetypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classJson: props.currClass};
  }

  render() {
    var json = this.state.classJson;
    var jp = require('jsonpath');
    var searchString = "$..features[?(@.subclass==\"subclass\")]";

    return (
      <div>
        <div className="archetypes">
            { 
              jp.query(json, searchString).map( (feature) => {
                return (
                  <button ><Link to={"/classes/"+json.name.toLowerCase()+"/"+feature.name}>{feature.title}</Link></button>
                );
              })
            }  
        </div>
      </div>
    );
  }
}