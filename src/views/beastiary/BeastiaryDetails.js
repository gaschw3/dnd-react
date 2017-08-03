import React from 'react';

export class BeastiaryDetails extends React.Component {

  paragraphize(data){
    return (
        data.map(function(line) { return <p>{line}</p> })
    )
  }

  formatBeastSize(size){
    if (size === "S")
      return "Small";
    if (size === "M")
      return "Medium";
    if (size === "L")
      return "Large";
    if (size === "H")
      return "Huge";
    else
      return "Other";
  }

  printIfExists(header, data){
    if (data)
      return(
        <div className="col-sm-6">
          <strong>{header}</strong> {data}
        </div>
      )
    else
      return "";
  }

  getActions(header, data){
    if (data)
      return(
        <div className="beastiary-title">
          <h4>{header}</h4>
          {
            data.map(function(action) { 
              return (
                <p><strong>{action.name}</strong>{this.paragraphize(action.text)}</p>
              )
            }, this)
          }                
        </div>
      )
    else
      return "";
  }

  getStatMod(stat){
    var sign = "+"
    var mod = Math.floor((parseInt(stat, 10) - 10)/2);
    (mod >= 0) ? sign = "+" : sign = "";
    return sign+mod;
  }

  render() {
    var currBeastiary =  this.props.json.find(function(item, index){
      if (item.name === this.props.beastiary)
        return 1;
      else return 0;
    }, this);

    if (currBeastiary) {
      return(
        <div className="col-1 beastiary-detail">
          <div>
            <div className="beastiary-details">
              <div className="beastiary-title">
                <div className="row">
                  <div className="col-xs-8">
                    <h2><strong>{currBeastiary.name}</strong></h2>
                  </div>
                  <div className="col-xs-4">
                    <h3 className="pull-right">{currBeastiary.source}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12"><h4 className="pull-left"><em>{this.formatBeastSize(currBeastiary.size)} {currBeastiary.type}</em></h4></div>
                  <div className="col-xs-12"><h4><em>{currBeastiary.alignment}</em></h4></div>
                </div>
              </div>
              <div className="beastiary-title">
                <div className="row">
                  <div className="col-sm-6">
                    <strong>AC</strong> {currBeastiary.ac}
                  </div>
                  <div className="col-sm-6">
                    <strong>HP</strong> {currBeastiary.hp}
                  </div>
                  <div className="col-sm-12">
                    <strong>Spd</strong> {currBeastiary.speed}
                  </div>
                </div>
              </div>
              <div className="beastiary-title">
                <div className="row">
                  <div className="col-xs-2 text-center">
                    <strong>STR</strong>
                  </div>
                  <div className="col-xs-2 text-center">
                    <strong>DEX</strong>
                  </div>
                  <div className="col-xs-2 text-center">
                    <strong>CON</strong>
                  </div>
                  <div className="col-xs-2 text-center">
                    <strong>INT</strong>
                  </div>
                  <div className="col-xs-2 text-center">
                    <strong>WIS</strong>
                  </div>
                  <div className="col-xs-2 text-center">
                    <strong>CHA</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-2 text-center">
                    {currBeastiary.str} ({this.getStatMod(currBeastiary.str)})
                  </div>
                  <div className="col-xs-2 text-center">
                    {currBeastiary.dex} ({this.getStatMod(currBeastiary.dex)})
                  </div>
                  <div className="col-xs-2 text-center">
                    {currBeastiary.con} ({this.getStatMod(currBeastiary.con)})
                  </div>
                  <div className="col-xs-2 text-center">
                    {currBeastiary.int} ({this.getStatMod(currBeastiary.int)})
                  </div>
                  <div className="col-xs-2 text-center">
                    {currBeastiary.wis} ({this.getStatMod(currBeastiary.wis)})
                  </div>
                  <div className="col-xs-2 text-center">
                    {currBeastiary.cha} ({this.getStatMod(currBeastiary.cha)})
                  </div>
                </div>
              </div>
              <div className="beastiary-title">
                <div className="row">
                  {this.printIfExists("Skills:", currBeastiary.skills)}
                  {this.printIfExists("Saves: ", currBeastiary.saves)}
                  {this.printIfExists("Senses: ", currBeastiary.senses)}
                  {this.printIfExists("Languages: ", currBeastiary.languages)}
                  {this.printIfExists("Immune: ", currBeastiary.immune)}
                  {this.printIfExists("Vuln: ", currBeastiary.vulnerable)}
                  {this.printIfExists("Resist: ",currBeastiary.resist)}
                  {this.printIfExists("Cond Immune: ",currBeastiary.condiImmune)}
                  {this.printIfExists("CR: ",currBeastiary.cr)}
                </div>
              </div>
              { this.getActions("Special Abilities", currBeastiary.trait) }
              { this.getActions("Actions", currBeastiary.action) }
              { this.getActions("Reactions", currBeastiary.reaction) }
              { this.getActions("Legendary Actions", currBeastiary.legendary) }
            </div>
          </div>
        </div>
      );
    }
    else { return null; }
  }
}