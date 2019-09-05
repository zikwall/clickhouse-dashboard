import React from "react";
import { Container, Row, Col } from '../index'

export default class Example extends React.Component {
  render() {
    return (
      <Container className="dr-example-container">
        <Row>
          <Col sm="12" lg="6">
            sm=12 lg=6
          </Col>
          <Col sm="12" lg="6">
            sm=12 lg=6
          </Col>
        </Row>

        <Row>
          <Col sm="12" md="4" lg="3">
            sm=12 md=4 lg=3
          </Col>
          <Col sm="12" md="4" lg="6">
            sm=12 md=4 lg=6
          </Col>
          <Col sm="12" md="4" lg="3">
            sm=12 md=4 lg=3
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 8, order: 2, offset: 2 }}>
            .col-sm-8 .order-sm-2 .offset-sm-2
          </Col>
        </Row>
      </Container>
    );
  }
}
