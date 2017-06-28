import React from 'react';
import Scrollchor from 'react-scrollchor';
import { hashHistory } from 'react-router';

import classes from '../../data/classData.json';

export class ClassLevels extends React.Component {
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
    var jp = require('jsonpath');
    var searchString;
    
    var levels = [], i = 1, len = 20;
    while (++i <= len) levels.push(i);

    return (
      <div>
        <div className="level-chart">
            {
              levels.map( (i) => {
                searchString = "$.feature[\?(@.level="+i+"]"
                jp.query(json, searchString).map( (feature) => {
                  return (
                    <p><Scrollchor animate={{offset: -100, duration: 600}} to={feature.name}>{feature.title},</Scrollchor></p>
                  );
                });
              })
            }
        </div>
      </div>
    );
  }
}