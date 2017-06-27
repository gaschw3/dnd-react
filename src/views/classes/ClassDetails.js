import React from 'react';
import { hashHistory } from 'react-router'

import classes from '../../data/classData.json';

export class ClassDetails extends React.Component {
  constructor(props) {
    super(props);
    var classJson;
    for (var i=0; i < classes.class.length; i++) {
      if (classes.class[i].name === props.currClass) {
        classJson = classes.class[i];
      }
    }
    this.state = { classJson: classJson};
  }

  render() {
    var json = this.state.classJson;
    return (
      <div>
        <div className="class-info">
          <h4>Hit Points</h4>
          <p>
            <div><strong>Hit Dice:</strong> 1d{json.hd}</div>
            <div><strong>HP at 1st Level:</strong> {json.hd} + CON</div>
            <div><strong>HP at Higher Levels:</strong> (1d{json.hd} ( or {json.hd/2}) + CON) per {json.name} lever after first</div>
          </p>
          <h4>Proficiencies</h4>
          <p>
            {json.proficiencies.map( (line) => <div dangerouslySetInnerHTML={{__html: line}}></div> )}
          </p>
          <h4>Starting Equipment</h4>
          <p>
            {json.equipment.map( (line) => <div dangerouslySetInnerHTML={{__html: line}}></div> )}
          </p>
        </div>
        <div className="class-features">
            {json.features.map( (feature) => {
                const base = (feature.subclass === "base" ? "base" : "subclass"); 
                return (
                  <div id={feature.name} className={"feature "+base}>
                  <h4>{feature.title}</h4>
                  <p dangerouslySetInnerHTML={{__html: feature.text}}></p>
                  </div>
                );
              }
            )}
        </div>
      </div>
    );
  }
}