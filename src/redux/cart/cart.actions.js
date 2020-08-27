import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItemToCart = (itemId) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: itemId,
});

export const subtractItemFromCart = (itemId) => ({
  type: CartActionTypes.SUBTRACT_ITEM_FROM_CART,
  payload: itemId,
});

export const removeItemFromCart = (itemId) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: itemId,
});
