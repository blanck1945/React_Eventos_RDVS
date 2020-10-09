import * as cartTypes from "./types";

interface ADD_ELEMENT {
  type: typeof cartTypes.ADD_TO_CART;
  payload: any;
}

interface REMOVE_ELEMENT {
  type: typeof cartTypes.REMOVE_FROM_CART;
  payload: any;
}

export type CartActions = ADD_ELEMENT | REMOVE_ELEMENT;
