import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComponent = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Portland Fruit Tree Project</NavbarBrand>

      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="https://www.linkedin.com/in/jaywinebrenner/">
            LinkedIn
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/Jaywinebrenner">GitHub</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://jaywinebrenner.github.io/resume2020/">
            Website
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownMenu right>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>jaywinebrenner@gmail.com</NavbarText>
    </Navbar>
  );
}

export default NavbarComponent