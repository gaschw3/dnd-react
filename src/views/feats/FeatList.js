import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class FeatList extends React.Component {
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
          placeholder="Filter Feats"
          onChange={this.filterChange}
        />
      </FormGroup>
      <ListGroupItem disabled>Name</ListGroupItem>
      <ListGroup className="feat-list">
      {
        this.state.json.map( (feat) => {
          if(feat.title.toLowerCase().indexOf(this.getFilterText().toLowerCase()) === 0)
            return (
              <ListGroupItem
                href={"/dnd-react/#/feats/"+feat.name}
                className={this.props.active === feat.name ? "active" : ""}
                onClick={this.props.handleClick.bind(this, feat.name)}>
                  {feat.title}
              </ListGroupItem>
            )
        }, this)
      }
      </ListGroup>
      </div>
    );
  }
}