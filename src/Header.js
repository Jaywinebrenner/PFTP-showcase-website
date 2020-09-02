import { Container, Row, Col } from "reactstrap";
import React from "react";
import logo from "./media/logo.png";
import NavbarComponent from "./NavbarComponent";

const Header = () => {
  return (
    <Container className="headerContainer">
      <h1>Portland Fruit Tree Website Mobile App Website</h1>
      <img className="logo" src={logo} alt="Logo" />;
    </Container>
  );
};

export default Header;
