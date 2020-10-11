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

interface SET_SEARCH_VALUE_ACTION_TYPE {
  type: typeof eventTypes.SET_SEARCH_EVENT;
  payload: AdonisEvent[];
}

interface SET_EVENTS_ACTION_TYPE {
  type: typeof eventTypes.SET_EVENTS;
  payload: AdonisEvent[];
}

interface SET_SINGLE_EVENT_ACTION {
  type: typeof eventTypes.SET_SINGLE_EVENT;
  payload: AdonisEvent;
}

interface CLEAR_SINGLE_EVENT_ACTION_TYPE {
  type: typeof eventTypes.CLEAR_SINGLE_EVENT;
}

interface POST_EVENT_ACTION_TYPE {
  type: typeof eventTypes.POST_EVENT;
  payload: FireEvent;
}

export type EventActions =
  | SET_EVENTS_ACTION_TYPE
  | POST_EVENT_ACTION_TYPE
  | SET_SINGLE_EVENT_ACTION
  | CLEAR_SINGLE_EVENT_ACTION_TYPE
  | USER_SET_EVENTS_ACTION
  | USER_SET_SINGLE_ACTION
  | SET_SEARCH_VALUE_ACTION_TYPE;
