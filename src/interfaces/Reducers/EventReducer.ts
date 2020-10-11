import { AdonisEvent } from "../EventType";

export interface EventReducer {
  active_events: AdonisEvent[];
  search_events: AdonisEvent[];
  single_event: AdonisEvent;
  pass_events: AdonisEvent[];
  user_active_events: AdonisEvent[];
  user_single_event: AdonisEvent;
}
