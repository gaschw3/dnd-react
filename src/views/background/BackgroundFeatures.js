import React from 'react';

export class BackgroundFeatures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var i = this.props.index;
    var jp = require('jsonpath');
    var currBackground = this.props.json[i];

    function paragraphize(data){
      return (
          data.map(function(line) { return <p>{line}</p> })
      )
    }

    function getSkillProfs(data){
      if (data)
        return(<p><strong>Skill Proficiencies: </strong>{data}</p>)
    }
    function getToolProfs(data){
      if (data)
        return(<p><strong>Tool Proficiencies: </strong>{data}</p>)
    }

    function getLanguages(data){
      if (data)
        return(<p><strong>Languages: </strong>{data}</p>)
    }

    function getEquipment(data){
      if (data)
        return(<p><strong>Equipment: </strong>{data}</p>)
    }
    function getComplex(data){
      if(data)
        return(<p><strong>{data.name}: </strong>{paragraphize(data.text)}</p>)
    }

    if (i >= 0) {
      return(
        <div>
          <div className="background-features">
          <h4><strong>Background Information</strong></h4>
            {getSkillProfs(currBackground.skillprof)}
            {getToolProfs(currBackground.toolprof)}
            {getLanguages(currBackground.languages)}
            {getEquipment(currBackground.equipment)}
            {getComplex(currBackground.feature)}
            {getComplex(currBackground.specialty)}
          </div>
          <div className={currBackground.trait ? "background-features" : ""}>
          <h4 className={currBackground.trait ? "" : "hidden"}><strong>Background Flavor</strong></h4>
            {getComplex(currBackground.trait)}
            {getComplex(currBackground.bond)}
            {getComplex(currBackground.flaw)}
          </div>
        </div>
      );
    }
    else { return null;}
  }
}