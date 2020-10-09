import * as wishTypes from "./wish_types";
import { AdonisEvent } from "../../../interfaces/EventType";

interface GET_USER_WISH_LIST_INTERFACE {
  type: typeof wishTypes.GET_USER_WISH_LIST;
  payload: AdonisEvent[];
}

interface SET_WISH_MSG_ACTION_TYPE {
  type: typeof wishTypes.SET_WISH_MSG;
  payload: any;
}

interface DELETE_EVENT_FROM_WISH_ACTION {
  type: typeof wishTypes.DELETE_EVENT_FROM_WISH;
  payload: number;
}

export type WishActions =
  | GET_USER_WISH_LIST_INTERFACE
  | DELETE_EVENT_FROM_WISH_ACTION
  | SET_WISH_MSG_ACTION_TYPE;
