import React from 'react';
import {Row, Col} from  'react-bootstrap';

export class ItemDetails extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  formatBasic(item, type) {
    return(
      <div className="item-details">
        <div className="item-title">
          <h2>{item.title}</h2>
          <Col><em>{type}{item.rarity ? ", "+item.rarity : ""} {item.attunement ? "(requires attunement)" : "" }</em></Col>
          <Col>{item.value ? item.value+", " : "" } {item.weight ? item.weight+" lbs." : "" }</Col>
        </div>
        <div className="item-features">
          {this.paragraphize(item.text)}
        </div>
      </div>
      )
  }

  parsedamagetype(damagetype) {
    if (damagetype === "B") return "bludgeoning"
    if (damagetype === "P") return "piercing"
    if (damagetype === "S") return "slashing"
    if (damagetype === "N") return "necrotic"
    if (damagetype === "R") return "radiant"
    return false;
  }

  parseproperty(property) {
    if (property === "A") return "ammunition"
    if (property === "LD") return "loading"
    if (property === "L") return "light"
    if (property === "F") return "finesse"
    if (property === "T") return "thrown"
    if (property === "H") return "heavy"
    if (property === "R") return "reach"
    if (property === "2H") return "two-handed"
    if (property === "V") return "versatile"
    if (property === "S") return "special"
    if (property === "RLD") return "reload"
    if (property === "BF") return "burst fire"
    return "n/a"
  }

  formatItem(item) {
    var type = item.type;
    if (type === "A") return this.formatBasic(item, "Ammunition")
    if (type === "AT") return this.formatBasic(item, "Artisan Tool")
    if (type === "G") return this.formatBasic(item, "Adventuring Gear")
    if (type === "EXP") return this.formatBasic(item, "Explosive")
    if (type === "GS") return this.formatBasic(item, "Gaming Set")
    if (type === "INS") return this.formatBasic(item, "Instrument")
    if (type === "MNT") return this.formatBasic(item, "Mount")
    if (type === "P") return this.formatBasic(item, "Potion")
    if (type === "RG") return this.formatBasic(item, "Ring")
    if (type === "SC") return this.formatBasic(item, "Scroll")
    if (type === "S") return this.formatBasic(item, "Shield")
    if (type === "SCF") return this.formatBasic(item, "Spellcasting Focus")
    if (type === "TAH") return this.formatBasic(item, "Tack and Harness")
    if (type === "T") return this.formatBasic(item, "Tool")
    if (type === "TG") return this.formatBasic(item, "Trade Good")
    if (type === "VEH") return this.formatBasic(item, "Vehicle")
    if (type === "WD") return this.formatBasic(item, "Wand")
    if (type === "W") return this.formatBasic(item, "Wondrous Item")
    if (type === "GUN") return "Firearm"
    if (type === "HA") return "Heavy Armor"
    if (type === "LA") return "Light Armor"
    if (type === "MARW") return "Martial Weapon"
    if (type === "MA") return "Medium Armor"
    if (type === "M") return "Melee Weapon"
    if (type === "R") return "Ranged Weapon"
    if (type === "RD") return "Rod"
    if (type === "SIMW") return "Simple Weapon"
    if (type === "ST") return "Staff"
    return "n/a"
  }

  render() {
    var currItem =  this.props.json.find(function(item, index){
      if (item.name === this.props.item)
        return 1;
      else return 0;
    }, this);

    if (currItem) {
      return(
        <Col sm={6}>
          {this.formatItem(currItem)}
        </Col>
      );
    }
    else { return null; }
  }
}