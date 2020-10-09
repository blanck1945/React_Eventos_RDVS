import * as userTypes from "../actions/user_actions/user_types";
import { UserActions } from "../actions/user_actions/user_interfaces";
import { UserReducer } from "../../interfaces/Reducers/UserReducer";
import { string } from "yup";

const initialState: UserReducer = {
  userName: "",
  token: "",
  userRole: "",
  msg: "",
  isLog: false,
  email: undefined,
  userPayments: undefined,
  wishList: false,
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.LOGIN_USER:
      return {
        ...state,
        userName: action.payload.user,
        token: action.payload.token,
        userRole: window.localStorage.getItem("role"),
        msg: "",
      };
    case userTypes.LOGOUT_USER:
      return {
        ...state,
        userName: "",
        token: "",
        userRole: "",
        msg: "",
      };
    case userTypes.SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case userTypes.SET_USER_WISH_LIST:
      return {
        ...state,
        wishList: true,
      };
    case userTypes.TOOGLE_LOG_VALUE:
      return {
        ...state,
        userRole: window.localStorage.getItem("role"),
        isLog: true,
      };
    case userTypes.SET_LOGGIN_ERROR_MSG:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
};
