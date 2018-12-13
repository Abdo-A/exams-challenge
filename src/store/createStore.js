import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer
});

let composeEnhancers = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
