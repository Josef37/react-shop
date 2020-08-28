import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { selectShopItems } from "../shop/shop.selectors";

const cartSelector = (state) => state.cart;
const cartItemsSelector = createSelector([cartSelector], (cart) => cart.items);

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (items) =>
    Object.values(items).reduce((sum, { quantity }) => sum + quantity, 0)
);

export const cartItemIdsSelector = createSelector(cartItemsSelector, (items) =>
  Object.values(items).map(({ itemId }) => itemId)
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector, selectShopItems],
  (cartItems, shopItems) =>
    Object.values(cartItems).reduce(
      (total, { itemId, quantity }) =>
        total + quantity * shopItems[itemId].price,
      0
    )
);

export const selectCartHidden = createSelector(
  cartSelector,
  (cart) => cart.hidden
);

export const selectItemQuantity = memoize((itemId) =>
  createSelector(cartItemsSelector, (cart) => cart[itemId].quantity)
);
