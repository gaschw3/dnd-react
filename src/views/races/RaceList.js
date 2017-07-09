import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class RaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      json: props.json,
      filterText: ""
    };

    this.filterChange = this.filterChange.bind(this);
  }

  getFilterText() {
    return this.state.filterText
  }

  filterChange(e) {
    this.setState({ filterText: e.target.value });
  }


  render() {
    return(
      <div>
      <FormGroup
        controlId="formBasicText">
        <FormControl
          type="text"
          value={this.state.filterText}
          placeholder="Filter Races"
          onChange={this.filterChange}
        />
      </FormGroup>
      <ListGroupItem disabled>
        <div className="row">
          <div className="col-sm-7">Name</div>
          <div className="col-sm-5">Ability Scores</div>
        </div>
      </ListGroupItem>
      <ListGroup className="race-list">
      {
        this.state.json.map( (race) => {
          if(race.title.toLowerCase().indexOf(this.getFilterText().toLowerCase()) == 0)
            return (
              <ListGroupItem
                href={"/dnd-react/#/races/"+race.name}
                className={this.props.active === race.name ? "selected" : ""}
                onClick={this.props.handleClick.bind(this, race.name)}>
                  <div className="row">
                    <div className="col-sm-7">{race.title}</div>
                    <div className="col-sm-5 ability-scores">{race.ability.toUpperCase()}</div>
                  </div>
              </ListGroupItem>
            )
          }, this)
      }
      </ListGroup>
      </div>
    );
  }
}