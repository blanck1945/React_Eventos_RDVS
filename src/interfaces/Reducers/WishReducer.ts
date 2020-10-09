import { AdonisEvent } from "../EventType";

export interface WishReducer {
  userWishList: AdonisEvent[];
  msg: string;
  state: boolean;
}
