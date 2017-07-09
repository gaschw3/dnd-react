import React from 'react';

export class BackgroundFeatures extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  processTrait(data){
    return (
        <p>
          <strong>{data.name}: </strong>{this.paragraphize(data.text)}
        </p>
    )
  }
  
  processObject(data){
    return(
      data.map(function(trait) { return this.processTrait(trait) }, this)
    )
  }

  render() {
    var currBackground =  this.props.json.find(function(item, index){
      if (item.name === this.props.background)
        return 1;
      else return 0;
    }, this);

    if (currBackground) {
      return(
        <div>
          <div className="background-features">
          <h2 className="background-title"><strong>{currBackground.title}</strong></h2>
            {this.processObject(currBackground.trait)}
          </div>
        </div>
      );
    }
    else { return null; }
  }
}