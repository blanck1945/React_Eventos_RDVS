import * as userTypes from "./user_types";
import { AdonisResponse } from "../../../interfaces/state";

export interface LOGIN_USER_ACTION {
  type: typeof userTypes.LOGIN_USER;
  payload: AdonisResponse;
}

export interface SET_USER_EMAIL_ACTION_TYPE {
  type: typeof userTypes.SET_USER_EMAIL;
  payload: string;
}

export interface SET_USER_WISH_LIST_ACTION_TYPE {
  type: typeof userTypes.SET_USER_WISH_LIST;
  payload: boolean;
}

export interface LOGOUT_USER_ACTION {
  type: typeof userTypes.LOGOUT_USER;
}

export interface IS_LOG_USER_ACTION {
  type: typeof userTypes.TOOGLE_LOG_VALUE;
}

export interface SET_LOG_ERROR_MSG_ACTION {
  type: typeof userTypes.SET_LOGGIN_ERROR_MSG;
  payload: string;
}

export type UserActions =
  | LOGIN_USER_ACTION
  | LOGOUT_USER_ACTION
  | IS_LOG_USER_ACTION
  | SET_LOG_ERROR_MSG_ACTION
  | SET_USER_EMAIL_ACTION_TYPE
  | SET_USER_WISH_LIST_ACTION_TYPE;
