import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../../interfaces/state";
import { Event_Tickets, Event_Schedule } from "../../../interfaces/EventType";
import { adonisFetchSingleEvent } from "../../../Redux_Store/actions/event_actions/axios";
import { eventItems } from "./ItemsArr";
import HomeNav from "../homeNav/HomeNav";
import Header from "../../../components/header/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./User_Single_Event.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const User_Single_Event = () => {
  const eventState = useSelector((state: GlobalState) => state.events);
  const [eventDis, setEventDis] = React.useState<string>("home");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!eventState.single_event) {
      dispatch(adonisFetchSingleEvent(2));
    }
  }, []);

  return (
    <div className="user_home">
      <div className="user_single_dis">
        <div className="up_box">
          <LazyLoadImage
            src={eventState.user_single_event?.event_img}
            alt="event_img"
            width="100%"
            effect="blur"
          />
          <Header
            header={eventState.user_single_event?.event_name}
            header_class="big_header"
          />
        </div>
        <HomeNav
          navItems={eventItems}
          filter={eventDis}
          setFilter={setEventDis}
        />
        <div className="up_center">
          {eventDis === "home" && (
            <h3>{eventState.user_single_event?.event_organizers}</h3>
          )}
          {eventDis === "tickets" &&
            eventState.user_single_event?.eventTickets.map(
              (el: Event_Tickets) =>
                el.event_tickets_types.map((ticket: string, index: number) => (
                  <h3 key={index}>{ticket}</h3>
                ))
            )}
          {eventDis === "schedule" &&
            eventState.user_single_event?.eventSchedule.map(
              (schedule: Event_Schedule) => (
                <h3 key={schedule.id}>{schedule.schedule_day}</h3>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default User_Single_Event;
