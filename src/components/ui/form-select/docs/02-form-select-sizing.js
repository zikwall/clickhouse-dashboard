import React from "react";
import FormSelect from "../index";

export default function FormSelectSizingDemo() {
  return (
    <div>
      <FormSelect size="sm" className="mb-2">
        <option value="first">This is the first option</option>
        <option value="second">This is the second option.</option>
        <option value="third" disabled>
          This option is disabled.
        </option>
      </FormSelect>
      <FormSelect size="lg">
        <option value="first">This is the first option</option>
        <option value="second">This is the second option.</option>
        <option value="third" disabled>
          This option is disabled.
        </option>
      </FormSelect>
    </div>
  );
}
