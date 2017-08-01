import React from 'react';
import {Row, Col} from  'react-bootstrap';

export class BeastiaryDetails extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  formatSpellLvl(lvl, school){
    if (lvl === "0")
      return school + " Cantrip";
    if (lvl === "1")
      return lvl + "st level " + school;
    if (lvl === "2")
      return lvl + "nd level " + school;
    if (lvl === "3")
      return lvl + "rd level " + school;
    else
      return lvl + "th level " + school;
  }

  render() {
    var currBeastiary =  this.props.json.find(function(item, index){
      if (item.name === this.props.beastiary)
        return 1;
      else return 0;
    }, this);

    if (currBeastiary) {
      return(
        <div>
          <div className="beastiary-details">
            <div className="beastiary-title">
              <Row>
                <Col xs={8}>
                  <h2><strong>{currBeastiary.title}</strong></h2>
                </Col>
                <Col xs={4}>
                  <h3 className="pull-right">{currBeastiary.source}</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <h4 className="pull-left"><em>{this.formatSpellLvl(currBeastiary.level, currBeastiary.school)}</em></h4>
                </Col>
              </Row>
            </div>
            <div className="beastiary-stats">
              <Row>
                <Col sm={6}><strong>Casting time: </strong>{currBeastiary.time}</Col>
                <Col sm={6}><strong>Range: </strong>{currBeastiary.range}</Col>
                <Col sm={6}><strong>Components: </strong>{currBeastiary.components}</Col>
                <Col sm={6}><strong>Duration: </strong>{currBeastiary.duration}</Col>
              </Row>
            </div>
            <div className="beastiary-features">
              <p>{this.paragraphize(currBeastiary.text)}</p>
              <p><strong>Classes: </strong>{currBeastiary.classes}</p>
            </div>
          </div>
        </div>
      );
    }
    else { return null; }
  }
}