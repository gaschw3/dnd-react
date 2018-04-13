import React from 'react';

export class ClassFeatures extends React.Component {
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
                <p dangerouslySetInnerHTML={{__html: feature.text}}></p>
                </div>
              );
            })
          }
      </div>
    );
  }
}