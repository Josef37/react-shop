import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cartItemIdsSelector } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";
import {
  StyledCartDropdown,
  CartItems,
  EmptyMessage,
  StyledCustomButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItemIds, toggleCart }) => {
  return (
    <StyledCartDropdown>
      <CartItems>
        {cartItemIds.length ? (
          cartItemIds.map((id) => <CartItem key={id} id={id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout" onClick={toggleCart}>
        <StyledCustomButton>GO TO CHECKOUT</StyledCustomButton>
      </Link>
    </StyledCartDropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemIds: cartItemIdsSelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
