import Axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { setUserWishList, deleteEventFromUserWish } from "./wish_actions";
import { wishRoutes } from "../../../Api/Routes";

export const fetchWishList = (id: number) => {
  return async (dispatch: Dispatch<Action<string>>) => {
    try {
      const { data } = await Axios.get(wishRoutes.wishUrl + id);
      await dispatch(setUserWishList(data.userWishList));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteEventoFromAdonisWish = (id: number, userId: number) => {
  return async (dispatch: Dispatch<Action<string>>) => {
    try {
      await Axios({
        method: "PATCH",
        url: wishRoutes.deleteWishUrl + userId,
        data: { eventId: id },
      });
      await dispatch(deleteEventFromUserWish(id));
    } catch (err) {
      console.log(err);
    }
  };
};
