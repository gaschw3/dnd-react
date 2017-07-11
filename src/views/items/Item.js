import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import json from '../../data/itemData.json';

import {ItemList} from './ItemList.js';
import {ItemDetails} from './ItemDetails.js';

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: "Items",
      image: "Items",
      json: json.item
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
    window.location="/dnd-react/#/items/"+name;
     this.setState({
        item: name
    });
  }

  render() {
    return(
      <div>
        <JumbotronComponent title="Items" description="Items.description" image={this.state.image}/>
        <div className="item">
          <ItemList handleClick={this.handleClick} json={this.state.json} active={this.props.params.itemName}/>
          <ItemDetails json={this.state.json} item={this.props.params.itemName} />
        </div>
      </div>
    );
  }

}