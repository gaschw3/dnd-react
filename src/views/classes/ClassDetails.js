import React from 'react';

export class ClassDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var json = this.props.currClass;
    return (
      <div className="col-sm-5">
        <div className="class-info">
          <h4>Hit Points</h4>
          <p>
            <div><strong>Hit Dice:</strong> 1d{json.hd}</div>
            <div><strong>HP at 1st Level:</strong> {json.hd} + CON</div>
            <div><strong>HP at Higher Levels:</strong> (1d{json.hd} ({json.hd/2}) + CON) per {json.name} lever after first</div>
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
      </div>
    );
  }
}