import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  items: {},
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      const itemId = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [itemId]: 1 + (state.items[itemId] || 0),
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
