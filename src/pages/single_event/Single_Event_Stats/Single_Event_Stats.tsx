import * as React from "react";
import Header from "../../../components/header/Header";

import "./Single_Event_Stats.scss";
import {
  FireEvent,
  EventInfo,
  PaymentMode,
  TicketPrice,
} from "../../../interfaces/state";
import { timeArr } from "./timeArr";
import TicketPriceComp from "./Ticket_price/Ticket_price_comp";
import { AdonisEvent } from "../../../interfaces/EventType";

interface SingleEventStatsProps {
  data: AdonisEvent;
}

const Single_Event_Stats = ({ data }: SingleEventStatsProps) => {
  const [filter1, setFilter1] = React.useState<any>(
    data.event_dates.filter((el: string, index: number) =>
      index === 0 ? el[0] : null
    )
  );
  const [filter2, setFilter2] = React.useState<string>("Filtro2");
  const [filter3, setFilter3] = React.useState<string>("Filtro3");

  return (
    <div className="event_stats">
      <div>
        <div className="filter_box">
          <div>
            <select
              name="evento"
              value={filter1}
              onChange={(e) => setFilter1(e.target.value)}
            >
              {data.event_dates.map((el: string, index: number) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="time"
              value={filter2}
              onChange={(e) => setFilter2(e.target.value)}
            >
              {timeArr.map((el: string, index: number) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="pago"
              value={filter3}
              onChange={(e) => setFilter3(e.target.value)}
            ></select>
          </div>
        </div>
        <div className="stats_div">
          <Header
            header={`Filtros - ${filter1} - ${filter2} - ${filter3}`}
            header_class="width_li"
          />
          <div className="stats_center">
            <div className="stats_box">
              <h3>Nombre del Evento: {data.event_name}</h3>
              <h3>Ubicación del Evento: {data.event_country}</h3>
              <h3>Fecha de Publicación: {data.event_publish}</h3>
              <h3>Ventas en las ultimas 24 horas: </h3>
              <h3>Ventas en la ultima semana: </h3>
              <h3>Ventas desde el inico de publicación</h3>
            </div>
            <div className="stats_box">
              <h3>
                Evento cuenta con Descuento: {data.event_discount ? "Si" : "No"}
              </h3>
              <h3>
                Porcentaje de descuento:{" "}
                {data.event_discount_per !== 0
                  ? data.event_discount_per
                  : "Sin Descuento"}
              </h3>
              <div>
                <Header header="Entradas y Precio" />
                {data.event_tickets_price.map((el: any) => (
                  <TicketPriceComp data={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_Event_Stats;
