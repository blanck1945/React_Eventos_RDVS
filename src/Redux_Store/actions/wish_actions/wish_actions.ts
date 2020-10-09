import * as wishTypes from "./wish_types";
import { AdonisEvent } from "../../../interfaces/EventType";

export const setUserWishList = (payload: AdonisEvent[]) => ({
  type: wishTypes.GET_USER_WISH_LIST,
  payload,
});

export const setWishMsg = (payload: any) => ({
  type: wishTypes.SET_WISH_MSG,
  payload,
});

export const deleteEventFromUserWish = (payload: number) => ({
  type: wishTypes.DELETE_EVENT_FROM_WISH,
  payload,
});
