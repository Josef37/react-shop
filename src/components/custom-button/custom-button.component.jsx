import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, className, ...otherProps }) => {
  return (
    <button className={"custom-button " + className} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
