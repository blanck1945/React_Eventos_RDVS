import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Event_Card.scss";
import { AdonisEvent } from "../../../interfaces/EventType";

interface EventCard {
  data: AdonisEvent;
}

const Event_Card = ({ data }: EventCard) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const enterEvent = async (id: number) => {
    //await dispatch(SingleEventFiresore(id));
    history.push("/single_event");
  };

  return (
    <div className="event_card">
      <div className="event_header">
        <h2 className="header_label">{data.event_name}</h2>
        <h3 className="header_text"></h3>
        <h3 className="header_text">
          Location: {data.event_city} - {data.event_country}
        </h3>
      </div>
      <img src={data.event_img} alt="data_img" className="data_img" />
      <button className="event_btn" onClick={() => enterEvent(data.id)}>
        Entrar al Evento
      </button>
    </div>
  );
};

export default Event_Card;
