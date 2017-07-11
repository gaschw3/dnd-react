import React from 'react';

import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from  'react-bootstrap';

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
            <NavItem eventKey={1} href="#/rules">Rules</NavItem>
            <NavDropdown eventKey={2} title="Characters" id="basic-nav-dropdown">
              <MenuItem href="#/races/aarakocra" eventKey={2.1}>Races</MenuItem>
              <MenuItem href="#/backgrounds/acolyte" eventKey={2.2}>Backgrounds</MenuItem>
              <MenuItem href="#/classes"eventKey={2.3}>Classes</MenuItem>
              <MenuItem href="#/spells/abi-dalzims-horrid-wilting" eventKey={3.2}>Spells</MenuItem>
              <MenuItem href="#/feats/acrobat" eventKey={3.3}>Feats</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="DMs" id="basic-nav-dropdown">
              <MenuItem href="#/beastiary" eventKey={4.1}>Beastiary</MenuItem>
              <MenuItem href="#/items" eventKey={4.2}>Items</MenuItem>
              <MenuItem href="#/conditions/blinded" eventKey={3.1}>Conditions</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}