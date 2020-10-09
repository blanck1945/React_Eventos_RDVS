import * as React from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../interfaces/state";

const General = () => {
  const eventsState = useSelector((state: GlobalState) => state.events);

  return (
    <div className="general_box">
      <h3 className="general_text">
        Active Events: {eventsState.active_events.length}
      </h3>
      <h3 className="general_text">
        Past Events: {eventsState.pass_events.length}
      </h3>
    </div>
  );
};

export default General;
