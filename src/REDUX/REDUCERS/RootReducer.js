import { combineReducers } from "redux";
import NftReducer from "../REDUCERS/NftReducer";
import DetailReducer from "././DetailReducer";

// COMBINING ALL REDUCERS 
const RootReducer = combineReducers({
  NftReducer: NftReducer,
  DetailReducer: DetailReducer,
});

export default RootReducer;
