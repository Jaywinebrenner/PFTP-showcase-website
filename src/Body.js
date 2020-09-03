
import { Container, Row, Col } from "reactstrap";
import React from "react";
import still from "./media/still.png";
import one from "./media/still.png"
import two from "./media/two.gif";
import three from "./media/three.gif";
import four from "./media/four.gif";

const Body = () => {
  return (
    <Container className="bodyContainer">
      <Container className="secondBody">
        <Row>
          <Col>
            <h1 className="headerTextMaroon">
              Help eliminate needless food waste
            </h1>
            <h1 className="headerTextGray">
              The Portland Fruit Tree Project Mobile App connects people to the
              plentiful fruit tree bounties in their very neighborhood
            </h1>
          </Col>

          <Col>
            <img className="still" src={still} alt="Logo" />
          </Col>
        </Row>
      </Container>

      <Container className="thridBody">
        <Row>
          <Col>
            <h1 className="headerTextMaroon">Find Trees </h1>
            <h1 className="headerTextGray">
              Simply open the Fruit Tree Finder and browse the map containing
              all of the trees available for gleaning in your area.  A bottom
              drawer lists the trees by how close they are to your current
              location.
            </h1>
          </Col>

          <Col>
            <img className="still" src={two} alt="Logo" />
          </Col>
        </Row>
      </Container>

      <Container className="thridBody">
        <Row>
          <Col>
            <h1 className="headerTextMaroon">Narrow your search</h1>
            <h1 className="headerTextGray">
              Filter your tree map by toggling the dropdown. Display only
              Verified Trees or All the Trees available.
            </h1>
          </Col>

          <Col>
            <img className="still" src={three} alt="Logo" />
          </Col>
          <p className="italic">
            NOTE: Verified Trees are not yet in the database. Verified trees are
            trees who are connected with the PFTP and are happy to share their
            bounty with hungry gleaners. Non-verified trees are user submitted
            trees.
          </p>
        </Row>
      </Container>

      <Container className="fourthBody">
        <Row>
          <Col>
            <h1 className="headerTextMaroon">Contribute to the Community</h1>
            <h1 className="headerTextGray">
              If you see a tree in your neighborhood who’s fruit sadly goes
              unpicked, enter it in the Fruit Tree Finder. Simply sign in, add a
              tree and voila! You will have made a small yet powerful
              contribution to help those in want and reduce needless food waste.
            </h1>
          </Col>

          <Col>
            <img className="still" src={four} alt="Logo" />
          </Col>
        </Row>
      </Container>

      <Container className="summaryBody">
        <h1 className="headerTextMaroon">Summary</h1>
        <h6 className="headerTextGray">
          This app was an idea I came up with and pitched to local non-profit Portland Fruit Tree Project. My goal is to create a vibrant
          community of people who input trees to document the Portland metro
          area of all the uneaten fruit that falls to waste. I ultimately
          foresee this application as a vibrant community resource where one
          could simply open the app, go on a stroll and glean your breakfast,
          snacks, fruit for jams or pies.
        </h6>
      </Container>
    </Container>
  );
}

export default Body