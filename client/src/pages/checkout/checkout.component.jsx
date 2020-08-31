import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemIdsSelector,
  cartTotalSelector,
} from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";

import {
  StyledCheckoutPage,
  StyledCheckoutItem,
  CheckoutHeader,
  EmptyMessage,
  CheckoutItems,
  Total,
  TestPaymentNotice,
  Payment,
} from "./checkout.styles";

const CheckoutPage = ({ itemIds, total }) => (
  <StyledCheckoutPage>
    <CheckoutHeader>
      <span>Product</span>
      <span>Description</span>
      <span>Quantity</span>
      <span>Price</span>
      <span>Remove</span>
    </CheckoutHeader>
    <CheckoutItems>
      {itemIds.length ? (
        itemIds.map((id) => <StyledCheckoutItem key={id} id={id} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CheckoutItems>
    <Total>TOTAL: $ {total}</Total>
    <TestPaymentNotice>
      <p>For test payments please use the following credit card:</p>
      <p>
        Credit Card Number: 4242 4242 4242 4242
        <br />
        Expiration Date: any date in the future
        <br />
        CVC: 123
      </p>
    </TestPaymentNotice>
    <Payment>
      <StripeCheckoutButton total={total} />
    </Payment>
  </StyledCheckoutPage>
);

const mapStateToProps = createStructuredSelector({
  itemIds: cartItemIdsSelector,
  total: cartTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
