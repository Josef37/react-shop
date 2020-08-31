import { ShopActionTypes } from "./shop.types";

export const fetchShopDataStart = () => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_START,
});

export const fetchShopDataSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_SUCCESS,
  payload: collections,
});

export const fetchShopDataFailed = (error) => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_FAILED,
  payload: error.message,
});
