import * as globalTypes from "./types";
import { FAQS } from "../../../interfaces/Reducers/GlobalReducer";

//FAQ INTERFACES
export interface SET_GLOBAL_FAQS_ACTION_TYPE {
  type: typeof globalTypes.SET_GLOBAL_FAQS;
  payload: FAQS[];
}

export interface SET_SEARCH_VALUE {
  type: typeof globalTypes.SET_SEARCH_VALUE;
  payload: string;
}

export interface CLEAN_SEARCH_VALLUE_ACTION_TYPE {
  type: typeof globalTypes.CLEAN_SEARCH_VALUE;
}

export interface ToogleFull {
  type: typeof globalTypes.TOOGLE_FULL;
  payload: boolean;
}

export interface ToogleDisplay {
  type: typeof globalTypes.TOOGLE_DISPLAY;
  payload: string;
}

export interface SET_ERROR_ACTION_TYPE {
  type: typeof globalTypes.SET_ERRORS;
  payload: any;
}

export interface ToogleCountry {
  type: typeof globalTypes.TOOGLE_COUNTRY;
  payload: string;
}

export interface TOOGLE_LOADING_ON {
  type: typeof globalTypes.LOADING_ON;
}

export interface TOOGLE_LOADING_OFF {
  type: typeof globalTypes.LOADING_OFF;
}

export type GlobalActions =
  | ToogleFull
  | ToogleDisplay
  | SET_ERROR_ACTION_TYPE
  | ToogleCountry
  | TOOGLE_LOADING_ON
  | TOOGLE_LOADING_OFF
  | SET_GLOBAL_FAQS_ACTION_TYPE
  | SET_SEARCH_VALUE
  | CLEAN_SEARCH_VALLUE_ACTION_TYPE;
