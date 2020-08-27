import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItemToCart = (itemId) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: itemId,
});
