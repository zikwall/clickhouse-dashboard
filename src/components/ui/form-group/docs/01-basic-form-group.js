import React from "react";
import { Form } from '../../form';
import FormGroup from '../../form-group';
import FormInput from '../../form-input';

export default function FormGroupExample() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <FormInput id="username" />
      </FormGroup>
    </Form>
  );
}
