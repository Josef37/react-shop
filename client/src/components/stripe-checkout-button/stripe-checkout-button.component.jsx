import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const publishableKey =
  "pk_test_51HLD6iLBUI9RqiaOk8Wk2dovBFp3Lfke1pr2hMmnlWgsaHphdjfYDDaxadkxLeI3m1BSuKBSgSXZc8SfvnRd2E1x00HoHeuDpt";

const StripeCheckoutButton = ({ total }) => {
  const priceInCents = total * 100;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use the provided credit card."
        );
      });
  };

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
