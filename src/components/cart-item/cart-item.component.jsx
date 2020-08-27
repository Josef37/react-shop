import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = ({ cart, shop }, { id }) => {
  return {
    ...shop.items.find((item) => item.id === id),
    quantity: cart.items[id],
  };
};

export default connect(mapStateToProps)(CartItem);
