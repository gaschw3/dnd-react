import React from 'react';

export class ClassFeatures extends React.Component {
  paragraphize(data){
    return (
        data.map(function(line) { return <p dangerouslySetInnerHTML={{__html: line}}></p> })
    )
  }

  render() {
    var json = this.props.features;
    return (
      <div className="class-features col-lg-12">
          {
            json.map( (feature) => {
              const classes = (feature.subclass === "base" ? " base col-lg-12" : feature.filter ===  "yes" ? " archetype  col-lg-12" : " subclass  col-lg-12");
              return (
                <div id={feature.name} className={" col-lg-12 feature"+classes}>
                <h4>{feature.title}</h4>
                <div className="feature-text">{this.paragraphize(feature.text)}</div>
                </div>
              );
            })
          }
      </div>
    );
  }
}