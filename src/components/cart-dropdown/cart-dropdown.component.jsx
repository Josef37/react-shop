import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cartItemIdsSelector } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItemIds, toggleCart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItemIds.length ? (
          cartItemIds.map((id) => <CartItem key={id} id={id} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link className="checkout-link" to="checkout" onClick={toggleCart}>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemIds: cartItemIdsSelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
