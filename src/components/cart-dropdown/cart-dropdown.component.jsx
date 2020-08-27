import React from "react";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItemIds }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItemIds.map((id) => (
          <CartItem key={id} id={id} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemIds: Object.keys(state.cart.items).map((n) => parseInt(n)),
});

export default connect(mapStateToProps)(CartDropdown);
