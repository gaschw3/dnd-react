import React from 'react';
import {Row, Col} from  'react-bootstrap';

export class SpellDetails extends React.Component {

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
    var currSpell =  this.props.json.find(function(item, index){
      if (item.name === this.props.spell)
        return 1;
      else return 0;
    }, this);

    if (currSpell) {
      return(
        <div>
          <div className="spell-details">
            <div className="spell-title">
              <Row>
                <Col xs={8}>
                  <h2><strong>{currSpell.title}</strong></h2>
                </Col>
                <Col xs={4}>
                  <h3 className="pull-right">{currSpell.source}</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <h4 className="pull-left"><em>{this.formatSpellLvl(currSpell.level, currSpell.school)}</em></h4>
                </Col>
              </Row>
            </div>
            <div className="spell-stats">
              <Row>
                <Col sm={6}><strong>Casting time: </strong>{currSpell.time}</Col>
                <Col sm={6}><strong>Range: </strong>{currSpell.range}</Col>
                <Col sm={6}><strong>Components: </strong>{currSpell.components}</Col>
                <Col sm={6}><strong>Duration: </strong>{currSpell.duration}</Col>
              </Row>
            </div>
            <div className="spell-features">
              <p>{this.paragraphize(currSpell.text)}</p>
              <p><strong>Classes: </strong>{currSpell.classes}</p>
            </div>
          </div>
        </div>
      );
    }
    else { return null; }
  }
}