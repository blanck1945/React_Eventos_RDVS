import * as wishTypes from "../actions/wish_actions/wish_types";
import { WishActions } from "../actions/wish_actions/wish_interfaces";
import { AdonisEvent } from "../../interfaces/EventType";

const initialState: any = {
  userWishList: [],
  msg: undefined,
  state: undefined,
};

export default (state = initialState, action: WishActions) => {
  switch (action.type) {
    case wishTypes.GET_USER_WISH_LIST:
      return {
        ...state,
        userWishList: action.payload,
      };
    case wishTypes.DELETE_EVENT_FROM_WISH:
      return {
        ...state,
        userWishList: state.userWishList.filter((el: AdonisEvent) =>
          el.id !== action.payload ? el : null
        ),
      };
    case wishTypes.SET_WISH_MSG:
      return {
        ...state,
        msg: action.payload.msg,
        state: action.payload.state,
      };
    default:
      return state;
  }
};
