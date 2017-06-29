import React from 'react';

export class BackgroundFeatures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.background}
      </div>
    );
  }
}