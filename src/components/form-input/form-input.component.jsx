import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...inputProps }) => {
  return (
    <label className="form-input-group">
      <input class="form-input" onChange={handleChange} {...inputProps} />
      <span
        className={
          "form-input-label" + (inputProps.value.length ? " shrink" : "")
        }
      >
        {label}
      </span>
    </label>
  );
};

export default FormInput;
