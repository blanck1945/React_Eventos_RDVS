import * as cartTypes from "./types";

export const addToCart = (payload: any) => ({
  type: cartTypes.ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload: any) => ({
  type: cartTypes.REMOVE_FROM_CART,
  payload,
});
