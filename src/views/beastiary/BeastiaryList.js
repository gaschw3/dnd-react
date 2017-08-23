/* eslint no-eval: 0 */
import React from 'react';
import { Table, Th, Tr, Td, Thead } from 'reactable'
import { FormGroup, FormControl } from  'react-bootstrap';

export class BeastiaryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      json: props.json,
      nameFilterText: "",
      crFilterText: "",
      typeFilterText: "",
      otherFilterText: ""
    };

    this.nameFilterChange = this.nameFilterChange.bind(this);
    this.crFilterChange = this.crFilterChange.bind(this);
    this.typeFilterChange = this.typeFilterChange.bind(this);
    this.otherFilterChange = this.otherFilterChange.bind(this);
  }
  getNameFilterText() {
    return this.state.nameFilterText
  }
  nameFilterChange(e) {
    this.setState({ nameFilterText: e.target.value });
  }

  getCrFilterText() {
    return this.state.crFilterText
  }
  crFilterChange(e) {
    this.setState({ crFilterText: e.target.value });
  }

  getTypeFilterText() {
    return this.state.typeFilterText
  }
  typeFilterChange(e) {
    this.setState({ typeFilterText: e.target.value });
  }

  getOtherFilterText() {
    return this.state.otherFilterText
  }
  otherFilterChange(e) {
    this.setState({ otherFilterText: e.target.value });
  }

  filtered(beastiary) {
    if (beastiary.name.toLowerCase().indexOf(this.getNameFilterText().toLowerCase()) !== -1)
      if (beastiary.cr.replace(/ \(.*\)/, "") === this.getCrFilterText() || this.getCrFilterText()==='')
        if (beastiary.type.toLowerCase().indexOf(this.getTypeFilterText().toLowerCase()) !== -1)
          if (beastiary.other.toLowerCase().indexOf(this.getOtherFilterText().toLowerCase()) !== -1)
            return true;
    return false;
  }

  render() {
    return(
      <div>
        <div className="row">
          <FormGroup
            controlId="filterName" className="col-sm-3 beastiary-padding">
            <FormControl
              type="text"
              value={this.state.nameFilterText}
              placeholder="Filter Name"
              onChange={this.nameFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterCr" className="col-sm-1 beastiary-padding">
            <FormControl
              type="text"
              value={this.state.crFilterText}
              placeholder="CR"
              onChange={this.crFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterType" className="col-sm-3 beastiary-padding">
            <FormControl
              type="text"
              value={this.state.typeFilterText}
              placeholder="Type"
              onChange={this.typeFilterChange}
            />
          </FormGroup>
          <FormGroup
            controlId="filterOther" className="col-sm-3 beastiary-padding">
            <FormControl
              type="text"
              value={this.state.otherFilterText}
              placeholder="Other"
              onChange={this.otherFilterChange}
            />
          </FormGroup>
        </div>
      <div className="beastiary-list">
        <Table className="table table-hover table-fixed" sortable={[
          {
              column: 'cr',
              sortFunction: function(a, b) {
                var valA = parseFloat(eval(a.toString()));
                var valB = parseFloat(eval(b.toString()));

                // Sort non-numeric values alphabetically at the bottom of the list
                if (isNaN(valA) && isNaN(valB)) {
                    valA = a;
                    valB = b;
                } else {
                    if (isNaN(valA)) {
                        return 1;
                    }
                    if (isNaN(valB)) {
                        return -1;
                    }
                }
                if (valA < valB) {
                    return -1;
                }
                if (valA > valB) {
                    return 1;
                }
                return 0;
            }
          },
          'name','type','other'
          ]}  itemsPerPage={25} pageButtonLimit={10} id="table">
          <Thead>
            <Th column="name" className="col-sm-3">
              <strong className="name-header">Name</strong>
            </Th>
            <Th column="cr" className="col-sm-1">
              <strong className="cr-header">CR</strong>
            </Th>
            <Th column="type" className="col-sm-3">
              <strong className="type-header">Type</strong>
            </Th>
            <Th column="other" className="col-sm-3">
              <strong className="other-header">Other</strong>
            </Th>
          </Thead>
          {
            this.state.json.map( (beastiary) => {
              if (this.filtered(beastiary))
                return (
                  <Tr 
                    className={this.props.active === beastiary.name ? "info" : ""}
                    onClick={this.props.handleClick.bind(this, beastiary.name)}
                  >
                    <Td column="name">{beastiary.name}</Td>
                    <Td column="cr">{beastiary.cr.replace(/ \(.*\)/, "")}</Td>
                    <Td column="type">{beastiary.type}</Td>
                    <Td column="other">{beastiary.other}</Td>
                  </Tr>
                )
              else return ""
            })
          }
        </Table>
      </div>
    </div>
    );
  }
}