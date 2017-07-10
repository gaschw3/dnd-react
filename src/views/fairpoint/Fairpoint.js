import React from 'react';

import json from '../../data/featData.json';

export class Fairpoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      area: this.props.params.area,
      location: this.props.params.location,
      image: this.props.params.area,
      json: json.feat
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
     this.setState({
        background: name
    });
  }

  render() {
    return(
      <div>
      <map name="Map" id="Map">
        <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun"/>
        <area alt="" title="" href="rusty-dragon" shape="poly" coords="1098,212,1075,290,1170,317,1183,194" />
        <area alt="" title="" href="cathedral" shape="poly" coords="1098,509,1053,569,1084,650,1138,684,1201,708,1336,620,1326,543,1245,495,1146,497" />
        <area alt="" title="" href="#" shape="poly" coords="480,489,397,644,289,659,247,639,217,554,238,488,375,459" />
        <area alt="" title="" href="#" shape="poly" coords="336,1815,319,1751,406,1749,351,1664,274,1682,252,1730,264,1815" />
        <area alt="" title="" href="#" shape="poly" coords="291,1905,372,1995,312,2022,235,1950" />
        <area alt="" title="" href="#" shape="poly" coords="567,2075,577,2004,715,2060,699,2082" />
        <area alt="" title="" href="#" shape="poly" coords="417,2220,321,2129,277,2144,315,2223" />
        <area alt="" title="" href="#" shape="poly" coords="720,1325,723,1163,792,1169,837,1205,843,1278,805,1323" />
        <area alt="" title="" href="#" shape="poly" coords="843,1098,924,998,1036,1076,964,1170" />
        <area alt="" title="" href="#" shape="poly" coords="741,888,711,833,730,783,838,810,835,866" />
        <area alt="" title="" href="#" shape="poly" coords="630,735,688,747,690,876,574,885,573,767" />
        <area alt="" title="" href="#" shape="poly" coords="514,1184,583,1080,594,963,532,942,432,1136,445,1181" />
        <area alt="" title="" href="#" shape="poly" coords="1080,1464,1083,1400,1176,1398,1302,1452,1221,1532" />
        <area alt="" title="" href="#" shape="poly" coords="1288,1568,1357,1448,1408,1470,1365,1593,1312,1604" />
        <area alt="" title="" href="#" shape="poly" coords="1363,867,1351,791,1420,789,1437,842" />
      </map>
      <img src={"https://rawgit.com/gaschw3/dnd-react/master/src/images/"+this.props.params.area+".png"} alt="" usemap="Map" />
      </div>
    );
  }

}