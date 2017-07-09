import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class BackgroundList extends React.Component {
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
          placeholder="Filter Backgrounds"
          onChange={this.filterChange}
        />
      </FormGroup>
      <ListGroupItem disabled>Name</ListGroupItem>
      <ListGroup className="background-list">
      {
        this.state.json.map( (background) => {
          if(background.title.toLowerCase().indexOf(this.getFilterText().toLowerCase()) !== -1)
            return (
              <ListGroupItem
                href={"/dnd-react/#/backgrounds/"+background.name}
                className={this.props.active === background.name ? "selected" : ""}
                onClick={this.props.handleClick.bind(this, background.name, background.description)}>
                  {background.title}
              </ListGroupItem>
            )
          else return null;
        }, this)
      }
      </ListGroup>
      </div>
    );
  }
}