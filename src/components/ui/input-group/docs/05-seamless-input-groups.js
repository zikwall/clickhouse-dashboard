import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, InputGroupAddon, InputGroupText } from '../index';
import FormInput from '../../form-input';

export default function InputGroupAddonExample() {
  return (
    <InputGroup seamless>
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </InputGroupText>
      </InputGroupAddon>
      <FormInput />
    </InputGroup>
  );
}
