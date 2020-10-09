import * as globalTypes from "./types";
import { FAQS } from "../../../interfaces/Reducers/GlobalReducer";

//FAQ INTERFACES
export interface SET_GLOBAL_FAQS_ACTION_TYPE {
  type: typeof globalTypes.SET_GLOBAL_FAQS;
  payload: FAQS[];
}

export interface ToogleFull {
  type: typeof globalTypes.TOOGLE_FULL;
  payload: boolean;
}

export interface ToogleDisplay {
  type: typeof globalTypes.TOOGLE_DISPLAY;
  payload: string;
}

export interface SetErrorsAction {
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
  | SetErrorsAction
  | ToogleCountry
  | TOOGLE_LOADING_ON
  | TOOGLE_LOADING_OFF
  | SET_GLOBAL_FAQS_ACTION_TYPE;
