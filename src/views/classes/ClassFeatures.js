import React from 'react';

export class ClassFeatures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var json = this.props.features;
    return (
      <div className="class-features">
          {
            json.map( (feature) => {
              const base = (feature.subclass === "base" ? "base" : "subclass"); 
              return (
                <div id={feature.name} className={"feature "+base}>
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