import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectShopItems = createSelector(selectShop, (shop) => shop.items);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    selectShopCollections,
    (collections) =>
      collections.find(
        (collection) => collection.routeName === collectionUrlParam
      ) || { title: "No such category", itemIds: [] }
  )
);
