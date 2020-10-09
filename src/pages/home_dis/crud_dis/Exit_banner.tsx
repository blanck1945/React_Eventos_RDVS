import * as React from "react";
import { FireEvent } from "../../../interfaces/state";

interface ExitBannerProps {
  eventData: FireEvent;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const Exit_banner = ({ eventData, setCreate }: ExitBannerProps) => {
  return (
    <div>
      <div className="succ_div">
        <h3>Evento Creado con Exito</h3>
        <div className="event_info">
          <h3>{eventData.event_name}</h3>
          <h3>
            {eventData.event_day} - {eventData.event_month} -{" "}
            {eventData.event_year}
          </h3>
          <h3>
            {eventData.event_month} - {eventData.event_city}
          </h3>
        </div>
      </div>
      <button className="general_btn" onClick={() => setCreate(false)}>
        Crear otro Evento
      </button>
    </div>
  );
};

export default Exit_banner;
