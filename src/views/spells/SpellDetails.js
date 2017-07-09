import React from 'react';

export class SpellDetails extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  render() {
    var currSpell =  this.props.json.find(function(item, index){
      if (item.name === this.props.spell)
        return 1;
    }, this);

    if (currSpell) {
      return(
        <div>
          <div className="spell-details">
            <h2 className="spell-title"><strong>{currSpell.title}</strong></h2>
            {currSpell.source}
            <p><em>{currSpell.level}th level {currSpell.school}</em></p>
            <p><strong>Casting time: </strong>{currSpell.time}</p>
            <p><strong>Range: </strong>{currSpell.range}</p>
            <p><strong>Components: </strong>{currSpell.components}</p>
            <p><strong>Duration: </strong>{currSpell.duration}</p>
            <p>{this.paragraphize(currSpell.text)}</p>
            <p><strong>Classes: </strong>{currSpell.classes}</p>
          </div>
        </div>
      );
    }
    else { return null; }
  }
}