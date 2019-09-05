import React from "react";
import FormInput from "../index";

export default function FormValidationStateExample() {
  return (
    <div>
      <FormInput placeholder="I'm neutral" className="mb-2" />
      <FormInput valid placeholder="I'm valid" className="mb-2" />
      <FormInput invalid placeholder="I'm invalid" />
    </div>
  );
}
