import * as React from "react";
import { TicketPrice } from "../../../../interfaces/state";
import "./Ticket_price_comp.scss";

interface TicketPriceProps {
  data: TicketPrice;
}

const TicketPriceComp = ({ data }: TicketPriceProps) => {
  return (
    <div className="price_box">
      <h3 className="price_text">{data.ticket_name}</h3>
      <h3 className="price_text">${data.ticket_price}</h3>
    </div>
  );
};

export default TicketPriceComp;
