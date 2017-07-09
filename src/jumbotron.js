import React from 'react';
import { hashHistory } from 'react-router';
import {Glyphicon} from  'react-bootstrap';

export default class JumbotronComponent extends React.Component {
  render() {
    return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="item active">
        <img width="1200" height="300" alt="1200x300" src={"https://rawgit.com/gaschw3/dnd-react/master/src/images/"+this.props.image+".jpg"} />
          <div className="carousel-caption">
          <h1>{this.props.title}</h1>
          <h3 className="hidden-xs">{this.props.description}</h3>
          </div>
        </div>
      </div>
      <a className="carousel-control left" role="button" onClick={()=>hashHistory.goBack()}>
        <Glyphicon glyph="chevron-left" />
        <span className="sr-only">Previous
        </span>
      </a>
    </div>
    );
  }
}

