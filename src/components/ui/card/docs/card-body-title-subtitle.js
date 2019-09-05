import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "../index";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
  );
}
