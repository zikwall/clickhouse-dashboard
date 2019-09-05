import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from '../index';
import FormInput from '../../form-input';
import { Button } from '../../button';

export default function FormSelectDemo() {
  return (
    <div>
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <FormInput placeholder="Total Amount" />
      </InputGroup>

      <InputGroup className="mb-2">
        <FormInput placeholder="Total Amount" />
        <InputGroupAddon type="append">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon type="prepend">
          <InputGroupText>designrevision.com/user/</InputGroupText>
        </InputGroupAddon>
        <FormInput placeholder="username" />
        <InputGroupAddon type="append">
          <Button theme="secondary">Check</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
