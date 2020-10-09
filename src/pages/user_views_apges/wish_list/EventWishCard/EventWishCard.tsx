import * as React from "react";
import { AdonisEvent } from "../../../../interfaces/EventType";

import "./EventWishCard.scss";
import { useDispatch } from "react-redux";
import { deleteEventoFromAdonisWish } from "../../../../Redux_Store/actions/wish_actions/wish_axios";
import { callToast } from "../../componets/new_shows/func";

interface EventWishCardProps {
  data: AdonisEvent;
}

const EventWishCard = ({ data }: EventWishCardProps) => {
  const dispatch = useDispatch();

  const deleteEvent = async (id: number) => {
    const userId = window.localStorage.getItem("id");
    await dispatch(deleteEventoFromAdonisWish(id, parseInt(userId)));
    callToast({
      state:false,
      toast: "delete",
      msg: "Elemento eliminado de su lista"
    })
  };

  return (
    <div className="event_wish_div">
      <div className="event_wish_card">
        <img src={data.event_img} alt="photo" className="event_img" />
        <div className="center_card">
          <h3>{data.event_name}</h3>
          <h4 className="center_sub_text">{data.event_type}</h4>
          <h4 className="center_sub_text">{data.event_category}</h4>
        </div>
        <div className="date_card">
          <h3>
            {data.event_week_day}, {data.event_dates[0].slice(0, 2)} de{" "}
            {data.event_month} de {data.event_dates[0].slice(-4)}
          </h3>
          <h4 className="event_text">Desde las {data.event_start}</h4>
        </div>
      </div>
      <div className="delete_bar" onClick={() => deleteEvent(data.id)}>
        Quitar Evento
      </div>
    </div>
  );
};

export default EventWishCard;
