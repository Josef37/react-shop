import React from "react";
import StripeCheckout from "react-stripe-checkout";

const publishableKey =
  "pk_test_51HLD6iLBUI9RqiaOk8Wk2dovBFp3Lfke1pr2hMmnlWgsaHphdjfYDDaxadkxLeI3m1BSuKBSgSXZc8SfvnRd2E1x00HoHeuDpt";

const onToken = (token) => {
  console.log(token);
  alert("Test Payment Successful");
};

const StripeCheckoutButton = ({ total }) => {
  const priceInCents = total * 100;

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${total}`}
      currency="USD"
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
