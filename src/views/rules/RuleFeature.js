import React from 'react';

export class RuleFeature extends React.Component {
  render() { 
    var currRule = this.props.json.find(function(item, index){
                if (item.id === this.props.rule)
                  return 1;
                else return 0;
            }, this);

    if (currRule) {
      return(
        <div>
          <div className="rule-features">
            <p dangerouslySetInnerHTML={{__html: currRule.htmlcontent}}></p>
          </div>
        </div>
      );
    }
    else { return null;}
  }
}