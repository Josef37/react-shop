import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../redux/cart/cart.actions";
import { cartItemsCountSelector } from "../../redux/cart/cart.selectors";

import { StyledCartIcon, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <StyledCartIcon onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{itemCount}</ItemCount>
    </StyledCartIcon>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCountSelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
