import { configureStore } from "@reduxjs/toolkit";
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

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

export const persistor = persistStore(store);
