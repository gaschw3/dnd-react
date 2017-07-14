import React from 'react';
import {Col} from  'react-bootstrap';

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

  formatArmor(item, type) {
    var dex = ""
    if (item.type === "LA")
      dex = " + DEX"
    if (item.type === "MA")
      dex = " + DEX (max 2)"
    return(
      <div className="row item-details">
        <div className="row item-title">
          <div className="col-xs-12"><h2>{item.title}</h2></div>
          <div className="col-xs-12"><em>{type}{item.rarity ? ", "+item.rarity : ""} {item.attunement ? "(requires attunement)" : "" }</em></div>
          <div className="col-xs-6">{item.value ? item.value+", " : "" } {item.weight ? item.weight+" lbs." : "" }</div>
          <div className="col-xs-6"><span className="pull-right">AC {item.ac + dex}</span></div>
        </div>
        <div className="item-features">
          {this.paragraphize(item.text)}
        </div>
      </div>
      )
  }

  formatWeapon(item, type) {
    return(
      <div className="row item-details">
        <div className="row item-title">
          <div className="col-xs-12"><h2>{item.title}</h2></div>
          <div className="col-xs-12"><em>{type}{item.rarity ? ", "+item.rarity : ""} {item.attunement ? "(requires attunement)" : "" }</em></div>
          <div className="col-xs-4">{item.value ? item.value+", " : "" } {item.weight ? item.weight+" lbs." : "" }</div>
          <div className="col-xs-8"><span className="pull-right">{item.dmg1+this.parseDamage(item.dmgType)}{item.dmg2 ? " - versatile ("+item.dmg2+")" : ""}</span></div>
          <div className="col-xs-4">{item.property ? "Props: "+item.property : ""}</div>
          <div className="col-xs-8"><span className="pull-right">{item.range ?"Range: "+item.range : ""}</span></div>
        </div>
        <div className="item-features">
          {this.paragraphize(item.text)}
        </div>
      </div>
      )
  }

  parseDamage(damagetype) {
    if (damagetype === "B") return " bludgeoning"
    if (damagetype === "P") return " piercing"
    if (damagetype === "S") return " slashing"
    if (damagetype === "N") return " necrotic"
    if (damagetype === "R") return " radiant"
    return "";
  }

  formatItem(item) {
    var type = item.type;
    if (type === "A") return this.formatBasic(item, "Ammunition")
    if (type === "AA") return this.formatBasic(item, "Armor Affix")
    if (type === "AT") return this.formatBasic(item, "Artisan Tool")
    if (type === "G") return this.formatBasic(item, "Adventuring Gear")
    if (type === "EXP") return this.formatBasic(item, "Explosive")
    if (type === "GS") return this.formatBasic(item, "Gaming Set")
    if (type === "INS") return this.formatBasic(item, "Instrument")
    if (type === "MNT") return this.formatBasic(item, "Mount")
    if (type === "P") return this.formatBasic(item, "Potion")
    if (type === "RG") return this.formatBasic(item, "Ring")
    if (type === "RD") return this.formatBasic(item, "Rod")
    if (type === "SC") return this.formatBasic(item, "Scroll")
    if (type === "S") return this.formatBasic(item, "Shield")
    if (type === "SCF") return this.formatBasic(item, "Spellcasting Focus")
    if (type === "TAH") return this.formatBasic(item, "Tack and Harness")
    if (type === "T") return this.formatBasic(item, "Tool")
    if (type === "TG") return this.formatBasic(item, "Trade Good")
    if (type === "VEH") return this.formatBasic(item, "Vehicle")
    if (type === "WD") return this.formatBasic(item, "Wand")
    if (type === "W") return this.formatBasic(item, "Wondrous Item")
    if (type === "WA") return this.formatBasic(item, "Weapon Affix")
    if (type === "LA") return this.formatArmor(item, "Light Armor")
    if (type === "MA") return this.formatArmor(item, "Medium Armor")
    if (type === "HA") return this.formatArmor(item, "Heavy Armor")
    if (type === "M,MARW") return this.formatWeapon(item, "Melee Martial Weapon")
    if (type === "M,SIMW") return this.formatWeapon(item, "Melee Simple Weapon")
    if (type === "R,MARW") return this.formatWeapon(item, "Ranged Martial Weapon")
    if (type === "R,SIMW") return this.formatWeapon(item, "Ranged Simple Weapon")
    if (type === "GUN") return this.formatWeapon(item, "Ranged Firearm")
    if (type === "ST,M,SIMW") return this.formatWeapon(item, "Staff, Melee Simple Weapon")
    return "Broken item, report this to Grant"
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