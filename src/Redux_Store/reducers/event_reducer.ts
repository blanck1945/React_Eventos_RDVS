import * as eventTypes from "../actions/event_actions/type";
import { EventActions } from "../actions/event_actions/interface";
import { EventReducer } from "../../interfaces/Reducers/EventReducer";

const initialState: EventReducer = {
  active_events: [],
  single_event: undefined,
  pass_events: [],
  user_active_events: [],
  user_single_event: undefined,
};

export default (state = initialState, action: EventActions) => {
  switch (action.type) {
    case eventTypes.SET_EVENTS:
      return {
        ...state,
        active_events: action.payload,
      };
    case eventTypes.SET_SINGLE_EVENT:
      return {
        ...state,
        user_single_event: action.payload,
      };
    case eventTypes.POST_EVENT:
      return {
        ...state,
        active_events: [...state.active_events, action.payload],
      };
    case eventTypes.CLEAR_SINGLE_EVENT:
      return {
        ...state,
        single_event: undefined,
      };
    case eventTypes.USER_SET_EVENT:
      return {
        ...state,
        user_active_events: action.payload,
      };
    default:
      return state;
  }
};
