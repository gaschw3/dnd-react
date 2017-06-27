import React from 'react';

import {Navbar, Nav, NavDropdown, MenuItem} from  'react-bootstrap';

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">EotCC 5e</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={2} title="Players" id="basic-nav-dropdown">
              <MenuItem href="#/races" eventKey={2.1}>Races</MenuItem>
              <MenuItem href="#/backgrounds" eventKey={2.2}>Backgrounds</MenuItem>
              <MenuItem href="#/classes"eventKey={2.3}>Classes</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Reference" id="basic-nav-dropdown">
              <MenuItem href="#/conditions" eventKey={3.1}>Conditions</MenuItem>
              <MenuItem href="#/spells" eventKey={3.2}>Spells</MenuItem>
              <MenuItem href="#/feats" eventKey={3.3}>Feats</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="DM Tools" id="basic-nav-dropdown">
              <MenuItem href="#/beastiary" eventKey={4.1}>Beastiary</MenuItem>
              <MenuItem href="#/items" eventKey={4.2}>Items</MenuItem>
              <MenuItem href="#/rules" eventKey={4.3}>Rules</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}