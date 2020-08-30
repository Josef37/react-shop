import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const withSpinner = (WrappedComponent) => ({ loading, props }) => {
  if (loading) {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  } else {
    return <WrappedComponent {...props} />;
  }
};

export default withSpinner;
