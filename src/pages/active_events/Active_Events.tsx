import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../interfaces/state";
import Header from "../../components/header/Header";
import Event_Card from "./Event_Card/Event_Card";

import "./Active_Events.scss";

const Active_Events = () => {
  const dispatch = useDispatch();
  const { active_events } = useSelector((state: GlobalState) => state.events);

  React.useEffect(() => {
    //dispatch(setData());
  }, []);

  return (
    <div className="dash ">
      <Header header="Active Events" />
      <div className="active_box">
        {active_events.map((el) => (
          <Event_Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Active_Events;
