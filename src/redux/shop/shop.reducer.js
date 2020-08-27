import { COLLECTIONS, ITEMS } from "./shop.data";

const INITIAL_STATE = {
  collections: COLLECTIONS,
  items: ITEMS,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
