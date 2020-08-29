import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";
import { selectItem } from "../../redux/shop/shop.selectors";

import {
  StyledCollectionItem,
  Image,
  Footer,
  StyledCustomButton,
} from "./collection-item.styles";

const CollectionItem = ({ id, name, imageUrl, price, addItem }) => {
  return (
    <StyledCollectionItem>
      <Image imageUrl={imageUrl} />
      <StyledCustomButton isInverted onClick={addItem}>
        ADD TO CART
      </StyledCustomButton>
      <Footer>
        <span>{name}</span>
        <span>$ {price}</span>
      </Footer>
    </StyledCollectionItem>
  );
};

const mapStateToProps = (state, { id }) => selectItem(id)(state);

const mapDispatchToProps = (dispatch, { id }) => ({
  addItem: () => dispatch(addItemToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
