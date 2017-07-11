import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class ConditionList extends React.Component {
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
          placeholder="Filter Conditions"
          onChange={this.filterChange}
        />
      </FormGroup>
      <ListGroupItem disabled>Name</ListGroupItem>
      <ListGroup className="condition-list">
      {
        this.state.json.map( (condition) => {
          if(condition.title.toLowerCase().indexOf(this.getFilterText().toLowerCase()) !== -1)
            return (
              <ListGroupItem
                href={"/dnd-react/#/conditions/"+condition.name}
                className={this.props.active === condition.name ? "selected" : ""}
                onClick={this.props.handleClick.bind(this, condition.name)}>
                  {condition.title}
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