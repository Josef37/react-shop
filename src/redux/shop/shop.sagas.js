import { takeLeading, put, all, call } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import { fetchCollections, fetchItems } from "../../firebase/firebase.utils";
import { fetchShopDataSuccess, fetchShopDataFailed } from "./shop.actions";

function* fetchShopData() {
  try {
    const [collections, items] = yield all([
      call(fetchCollections),
      call(fetchItems),
    ]);
    yield put(fetchShopDataSuccess({ collections, items }));
  } catch (error) {
    yield put(fetchShopDataFailed(error.message));
  }
}

function* onFetchShopDataStart() {
  yield takeLeading(ShopActionTypes.FETCH_SHOP_DATA_START, fetchShopData);
}

export default function* shopSaga() {
  yield all([call(onFetchShopDataStart)]);
}
