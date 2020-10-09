import * as globalTypes from "./types";
import { FAQS } from "../../../interfaces/Reducers/GlobalReducer";

//FAQ HANDLER
export const setGlobalFaqs = (payload: FAQS[]) => ({
  type: globalTypes.SET_GLOBAL_FAQS,
  payload,
});

export const toogleFullVar = () => ({
  type: globalTypes.TOOGLE_FULL,
});

export const toogleDisplayVar = (payload: string) => ({
  type: globalTypes.TOOGLE_DISPLAY,
  payload,
});

export const setErrors = (payload: any) => ({
  type: globalTypes.SET_ERRORS,
  payload,
});

export const toogleCountry = (payload: string) => ({
  type: globalTypes.TOOGLE_COUNTRY,
  payload,
});

export const setLoadingOn = () => ({
  type: globalTypes.LOADING_ON,
});

export const setLoadingOff = () => ({
  type: globalTypes.LOADING_OFF,
});
