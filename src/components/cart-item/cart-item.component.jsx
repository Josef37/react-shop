import React from "react";
import { connect } from "react-redux";

import { selectItem } from "../../redux/shop/shop.selectors";
import { selectItemQuantity } from "../../redux/cart/cart.selectors";

import {
  StyledCartItem,
  Image,
  ItemDetails,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ id, name, imageUrl, price, quantity }) => {
  return (
    <StyledCartItem>
      <Image src={imageUrl} alt="item" />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>{`${quantity} x $ ${price}`}</span>
      </ItemDetails>
    </StyledCartItem>
  );
};

const mapStateToProps = (state, { id }) => ({
  ...selectItem(id)(state),
  quantity: selectItemQuantity(id)(state),
});

export default connect(mapStateToProps)(CartItem);
