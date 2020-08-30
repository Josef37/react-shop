import { ShopActionTypes } from "./shop.types";
import { fetchCollections, fetchItems } from "../../firebase/firebase.utils";

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

export const fetchShopData = () => async (dispatch) => {
  dispatch(fetchShopDataStart());
  try {
    const [collections, items] = await Promise.all([
      fetchCollections(),
      fetchItems(),
    ]);
    dispatch(fetchShopDataSuccess({ collections, items }));
  } catch (error) {
    dispatch(fetchShopDataFailed(error.message));
  }
};
