import React from "react";
import FormSelect from "../index";

export default function FormSelectDemo() {
  return (
    <FormSelect>
      <option value="first">This is the first option</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect>
  );
}
