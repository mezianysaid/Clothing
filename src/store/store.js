import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
// redux-persist used for saving the data in local storage on yr browser
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // don't persist the user ,just others
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhances = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composeEnhances);

export const persistor = persistStore(store);
