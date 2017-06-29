import React from 'react';
import Scrollchor from 'react-scrollchor';

export class ClassLevels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classJson: props.currClass};
  }

  render() {
    var json = this.state.classJson;
    var jp = require('jsonpath');
    var searchString;
    
    var levels = [], i = 0, len = 20;
    while (++i <= len) levels.push(i);

    return (
      <div>
        <div className="level-chart">
            {
              levels.map( (i) => {
                searchString = "$..features[?(@.level=="+i+" && @.subclass==\"base\")]";
                return (
                  <p>{ 
                    jp.query(json, searchString).map( (feature) => {
                      return (
                        <div><Scrollchor animate={{offset: -100, duration: 600}} to={feature.name}>{feature.title}</Scrollchor></div>
                      );
                    })
                  }</p>
                )  
              })
            }
        </div>
      </div>
    );
  }
}