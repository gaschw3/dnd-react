import React from 'react';
import { Table, Th, Tr, Td, Thead } from 'reactable'
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class SpellList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      json: props.json,
      filterText: ""
    };

    this.filterChange = this.filterChange.bind(this);
  }

  getFilterText() {
    return this.state.filterText
  }

  filterChange(e) {
    this.setState({ filterText: e.target.value });
  }

  render() {
    return(
      <Table className="table table-striped table-hover" sortable={true} id="table">
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
          <Th column="school" className="col-sm-2">
            <strong className="school-header">School</strong>
          </Th>
          <Th column="class" className="col-sm-4">
            <strong className="classes-header">Classes</strong>
          </Th>
        </Thead>
        {
          this.state.json.map( (spell) => {
            return (
              <Tr href="test">
                <Td column="name">{spell.title}</Td>
                <Td column="source">{spell.source}</Td>
                <Td column="level">{spell.level}</Td>
                <Td column="school">{spell.school}</Td>
                <Td column="class">{spell.classes}</Td>
              </Tr>
            )
          })
        }
    </Table>
    );
  }
}