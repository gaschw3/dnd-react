import React from 'react';
import Scroll from 'react-scroll-to-element';

export class ClassLevels extends React.Component {
  render() {
    var json = this.props.currClass;
    var leveltable = json.leveltable;
    var jp = require('jsonpath');
    var searchString;

    var levels = [], i = -1, len = 20;
    while (++i <= len) levels.push(i);

    var columns = [], j = -1, col = leveltable[0].columns;
    while (++j < col) columns.push(j);

    function getFeatures(level) {
    searchString = "$..features[?(@.level=="+level+" && @.subclass==\"base\")]";
    return (
      jp.query(json, searchString).map( (feature, index) => {
        return (
          <span>
            {index>0?", ":""}
            <Scroll offset={-60} type="id" element={feature.name}>
              <a>{feature.title}</a>
            </Scroll>
          </span>
        );
      })
    ) 
  }

    return (
      <div className="col-sm-7">
        <div className="level-table">
          <table className={"table table-responsive table-striped table-"+this.props.currClass.id}><tbody>
            {
              levels.map( (i) => {
                return (<tr>
                  {
                    columns.map( (j) => {
                      if (i === 0)
                        return(<th>{leveltable[i].data[j]}</th>)
                      else
                        return(<td className={leveltable[i].data[j] === "features" ? "left" : "center"}>{leveltable[i].data[j] === "features" ? getFeatures(i) : leveltable[i].data[j]}</td>)
                    })
                  }
                </tr>)
              })
            }
          </tbody></table>
        </div>
      </div>
    );
  }
}
    