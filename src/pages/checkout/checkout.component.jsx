import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemIdsSelector,
  cartTotalSelector,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ itemIds, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <span>Product</span>
      <span>Description</span>
      <span>Quantity</span>
      <span>Price</span>
      <span>Remove</span>
    </div>
    <div className="checkout-items">
      {itemIds.length ? (
        itemIds.map((id) => <CheckoutItem key={id} id={id} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="total">TOTAL: $ {total}</div>
    <div className="test-payment-notice">
      <p>For test payments please use the following credit card:</p>
      <p>
        Credit Card Number: 4242 4242 4242 4242
        <br />
        Expiration Date: any date in the future
        <br />
        CVC: 123
      </p>
    </div>
    <div className="payment">
      <StripeCheckoutButton total={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemIds: cartItemIdsSelector,
  total: cartTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
