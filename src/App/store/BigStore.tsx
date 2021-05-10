import { createStore, applyMiddleware } from "redux";
import AllReducer from "./AllReducers/AllReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  AllReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type DataMainType = ReturnType<typeof AllReducer>;
export default store;
