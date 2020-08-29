import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middlewares = [];

if ("development" === process.env.NODE_ENV) {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
