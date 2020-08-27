import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;
const cartItemsSelector = createSelector([cartSelector], (cart) => cart.items);

const shopSelector = (state) => state.shop;
const shopItemsSelector = createSelector(shopSelector, (shop) => shop.items);

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (items) => Object.values(items).reduce((sum, cur) => sum + cur, 0)
);

export const cartItemIdsSelector = createSelector(cartItemsSelector, (items) =>
  Object.keys(items).map((id) => parseInt(id))
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector, shopItemsSelector],
  (cartItems, shopItems) => {
    let total = 0;
    for (let id in cartItems) {
      const itemId = parseInt(id);
      const quantity = cartItems[id];
      const price = shopItems.find((item) => item.id === itemId).price;
      total += price * quantity;
    }
    return total;
  }
);
