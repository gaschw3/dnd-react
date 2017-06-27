import React from 'react';
import {Carousel} from  'react-bootstrap';

export default class JumbotronComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
      image: props.image
    };
  }

  render() {
    return (
    <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://drive.google.com/open?id=0B5XPhXpni0uxR2pOZmRlSERzVzg"/>
      <Carousel.Caption>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    );
  }
}

