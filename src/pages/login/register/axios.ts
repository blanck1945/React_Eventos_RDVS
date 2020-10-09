import Axios, { AxiosResponse } from "axios";
import { Visitor, Promotor } from "../../../interfaces/state";
import {
  setUserCredentials,
  setLogginErrorMsg,
  setLogUser,
} from "../../../Redux_Store/actions/user_actions/user_actions";
import { Dispatch } from "react";
import { Action } from "redux";

const registerUrl = "http://localhost:3333/api/user/create";
const registerPromotorURL = "http://localhost:3333/api/user/create/promotor";
const loginUrl = "http://localhost:3333/api/user/login";

export const logUser = async (user: Visitor, dispatch: any) => {
  const { data } = await Axios({
    method: "post",
    url: loginUrl,
    data: user,
  });

  if (data.log === false) {
    await dispatch(setLogginErrorMsg(data.msg));
    return false;
  }
  window.localStorage.setItem("token", data.res.token.token);
  window.localStorage.setItem("user", data.res.user);
  window.localStorage.setItem("id", data.res.id);
  window.localStorage.setItem("role", data.res.role);
  await dispatch(setUserCredentials(data.res));
  await dispatch(setLogUser());
  return true;
};

export const postNewUser = async (
  user: Promotor | Visitor,
  dispatch: Dispatch<Action>
) => {
  try {
    const { data } = await Axios({
      method: "post",
      url: user.user_role === "promotor" ? registerPromotorURL : registerUrl,
      data: user,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return {
      msg: "Error",
    };
  }
};

/* await dispatch(setUserCredentials(data.res));
    await dispatch(setLogUser());
    window.localStorage.setItem("token", data.res.token.token);
    window.localStorage.setItem("user", data.res.user);
    window.localStorage.setItem("id", data.res.id);
    window.localStorage.setItem("role", data.res.user_role);
    window.localStorage.setItem("wish", data.res.wish_list);*/
