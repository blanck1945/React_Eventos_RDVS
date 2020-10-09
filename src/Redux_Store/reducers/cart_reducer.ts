import * as cartTypes from "../actions/cart_actions/types";
import { Cart } from "../../interfaces/state";
import { CartActions } from "../actions/cart_actions/interfaces";

const initialState: Cart = {
  cart: [],
  total: 0,
};

export default (state = initialState, action: CartActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
