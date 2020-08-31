import React from "react";

import { Label, Input, Description } from "./form-input.styles";

const FormInput = ({ label, handleChange, ...inputProps }) => {
  return (
    <Label>
      <Input className="form-input" onChange={handleChange} {...inputProps} />
      <Description shrink={!!inputProps.value.length}>{label}</Description>
    </Label>
  );
};

export default FormInput;
