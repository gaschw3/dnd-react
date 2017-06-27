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
    <Carousel Indicators="false" controls="false" slide="false" nextIcon="" prevIcon="">
      <Carousel.Item>
        <img width={900} height={300} alt="900x300" src="https://rawgit.com/gaschw3/dnd-react/master/src/images/Barbarian.jpg"/>
        <Carousel.Caption>
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

