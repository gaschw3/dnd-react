import React from 'react';

export class SpellDetails extends React.Component {

  listicate(data){
    return ( 
      <ul>
        {
          data.map(function(line) { 
            return <li>{line}</li> }
            )
        }
      </ul>
    )
  }

  processFeat(data){
    return (
        <p>
          {data.text.description}
          {this.listicate(data.text.benefits)}
        </p>
    )
  }

  render() {
    var currFeat =  this.props.json.find(function(item, index){
      if (item.name === this.props.background)
        return 1;
    }, this);

    if (currFeat) {
      return(
        <div>
          <div className="feat-features">
          <h2 className="feat-title"><strong>{currFeat.title}</strong></h2>
            {this.processFeat(currFeat)}
          </div>
        </div>
      );
    }
    else { return null; }
  }
}