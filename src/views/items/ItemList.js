import React from 'react';
import { Table, Th, Tr, Td, Thead } from 'reactable'
import { FormGroup, FormControl, Col, Row } from  'react-bootstrap';

export class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      json: props.json,
      nameFilterText: "",
      rarityFilterText: "",
      typeFilterText: "",
      classFilterText: ""
    };

    this.nameFilterChange = this.nameFilterChange.bind(this);
    this.typeFilterChange = this.typeFilterChange.bind(this);
    this.rarityFilterChange = this.rarityFilterChange.bind(this);
  }
  getNameFilterText() {
    return this.state.nameFilterText
  }
  nameFilterChange(e) {
    this.setState({ nameFilterText: e.target.value });
  }

  getTypeFilterText() {
    return this.state.typeFilterText
  }
  typeFilterChange(e) {
    this.setState({ typeFilterText: e.target.value });
  }

  getRarityFilterText() {
    return this.state.rarityFilterText
  }
  rarityFilterChange(e) {
    this.setState({ rarityFilterText: e.target.value });
  }

  filtered(item) {
    var rarity = item.rarity ? item.rarity : "None";
    console.log(item.title, item.type, rarity);
    if (item.title.toLowerCase().indexOf(this.getNameFilterText().toLowerCase()) !== -1)
      if (item.type.toLowerCase().indexOf(this.getTypeFilterText().toLowerCase()) !== -1)
        if (rarity.toLowerCase().indexOf(this.getRarityFilterText().toLowerCase()) !== -1)
          return true;
    return false;
  }

  render() {
    return(
      <Col sm={6}>
        <Row>
          <FormGroup
            controlId="filterName" className="col-sm-6 item-padding">
            <FormControl
              type="text"
              value={this.state.nameFilterText}
              placeholder="Filter Name"
              onChange={this.nameFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterSrc" className="col-sm-2 item-padding">
            <FormControl
              type="text"
              value={this.state.typeFilterText}
              placeholder="Type"
              onChange={this.typeFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterLvl" className="col-sm-2 item-padding">
            <FormControl
              type="text"
              value={this.state.rarityFilterText}
              placeholder="Rarity"
              onChange={this.rarityFilterChange}
            />
          </FormGroup>
        </Row>
        <div className="item-list">
          <Table className="table table-hover table-fixed" sortable={true}  itemsPerPage={20} pageButtonLimit={6} id="table">
            <Thead>
              <Th column="name" className="col-sm-4">
                <strong className="name-header">Item Name</strong>
              </Th>
              <Th column="source" className="col-sm-1">
                <strong className="source-header">Type</strong>
              </Th>
              <Th column="level" className="col-sm-1">
                <strong className="level-header">Rarity</strong>
              </Th>
            </Thead>
            {
              this.state.json.map( (item) => {
                if (this.filtered(item))
                  return (
                    <Tr 
                      className={this.props.active === item.name ? "info" : ""}
                      onClick={this.props.handleClick.bind(this, item.name)}
                    >
                      <Td column="name">{item.title}</Td>
                      <Td column="source">{item.type}</Td>
                      <Td column="level">{item.rarity || "None"}</Td>
                    </Tr>
                  )
                else return ""
              })
            }
          </Table>
        </div>
      </Col>
    );
  }
}