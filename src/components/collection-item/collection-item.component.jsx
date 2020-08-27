import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price, addItem }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CustomButton className="inverted" onClick={() => addItem(id)}>
        ADD TO CART
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemId) => dispatch(addItemToCart(itemId)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
