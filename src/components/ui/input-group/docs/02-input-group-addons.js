import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from '../index';
import FormInput from '../../form-input';

export default function InputGroupAddonExample() {
  return (
    <InputGroup>
      <InputGroupAddon type="prepend">
        <InputGroupText>Total Amount</InputGroupText>
      </InputGroupAddon>
      <FormInput />
      <InputGroupAddon type="append">
        <InputGroupText>.00 (USD)</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
