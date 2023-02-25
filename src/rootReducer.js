import { combineReducers } from "redux";

// import cartReducer from "./components/Cart/Cart.reducer";
import countSlice from "./reducers/count.reducer";
// import productsReducer from "./reducers/products.reducer";

const rootReducer = combineReducers({
  count: countSlice,
});

export default rootReducer;
