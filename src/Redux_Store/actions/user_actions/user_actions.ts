import * as userTypes from "./user_types";
import { AdonisResponse } from "../../../interfaces/state";

export const setUserCredentials = (payload: AdonisResponse) => ({
  type: userTypes.LOGIN_USER,
  payload,
});

export const setUserEmail = (payload: string) => ({
  type: userTypes.SET_USER_EMAIL,
  payload,
});

export const setUserWish = (payload: boolean) => ({
  type: userTypes.SET_USER_WISH_LIST,
  payload,
});

export const clearUserCred = () => ({
  type: userTypes.LOGOUT_USER,
});

export const setLogUser = () => ({
  type: userTypes.TOOGLE_LOG_VALUE,
});

export const setLogginErrorMsg = (payload: string) => ({
  type: userTypes.SET_LOGGIN_ERROR_MSG,
  payload,
});
