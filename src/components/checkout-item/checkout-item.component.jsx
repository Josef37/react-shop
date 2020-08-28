import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  subtractItemFromCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";
import { selectItem } from "../../redux/shop/shop.selectors";
import { selectItemQuantity } from "../../redux/cart/cart.selectors";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
  addItem,
  subtractItem,
  removeItem,
}) => {
  return (
    <div className="checkout-item">
      <img src={imageUrl} alt="item" />
      <span className="description">{name}</span>
      <span className="quantity-controls">
        <span className="quantity-down" onClick={subtractItem}>
          &#10092;
        </span>
        <span className="quantity">{quantity}</span>
        <span className="quantity-up" onClick={addItem}>
          &#10093;
        </span>
      </span>
      <span className="price">$ {price}</span>
      <span className="remove-controls">
        <span className="remove" onClick={removeItem}>
          &#9587;
        </span>
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
