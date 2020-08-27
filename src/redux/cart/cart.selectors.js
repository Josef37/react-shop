import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

const cartItemsSelector = createSelector([cartSelector], (cart) => cart.items);

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (items) => Object.values(items).reduce((sum, cur) => sum + cur, 0)
);

export const cartItemIdsSelector = createSelector(cartItemsSelector, (items) =>
  Object.keys(items).map((id) => parseInt(id))
);
