import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "../index";

export default function CardBodyExample() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
            <CardImg bottom src="https://place-hold.it/300x200" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
