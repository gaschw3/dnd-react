import React from 'react';
import { ListGroup, ListGroupItem } from  'react-bootstrap';
import JumbotronComponent from '../../jumbotron.js';

export class BackgroundList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: props.json};
  }

  render() {
    return(
      <div>
      <ListGroupItem disabled>Name</ListGroupItem>
      <ListGroup className="background-list">
      {
        this.state.json.map( (background) => {
          return (
            <ListGroupItem
              className={this.props.active === background.name ? "active info" : ""}
              onClick={this.props.handleClick.bind(this, background.name, background.description, background.id)}>
                {background.name}
            </ListGroupItem>
          )
        }, this)
      }
      </ListGroup>
      </div>
    );
  }
}