import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState, EventInfo } from "../../interfaces/state";
import { toogleFullVar } from "../../Redux_Store/actions/global_actions/actions";
import Header from "../../components/header/Header";
import { clearSingleData } from "../../Redux_Store/actions/event_actions/actions";

import "./Single_Event.scss";
import Single_Event_Card from "./Single_Event_Card/Single_Event_Card";
import { referenceArr } from "./Single_Event_Card/func";
import Single_Event_Stats from "./Single_Event_Stats/Single_Event_Stats";
import { useHistory } from "react-router-dom";

const Single_Event = () => {
  const history = useHistory();
  const dispatch = useDispatch;
  const globalState = useSelector((state: GlobalState) => state.global);
  const eventState = useSelector((state: GlobalState) => state.events);

  const returnToBase = () => {
    //dispatch(clearSingleData());
    history.push("/dash");
  };

  return (
    <div className="single_event_box">
      <Header header={eventState.single_event?.event_name} />
      <div className="event_div">
        <img
          src={eventState.single_event?.event_img}
          alt="event_img"
          className="event_img"
        />
        <div className="desc_box"></div>
        <div className="select_box">
          <div className="select_div">
            <div className="form_select">
              <Header header="Selecione el Día" />
              <ul className="filter_div">
                {eventState.single_event.event_dates.map(
                  (el: string, index: number) => (
                    <li className="input_text">{el}</li>
                  )
                )}
              </ul>
            </div>
            <div className="form_select">
              <Header header="Selecione la Entrada" />
              <ul className="filter_div">
                {eventState.single_event.event_tickets_types.map(
                  (el: string, index: number) => (
                    <li className="input_text">{el}</li>
                  )
                )}
              </ul>
            </div>
            <div className="form_select">
              <Header header="Referencias" />
              <div className="filter_div">
                <div className="filter_box row">
                  {referenceArr.map((el: any) => (
                    <>
                      <h3
                        className="input_text marPad"
                        key={el.referenceName}
                        style={{ backgroundColor: el.referenceClass }}
                      >
                        {el.referenceName}
                      </h3>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="select_div"></div>
        </div>
      </div>
      <Single_Event_Stats data={eventState.single_event} />
      <button onClick={() => returnToBase()} className="general_btn">
        return to {globalState.display}
      </button>
    </div>
  );
};

export default Single_Event;
