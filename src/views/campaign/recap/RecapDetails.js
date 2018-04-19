import React from 'react';

export class RecapDetails extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  render() { 
    var currRecap = this.props.json.find(function(item, index){
                if (item.number === this.props.recap)
                  return 1;
                else return 0;
            }, this);

    if (currRecap) {
      return(
        <div>
          <div className="race-features">
          <h2 className="race-title"><strong>{currRecap.title}</strong></h2>
            {this.paragraphize(currRecap.text)}
          </div>
        </div>
      );
    }
    else { return null;}
  }
}