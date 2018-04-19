import React from 'react';

import {Navbar, Nav, NavDropdown, MenuItem} from  'react-bootstrap';

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">EotCC 5e</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={2} title="Characters" id="basic-nav-dropdown">
              <MenuItem href="#/classes"eventKey={2.5}>Classes</MenuItem>
              <MenuItem href="#/backgrounds/acolyte" eventKey={2.1}>Backgrounds</MenuItem>
              <MenuItem href="#/races/aarakocra" eventKey={2.2}>Races</MenuItem>
              <MenuItem href="#/feats/acrobat" eventKey={2.4}>Feats</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Reference" id="basic-nav-dropdown">
              <MenuItem href="#/rules/ability-scores-basic"eventKey={3.1}>Rules</MenuItem>
              <MenuItem href="#/spells/abi-dalzims-horrid-wilting" eventKey={3.2}>Spells</MenuItem>
              <MenuItem href="#/conditions/blinded" eventKey={3.3}>Conditions</MenuItem>
              <MenuItem href="#/campaign" eventKey={3.3}>Campaign <span className="label label-wip">new, WIP</span></MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="DM" id="basic-nav-dropdown">
              <MenuItem href="#/beastiary/Aarakocra" eventKey={4.2}>Beastiary</MenuItem>
              <MenuItem href="#/items/abacus" eventKey={4.3}>Items</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}