import React from 'react';
import { Table, Th, Tr, Td, Thead } from 'reactable'
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class SpellList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      json: props.json,
      nameFilterText: "",
      lvlFilterText: "",
      srcFilterText: "",
      classFilterText: ""

    };

    this.nameFilterChange = this.nameFilterChange.bind(this);
    this.srcFilterChange = this.srcFilterChange.bind(this);
    this.lvlFilterChange = this.lvlFilterChange.bind(this);
    this.classFilterChange = this.classFilterChange.bind(this);
  }
  getNameFilterText() {
    return this.state.nameFilterText
  }
  nameFilterChange(e) {
    this.setState({ nameFilterText: e.target.value });
  }

  getSrcFilterText() {
    return this.state.srcFilterText
  }
  srcFilterChange(e) {
    this.setState({ srcFilterText: e.target.value });
  }

  getLvlFilterText() {
    return this.state.lvlFilterText
  }
  lvlFilterChange(e) {
    this.setState({ lvlFilterText: e.target.value });
  }

  getClassFilterText() {
    return this.state.classFilterText
  }
  classFilterChange(e) {
    this.setState({ classFilterText: e.target.value });
  }

  filtered(spell) {
    if (spell.title.toLowerCase().indexOf(this.getNameFilterText().toLowerCase()) !== -1)
      if (spell.source.toLowerCase().indexOf(this.getSrcFilterText().toLowerCase()) !== -1)
        if (spell.level.toLowerCase().indexOf(this.getLvlFilterText().toLowerCase()) !== -1)
          if (spell.classes.toLowerCase().indexOf(this.getClassFilterText().toLowerCase()) !== -1)
            return true;
    return false;
  }

  render() {
    return(
      <div>
        <div className="row">
          <FormGroup
            controlId="filterName" className="col-sm-4 spell-padding">
            <FormControl
              type="text"
              value={this.state.nameFilterText}
              placeholder="Filter Name"
              onChange={this.nameFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterSrc" className="col-sm-1 spell-padding">
            <FormControl
              type="text"
              value={this.state.srcFilterText}
              placeholder="Src"
              onChange={this.srcFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterLvl" className="col-sm-1 spell-padding">
            <FormControl
              type="text"
              value={this.state.lvlFilterText}
              placeholder="Lvl"
              onChange={this.lvlFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterClass" className="col-sm-4 spell-padding">
            <FormControl
              type="text"
              value={this.state.classFilterText}
              placeholder="Filter Class"
              onChange={this.classFilterChange}
            />
          </FormGroup>
        </div>
      <div className="spell-list">
        <Table className="table table-hover" sortable={true} id="table">
          <Thead>
            <Th column="name" className="col-sm-4">
              <strong className="name-header">Spell Name</strong>
            </Th>
            <Th column="source" className="col-sm-1">
              <strong className="source-header">Source</strong>
            </Th>
            <Th column="level" className="col-sm-1">
              <strong className="level-header">Level</strong>
            </Th>
            <Th column="class" className="col-sm-4">
              <strong className="classes-header">Classes</strong>
            </Th>
          </Thead>
          {
            this.state.json.map( (spell) => {
              if (this.filtered(spell))
                return (
                  <Tr 
                    className={this.props.active === spell.name ? "info" : ""}
                    onClick={this.props.handleClick.bind(this, spell.name)}
                  >
                    <Td column="name">{spell.title}</Td>
                    <Td column="source">{spell.source}</Td>
                    <Td column="level">{spell.level}</Td>
                    <Td column="class">{spell.classes}</Td>
                  </Tr>
                )
            })
          }
        </Table>
      </div>
    </div>
    );
  }
}