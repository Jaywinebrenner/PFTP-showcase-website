
import { Container, Row, Col } from "reactstrap";
import React from "react";

const Body = () => {
  return (
    <Container className="bodyContainer">
      <Container className="topBody">
        <h6>
          This website showcases the Mobile App for the Portland Fruit Tree
          Project Mobile Application by Jay Winebrenner. It is a cross platform,
          serverless application using React Native, Firebase and Redux.
        </h6>
      </Container>

      <Container className="secondBody">
        <Row>
          <Col>
            <h1 className="headerTextMaroon">
              Help eliminate needless food waste
            </h1>
            <h1 className="headerTextGray">
              The Fruit Tree Finder connects people to the plentiful fruit tree
              bounties in their very neighborhood
            </h1>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Body