import React from 'react';
import { ListGroup, ListGroupItem, FormGroup, FormControl } from  'react-bootstrap';

export class RuleList extends React.Component {
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
      <div>
      <FormGroup
        controlId="formBasicText">
        <FormControl
          type="text"
          value={this.state.filterText}
          placeholder="Filter Rules (also searches text)"
          onChange={this.filterChange}
        />
      </FormGroup>
      <ListGroupItem disabled>
        <div className="row">
          <div className="col-sm-7">Rule Heading</div>
        </div>
      </ListGroupItem>
      <ListGroup className="rule-list">
      {
        this.state.json.map( (rule) => {
          if(rule.htmlcontent.toLowerCase().indexOf(this.getFilterText().toLowerCase()) !== -1)
            return (
              <ListGroupItem
                href={"/dnd-react/#/rules/"+rule.id}
                className={this.props.active === rule.id ? "selected" : ""}
                onClick={this.props.handleClick.bind(this, rule.id)}>
                  <div className="row">
                    <div className="col-sm-12">{rule.name}</div>
                  </div>
              </ListGroupItem>
            )
          else return "";
        }, this)
      }
      </ListGroup>
      </div>
    );
  }
}