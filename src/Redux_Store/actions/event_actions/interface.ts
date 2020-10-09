import * as eventTypes from "./type";
import { FireEvent } from "../../../interfaces/state";
import { NewImg } from "../../../pages/user_views_apges/componets/new_shows/news_arr";
import { AdonisEvent } from "../../../interfaces/EventType";

interface USER_SET_EVENTS_ACTION {
  type: typeof eventTypes.USER_SET_EVENT;
  payload: NewImg[];
}

interface USER_SET_SINGLE_ACTION {
  type: typeof eventTypes.USER_SINGLE_EVENT;
  payload: NewImg;
}

interface SetEvents {
  type: typeof eventTypes.SET_EVENTS;
  payload: AdonisEvent[];
}

interface SET_SINGLE_EVENT_ACTION {
  type: typeof eventTypes.SET_SINGLE_EVENT;
  payload: AdonisEvent;
}

interface ClearSingleEvent {
  type: typeof eventTypes.CLEAR_SINGLE_EVENT;
}

interface PostEvent {
  type: typeof eventTypes.POST_EVENT;
  payload: FireEvent;
}

export type EventActions =
  | SetEvents
  | PostEvent
  | SET_SINGLE_EVENT_ACTION
  | ClearSingleEvent
  | USER_SET_EVENTS_ACTION
  | USER_SET_SINGLE_ACTION;
