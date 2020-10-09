import * as React from "react";
import Header from "../../../components/header/Header";
import { EventInfo, TicketsInfo } from "../../../interfaces/state";
import { getColor, getColorNum } from "./func";

interface SingleEventCardProps {
  data: EventInfo;
}

const Single_Event_Card = ({ data }: SingleEventCardProps) => {
  return (
    <>
      <div className="event_data">
        <Header header={`${data.event_day}`} />
      </div>
      <div className="tickets_div">
        <div className="total_tickets">
          <Header
            header="Entradas Totales"
            text_class="font_small"
            header_class={"custom_class"}
          />
          {data.event_amount_tickets.map((el: any) => (
            <div key={el.tickets_name} className="ticket_data">
              <h3 className="event_text">{el.tickets_name}</h3>
              <h3 className="event_text">{el.tickets_amount}</h3>
            </div>
          ))}
        </div>
        <div className="total_tickets">
          <Header
            header="Entradas Vendidas"
            text_class="font_small"
            header_class={"custom_class"}
          />
          {data.event_amount_tickets.map((el: any, index: number) => (
            <div key={el.tickets_name} className="ticket_data">
              <h3 className="event_text">
                {index === 0 ? "Disponibles" : el.tickets_name}
              </h3>
              <h3
                style={
                  index === 0
                    ? {
                        backgroundColor: `${getColorNum(
                          el.tickets_sell,
                          el.tickets_amount
                        )}`,
                        padding: "0px 4px",
                        color: "white",
                      }
                    : {
                        color: `${getColor(
                          el.tickets_sell,
                          el.tickets_amount
                        )}`,
                      }
                }
                className="event_text"
              >
                {el.tickets_sell}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Single_Event_Card;
