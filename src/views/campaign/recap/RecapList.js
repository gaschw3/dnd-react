import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class RecapList extends React.Component {
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
          placeholder="Filter Recaps"
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
        this.state.json.map( (recap) => {
          if(recap.title.toLowerCase().indexOf(this.getFilterText().toLowerCase()) !== -1)
            return (
              <ListGroupItem
                href={"/dnd-react/#/campaign/recap/"+recap.number}
                className={this.props.active === recap.number ? "selected" : ""}
                onClick={this.props.handleClick.bind(this, recap.number)}>
                  <div className="row">
                    <div className="col-sm-7">{recap.title}</div>
                    <div className="col-sm-5 ability-scores">{recap.date}</div>
                  </div>
              </ListGroupItem>
            )
          else return "";
        }, this)
      }
      </ListGroup>
      </div>
    );
  }
}