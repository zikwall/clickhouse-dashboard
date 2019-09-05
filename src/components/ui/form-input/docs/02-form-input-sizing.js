import React from "react";
import FormInput from "../index";

export default function FormInputSizeExample() {
  return (
    <div>
      <FormInput size="sm" placeholder="Small input" className="mb-2" />
      <FormInput placeholder="Normal input" className="mb-2" />
      <FormInput size="lg" placeholder="Large input" />
    </div>
  );
}
