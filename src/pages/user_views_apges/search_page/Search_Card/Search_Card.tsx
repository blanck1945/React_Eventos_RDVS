import * as React from "react";
import { AdonisEvent } from "../../../../interfaces/EventType";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Search_Card.scss";
import Header from "../../../../components/header/Header";

interface SearchCardProps {
  data: AdonisEvent;
}

const Search_Card = ({ data }: SearchCardProps) => {
  return (
    <div className="card_search_box">
      <Header header={data.event_name} header_class="header_card" />
      <div className="search_card">
        <div className="card_right">
          <h4 className="right_header">Tipo y Categoria</h4>
          <h3 className="right_item">{data.event_type}</h3>
          <h3 className="right_item">{data.event_category}</h3>
        </div>
        <div className="card_center">
          <h4 className="center_header">Organizadores</h4>
          {data.event_organizers.map((organizer: string, index: number) =>
            index > 2 ? null : (
              <h4 className="event_item" key={index}>
                {organizer}
              </h4>
            )
          )}
          {data.event_organizers.length >= 3 && <h4 className="plus">Mas +</h4>}
        </div>
        <div className="card_center">
          <h4 className="center_header">Particpantes</h4>
          {data.event_participants.map((particpant: string, index: number) =>
            index > 2 ? null : (
              <h4 className="event_item" key={index}>
                {particpant}
              </h4>
            )
          )}
          {data.event_participants.length >= 3 && (
            <h4 className="plus">Mas +</h4>
          )}
        </div>
        <LazyLoadImage
          alt="img"
          src={data.event_img}
          effect="blur"
          className="card_img"
        />
      </div>
    </div>
  );
};

export default Search_Card;
