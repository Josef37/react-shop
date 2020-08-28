export const setItemQuantity = (cartItems, itemId, quantity) => {
  if (quantity > 0) {
    return { ...cartItems, [itemId]: { itemId, quantity } };
  } else {
    cartItems = { ...cartItems };
    delete cartItems[itemId];
    return cartItems;
  }
};
