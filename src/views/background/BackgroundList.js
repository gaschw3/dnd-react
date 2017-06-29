import React from 'react';
import { Button, ButtonToolbar } from  'react-bootstrap';
import JumbotronComponent from '../../jumbotron.js';

export class BackgroundList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: props.json};
  }

  render() {
    return(
      <ButtonToolbar>
      {
        this.state.json.map( (background) => {
          return (
            <Button 
              bsStyle="primary" 
              onClick={this.props.handleClick.bind(this, background.name, background.description)}>
                {background.name}
            </Button>
          )
        }, this)
      }
      </ButtonToolbar>
    );
  }
}