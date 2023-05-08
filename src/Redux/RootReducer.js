import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./JobReducer";
export default combineReducers({
  cartData,
  productData
});
