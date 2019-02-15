import React from 'react';
import JumbotronComponent from '../../../jumbotron.js';

import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils, Pattern } from 'react-hexgrid';
import configs from './configurations';

export class Map extends React.Component {
  constructor(props) {
    super(props);
    const config = configs['orientedRectangle'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { 
      recap: "Recap",
      image: "Rules",
      active: "",
      hexagons,
      config
    };
  }

  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };

    return(
      <div>
        <JumbotronComponent title="Recaps" description="Whatever, WIP page." image={this.state.image}/>
        <div>
          <HexGrid width={config.width} height={config.height} viewBox="-5 20 100 100">
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              hexagons.map((hex, i) => (
                <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} className={config.hexType[hex.r + Math.floor(hex.q/2)][hex.q]}>
                  <Text>{config.hexType[hex.r + Math.floor(hex.q/2)][hex.q] == "ocean" ? "" : hex.q + "." + (hex.r + Math.floor(hex.q/2))}</Text>
                </Hexagon>
              ))
            }
            <Pattern id="1" link="" />
          </Layout>
        </HexGrid>
        </div>
      </div>
    );
  }

}