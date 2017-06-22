import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar, Nav,NavItem, NavDropdown, MenuItem} from  'react-bootstrap';

const navbarInstance = (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">EotCC 5e</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavDropdown eventKey={2} title="Players" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}>Races</MenuItem>
          <MenuItem eventKey={2.2}>Backgrounds</MenuItem>
          <MenuItem eventKey={2.3}>Classes</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={3} title="Reference" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Conditions</MenuItem>
          <MenuItem eventKey={3.2}>Spells</MenuItem>
          <MenuItem eventKey={3.3}>Feats</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={4} title="DM Tools" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}>Beastiary</MenuItem>
          <MenuItem eventKey={4.2}>Items</MenuItem>
          <MenuItem eventKey={4.3}>Rules</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

ReactDOM.render(
  navbarInstance, 
  document.getElementById('nav')
  );