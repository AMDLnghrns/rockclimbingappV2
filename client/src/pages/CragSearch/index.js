import React from "react";
import Jumbotron from "../../components/Jumbotron";
import ContainerA from "../../components/Container";
import { Container, Row, Col } from "reactstrap";
// import { connect } from "react-redux";
// import { users } from "../../reducers/users";
// import actions from "../../actions";
// import Maps from "../../components/Map/index.js";
import Gauge from "../../components/Gauge/index.js";
// import Gauge2 from "../../components/Gauge2/index.js";
import Weather from "../../components/Weather/index.js";
import MPWidget from "../../components/MPWidget/index.js";
// import { getRandomDog } from "../../store";


function CragSearch() {
  return (
    <div>
      <ContainerA id = "Title" >
        <Jumbotron>
          <h2>Crag Finder</h2>
        </Jumbotron>
      </ContainerA>

      <ContainerA id = "Widget">
        <MPWidget />
      </ContainerA>

      <Container>
        <Row>
          <Col xs="6">
            <Container id = "Weather">
              <Weather />
            </Container>
          </Col>
          <Col xs="6">
            <ContainerA id = "Gauge">
              <Gauge />
            </ContainerA>
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CragSearch;



