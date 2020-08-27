import { CartActionTypes } from "./cart.types";
import { setItemQuantity } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: {},
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }
    case CartActionTypes.ADD_ITEM_TO_CART: {
      const itemId = action.payload;
      return {
        ...state,
        items: setItemQuantity(
          state.items,
          itemId,
          (state.items[itemId] || 0) + 1
        ),
      };
    }
    case CartActionTypes.SUBTRACT_ITEM_FROM_CART: {
      const itemId = action.payload;
      return {
        ...state,
        items: setItemQuantity(
          state.items,
          itemId,
          (state.items[itemId] || 0) - 1
        ),
      };
    }
    case CartActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemId = action.payload;
      return {
        ...state,
        items: setItemQuantity(state.items, itemId, 0),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
