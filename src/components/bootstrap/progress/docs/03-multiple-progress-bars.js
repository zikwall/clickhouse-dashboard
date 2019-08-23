import React from "react";
import { Progress } from "../index";

export default function BasicProgress() {
  return (
    <Progress multi>
      <Progress bar value="50" />
      <Progress bar theme="success" value="20" />
    </Progress>
  );
}
