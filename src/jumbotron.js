import React from 'react';
import {Jumbotron} from  'react-bootstrap';

export default class JumbotronComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description
    };
  }

  render() {
    return (
      <Jumbotron>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </Jumbotron>
    );
  }
}

