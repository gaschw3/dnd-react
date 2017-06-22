import React from 'react';
import ReactDOM from 'react-dom';

import {Jumbotron} from  'react-bootstrap';

class JumbotronComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "EotCC D&D 5e Reference",
      description: `
                    This is a suite of tools pulled into a React app for use 
                    by intrepid adventurers and explorers. May or may not ever
                    actually work.
                  `
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

ReactDOM.render(<JumbotronComponent />, document.getElementById('jumbo'));