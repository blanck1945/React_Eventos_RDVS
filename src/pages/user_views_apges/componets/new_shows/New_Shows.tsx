import * as React from "react";
import Header from "../../../../components/header/Header";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adonisFetchSingleEvent } from "../../../../Redux_Store/actions/event_actions/axios";
import { AdonisEvent } from "../../../../interfaces/EventType";
import {
  addEventToUserList,
  toogleWishList,
} from "../../../../Redux_Store/actions/user_actions/axios";
import { localVar } from "../../../../Api/localStorage";
import "react-toastify/dist/ReactToastify.css";
import "./New_Show.scss";
import { GlobalState } from "../../../../interfaces/state";
import { wishRoutes } from "../../../../Api/Routes";
import { callToast } from "./func";
import Axios from "axios";

interface NewsShowsProps {
  data: AdonisEvent[];
  header: string;
  overflow?: boolean;
}

const New_Shows = ({ data, header, overflow }: NewsShowsProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((state: GlobalState) => state.userCred);
  const maxLenght = 31;

  const selectEventSingle = async (id: number) => {
    await dispatch(adonisFetchSingleEvent(id));
    history.push("/user_single");
  };

  const addToList = async (id: number) => {
    if (!localVar.token) {
      return callToast({
        state: false,
        toast: "noUser",
        msg: "Inicie Sesión para agregar eventos",
      });
    }
    if (!userState.wishList) {
      await dispatch(
        addEventToUserList(id, localVar.id, wishRoutes.userCreateWishListURL)
      );
      await dispatch(toogleWishList(localVar.id));
      return false;
    }

    const { data } = await Axios.get(
      wishRoutes.checkDuplicate + id + "/" + localVar.id
    );
    if (data.state) {
      await dispatch(
        addEventToUserList(id, localVar.id, wishRoutes.userAddWishListURL)
      );
    }

    return callToast(data);
  };

  return (
    <div className="news_box">
      <>
        <Header header={header + ` - ${data.length}`} />
        <div className={overflow ? "overflow card_box" : "card_box"}>
          {data.map((el: AdonisEvent) => (
            <div className="new_card" key={el.id}>
              <img
                src={el.event_img}
                alt="image"
                className="event_img"
                onClick={() => selectEventSingle(el.id)}
              />
              <h3 className="event_title_text">
                {overflow
                  ? el.event_name.substring(0, maxLenght)
                  : el.event_name}
              </h3>
              <div
                className="event_info_box"
                onClick={() => selectEventSingle(el.id)}
              >
                <h3 className="event_text">
                  {el.event_week_day}, {el.event_dates[0].slice(0, 2)} de{" "}
                  {el.event_month} de {el.event_dates[0].slice(0, 4)}
                </h3>
                <h3 className="event_text">Desde las {el.event_start}</h3>
              </div>
              <div className="social_box">
                <AiOutlineShareAlt className="social_icon share" />
                <RiAddCircleFill className="social_icon cart"/>
                <AiOutlineHeart
                  className="social_icon heart"
                  onClick={() => {
                    addToList(el.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default New_Shows;
