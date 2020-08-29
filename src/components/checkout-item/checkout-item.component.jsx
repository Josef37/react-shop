import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  subtractItemFromCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";
import { selectItem } from "../../redux/shop/shop.selectors";
import { selectItemQuantity } from "../../redux/cart/cart.selectors";

import { StyledControl } from "./checkout-item.styles";

const CheckoutItem = ({
  className,
  name,
  imageUrl,
  price,
  quantity,
  addItem,
  subtractItem,
  removeItem,
}) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt="item" />
      <span>{name}</span>
      <span>
        <StyledControl onClick={subtractItem}>&#10092;</StyledControl>
        <span>{quantity}</span>
        <StyledControl onClick={addItem}>&#10093;</StyledControl>
      </span>
      <span>$ {price}</span>
      <span>
        <StyledControl onClick={removeItem}>&#9587;</StyledControl>
      </span>
    </div>
  );
};

const mapStateToProps = (state, { id }) => ({
  ...selectItem(id)(state),
  quantity: selectItemQuantity(id)(state),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  addItem: () => dispatch(addItemToCart(id)),
  subtractItem: () => dispatch(subtractItemFromCart(id)),
  removeItem: () => dispatch(removeItemFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
