import React from "react";
import FormSelect from "../index";

export default function FormSelectValidationDemo() {
  return (
    <div>
      <FormSelect className="mb-2">
        <option value="first">I am neutral</option>
      </FormSelect>
      <FormSelect className="mb-2" invalid>
        <option value="first">I am invalid</option>
      </FormSelect>
      <FormSelect valid>
        <option value="first">I am valid</option>
      </FormSelect>
    </div>
  );
}
