import Axios from "axios";
import { Visitor } from "../../../interfaces/state";
import { Dispatch } from "react";
import { Action } from "redux";
import {
  setUserCredentials,
  setLogginErrorMsg,
  setUserWish,
} from "./user_actions";
import { wishRoutes, userRoutes } from "../../../Api/Routes";
import { setWishMsg } from "../wish_actions/wish_actions";

const loginUrl = "http://localhost:3333/api/user/login";

export const loginUser = (user: Visitor) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios({
        method: "post",
        url: loginUrl,
        data: user,
      });
      await dispatch(setUserCredentials(data.res));
      return {
        msg: "User log",
        data,
      };
    } catch (err) {
      await dispatch(setLogginErrorMsg(err.res.msg));
      console.log(err.res);
    }
  };
};

export const addEventToUserList = (
  id: number,
  userId: number,
  Route: string
) => {
  return async (dispatch: Dispatch<Action<string>>) => {
    try {
      const { data } = await Axios({
        method: "POST",
        url: Route + userId,
        data: { eventId: id },
      });
      await dispatch(setWishMsg(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const toogleWishList = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios({
        method: "PATCH",
        url: userRoutes.toogleWishURL + id,
      });
      await dispatch(setUserWish(data));
    } catch (err) {
      console.log(err);
    }
  };
};
