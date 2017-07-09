import React from 'react';

export class RaceFeatures extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }
  getAbilityScores(data){
    if(data)
      return(<p><strong>Ability Scores: </strong>{data}</p>)
  }
  getSize(data){
    if(data)
      return(<p><strong>Size: </strong>{data}</p>)
  }
  getSpeed(data){
    if(data)
      return(<p><strong>Speed: </strong>{data}</p>)
  }
  getTraits(data){
    if(data)
      return data.map(function(trait) { return <p><strong>{trait.name}: </strong>{trait.text}</p>})
  }

  render() { 
    var currRace = this.props.json.find(function(item, index){
                if (item.name === this.props.race)
                  return 1;
                else return 0;
            }, this);

    if (currRace) {
      return(
        <div>
          <div className="race-features">
          <h2 className="race-title"><strong>{currRace.title}</strong></h2>
            {this.getAbilityScores(currRace.ability)}
            {this.getSize(currRace.size)}
            {this.getSpeed(currRace.speed)}
            {this.getTraits(currRace.trait)}
          </div>
        </div>
      );
    }
    else { return null;}
  }
}