import { Container, Row, Col } from "reactstrap";
import React from "react";
import logo from "./media/logo.png";
import NavbarComponent from "./NavbarComponent";

const Header = () => {
  return (
    <Container className="headerContainer">
      {/* <h1>Portland Fruit Tree Website Mobile App Website</h1> */}
      <img className="logo" src={logo} alt="Logo" />
      <h5>
        This website showcases the Portland Fruit Tree
        Project Mobile Application by Jay Winebrenner. It is a cross platform,
        serverless app using React Native, Firebase, Geolocation Tracking and Redux. 
      </h5>
      <p className="italic">NOTE: This site is not intended to showcase my website building skills.</p>
    </Container>
  );
};

export default Header;
