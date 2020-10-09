import * as globalTypes from "../actions/global_actions/types";
import { GlobalActions } from "../actions/global_actions/interfaces";
import { Global } from "../../interfaces/Reducers/GlobalReducer";

const initialState: Global = {
  full: false,
  display: "dash",
  errors: [],
  country: "Argentina",
  loading: false,
  faqs: undefined,
};

export default (state = initialState, action: GlobalActions) => {
  switch (action.type) {
    case globalTypes.LOADING_ON:
      return {
        ...state,
        loading: true,
      };
    case globalTypes.LOADING_OFF:
      return {
        ...state,
        loading: false,
      };
    case globalTypes.TOOGLE_FULL:
      return {
        ...state,
        full: !state.full,
      };
    case globalTypes.TOOGLE_DISPLAY:
      return {
        ...state,
        display: action.payload,
      };
    case globalTypes.TOOGLE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
      case globalTypes.SET_GLOBAL_FAQS:
        return {
          ...state,
          faqs: action.payload
        }
    case globalTypes.SET_ERRORS:
      return {
        ...state,
        errors: [
          {
            ...state.errors,
            errorName: action.payload.message,
            errorCode: action.payload.code,
          },
        ],
      };

    default:
      return state;
  }
};
