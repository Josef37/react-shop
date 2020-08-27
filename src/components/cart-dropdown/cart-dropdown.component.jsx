import React from "react";
import { connect } from "react-redux";

import { cartItemIdsSelector } from "../../redux/cart/cart.selectors";

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
  cartItemIds: cartItemIdsSelector(state),
});

export default connect(mapStateToProps)(CartDropdown);
