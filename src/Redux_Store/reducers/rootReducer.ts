import { combineReducers } from "redux";
import globalReducer from "./global_reducer";
import eventsReducer from "./event_reducer";
import userCredReducer from "./user_reducer";
import cartReducer from "./cart_reducer";
import wishReducer from "./wish_reducer"

export default combineReducers({
  global: globalReducer,
  events: eventsReducer,
  userCred: userCredReducer,
  cart: cartReducer,
  wish: wishReducer
});
