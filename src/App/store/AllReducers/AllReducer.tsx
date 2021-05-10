import { combineReducers } from "redux";
import DataReducer from "../Reducers/ReducerOne";

const AllReducer = combineReducers({
  Data: DataReducer,
});
export default AllReducer;
