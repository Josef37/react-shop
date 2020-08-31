import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: [],
  items: [],
  isFetching: true,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOP_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_SHOP_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
