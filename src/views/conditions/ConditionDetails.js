import React from 'react';

export class ConditionDetails extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  render() {
    var currCondition =  this.props.json.find(function(item, index){
      if (item.name === this.props.background)
        return 1;
      else return 0;
    }, this);

    if (currCondition) {
      return(
        <div>
          <div className="feat-features">
          <h2 className="feat-title"><strong>{currCondition.title}</strong></h2>
            {this.paragraphize(currCondition.text)}
          </div>
        </div>
      );
    }
    else return null;
  }
}