import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { selectShopItems } from "../shop/shop.selectors";

const cartSelector = (state) => state.cart;
const cartItemsSelector = createSelector([cartSelector], (cart) => cart.items);

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (items) => Object.values(items).reduce((sum, cur) => sum + cur, 0)
);

export const cartItemIdsSelector = createSelector(cartItemsSelector, (items) =>
  Object.keys(items).map((id) => parseInt(id))
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector, selectShopItems],
  (cartItems, shopItems) => {
    let total = 0;
    for (let id in cartItems) {
      const itemId = parseInt(id);
      const quantity = cartItems[id];
      const price = shopItems[itemId].price;
      total += price * quantity;
    }
    return total;
  }
);

export const selectCartHidden = createSelector(
  cartSelector,
  (cart) => cart.hidden
);

export const selectItemQuantity = memoize((itemId) =>
  createSelector(cartItemsSelector, (cart) => cart[itemId])
);
