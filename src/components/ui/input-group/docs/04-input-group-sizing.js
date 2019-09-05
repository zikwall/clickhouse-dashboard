import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from '../index';
import FormInput from '../../form-input';

export default function InputGroupAddonExample() {
  return (
    <div>
      <InputGroup size="sm" className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Total Amount</InputGroupText>
        </InputGroupAddon>
        <FormInput />
        <InputGroupAddon type="append">
          <InputGroupText>$ (USD)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Total Amount</InputGroupText>
        </InputGroupAddon>
        <FormInput />
        <InputGroupAddon type="append">
          <InputGroupText>$ (USD)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup size="lg">
        <InputGroupAddon type="prepend">
          <InputGroupText>Total Amount</InputGroupText>
        </InputGroupAddon>
        <FormInput />
        <InputGroupAddon type="append">
          <InputGroupText>$ (USD)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
