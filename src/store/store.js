import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger];
const composeEnhances = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composeEnhances);
