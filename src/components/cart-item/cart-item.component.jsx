import React from "react";
import { connect } from "react-redux";

import { selectItem } from "../../redux/shop/shop.selectors";
import { selectItemQuantity } from "../../redux/cart/cart.selectors";

import "./cart-item.styles.scss";

const CartItem = ({ id, name, imageUrl, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" className="cart-item-image" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`${quantity} x $ ${price}`}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { id }) => ({
  ...selectItem(id)(state),
  quantity: selectItemQuantity(id)(state),
});

export default connect(mapStateToProps)(CartItem);
