import * as globalTypes from "../actions/global_actions/types";
import { GlobalActions } from "../actions/global_actions/interfaces";
import { Global } from "../../interfaces/Reducers/GlobalReducer";

const initialState: Global = {
  full: false,
  display: "dash",
  errors: [],
  country: "Argentina",
  loading: false,
  searchValue: undefined,
  faqs: undefined,
};

export default (state = initialState, action: GlobalActions) => {
  switch (action.type) {
    case globalTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case globalTypes.CLEAN_SEARCH_VALUE:
      return {
        ...state,
        searchValue: undefined,
      };
    case globalTypes.TOOGLE_FULL:
      return {
        ...state,
        full: !state.full,
      };
    case globalTypes.TOOGLE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case globalTypes.SET_GLOBAL_FAQS:
      return {
        ...state,
        faqs: action.payload,
      };
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
