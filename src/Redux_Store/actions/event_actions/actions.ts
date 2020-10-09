import * as eventTypes from "./type";
import { FireEvent } from "../../../interfaces/state";
import { NewImg } from "../../../pages/user_views_apges/componets/new_shows/news_arr";
import { AdonisEvent } from "../../../interfaces/EventType";

export const setUserEventData = (payload: NewImg[]) => ({
  type: eventTypes.USER_SET_EVENT,
  payload,
});

export const setUserSingleData = (payload: NewImg) => ({
  type: eventTypes.USER_SINGLE_EVENT,
  payload,
});

export const setEventData = (payload: AdonisEvent[]) => ({
  type: eventTypes.SET_EVENTS,
  payload,
});

export const setSingleEvent = (payload: AdonisEvent) => ({
  type: eventTypes.SET_SINGLE_EVENT,
  payload,
});

export const postEventData = (payload: FireEvent) => ({
  type: eventTypes.POST_EVENT,
  payload,
});

export const clearSingleData = () => ({
  type: eventTypes.CLEAR_SINGLE_EVENT,
});
