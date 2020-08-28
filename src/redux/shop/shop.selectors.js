import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectShopCollectionsAsArray = createSelector(
  selectShopCollections,
  (collections) => Object.values(collections)
);

export const selectShopItems = createSelector(selectShop, (shop) => shop.items);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    selectShopCollections,
    (collections) =>
      collections[collectionUrlParam] || { title: "no such collection" }
  )
);

export const selectItem = memoize((itemId) =>
  createSelector(selectShopItems, (items) => items[itemId])
);
