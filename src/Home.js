import { Container, Row, Col } from "reactstrap";
import React from "react";
import NavbarComponent from "./NavbarComponent"
import Header from './Header'
import Body from './Body'


const Home = () => {


  return (
    <Container className="homeContainer">
      <NavbarComponent/>
      <Header/>
      <Body/>

    </Container>
  );
}

export default Home