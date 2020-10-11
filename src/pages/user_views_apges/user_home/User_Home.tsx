import * as React from "react";
import New_Shows from "../componets/new_shows/New_Shows";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../../interfaces/state";
import {
  filterByCategory,
  filterByFree,
  getRandom3,
  filterByType,
} from "./utils/func";
import { FetchAllEvents } from "../../../Redux_Store/actions/event_actions/axios";
import HomeNav from "../homeNav/HomeNav";
import { AdonisEvent } from "../../../interfaces/EventType";
import {
  setLogUser,
  setUserWish,
} from "../../../Redux_Store/actions/user_actions/user_actions";
import { navItems, categoryItems, typeItems } from "./utils/NavItems";
import { localVar } from "../../../Api/localStorage";
import Loader from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import Axios from "axios";
import { eventRoutes } from "../../../Api/Routes";

import "./User_Home.scss";
import useSWR from "swr";
import { setEventData } from "../../../Redux_Store/actions/event_actions/actions";

interface UserHomeProps {
  activeEvents: AdonisEvent[];
}

toast.configure();

const AxiosFetchAllEvents = async (url: string) => {
  const { data } = await Axios.get(url);
  console.log(data);
  return data;
};

const User_Home = ({ activeEvents }: UserHomeProps) => {
  const eventState = useSelector((state: GlobalState) => state.events);
  const userState = useSelector((state: GlobalState) => state.userCred);
  const [homeDis, setHomeDis] = React.useState<string>("Todos");
  const [homeType, setHomeType] = React.useState<string>("Obra");
  const [homeCategory, setHomeCategory] = React.useState<string>("Conferencia");
  const [openHeader, setOpenHeader] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(0);
  const [random, setRandom] = React.useState<AdonisEvent[]>(undefined);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkLogUser = async () => {
      dispatch(setUserWish(true));
      dispatch(setLogUser());
    };
    if (localVar.token && !userState.isLog) {
      checkLogUser();
    }
  }, []);

  React.useEffect(() => {
    if (counter === 0) {
      setCounter(1);
    }
  }, [counter]);

  const { data: events } = useSWR(eventRoutes.FetchURL, AxiosFetchAllEvents, {
    onSuccess: (data) => {
      dispatch(setEventData(data));
    },
  });

  const openState = {
    openHeader,
    setOpenHeader,
  };

  return (
    <div className="user_home">
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
      />
      <div className="home_dis_home">
        <HomeNav
          open={openState}
          navItems={navItems}
          filter={homeDis}
          setFilter={setHomeDis}
        />
        <div className="show_carro">
          {events !== undefined ? (
            <>
              {
                <New_Shows
                  data={
                    homeDis === "Todos"
                      ? events
                      : homeDis === "Gratuitos"
                      ? filterByFree(events, true)
                      : filterByFree(events, false)
                  }
                  header={homeDis}
                />
              }
              <HomeNav
                open={openState}
                navItems={typeItems}
                filter={homeType}
                setFilter={setHomeType}
              />
              {
                <New_Shows
                  data={filterByCategory(events, homeType)}
                  header={homeType}
                />
              }
              <HomeNav
                open={openState}
                navItems={categoryItems}
                filter={homeCategory}
                setFilter={setHomeCategory}
              />
              {
                <New_Shows
                  data={filterByType(events, homeCategory)}
                  header={homeCategory}
                />
              }
              {
                <New_Shows
                  data={filterByFree(events, true)}
                  header="Gratuitos"
                />
              }

              <New_Shows
                data={filterByCategory(eventState.active_events, "Conferencia")}
                header="Conferencia"
              />
              {homeDis === "Pagos" && (
                <New_Shows data={filterByFree(events, false)} header="Pagos" />
              )}
              <New_Shows
                data={filterByCategory(events, "Expresión Artistica")}
                header="Expresión Artistica"
              />
              <New_Shows
                data={filterByCategory(events, "Stream")}
                header="Stream"
              />
            </>
          ) : (
            <div className="loader_div">
              <Loader
                type="Grid"
                color="rgb(23, 66, 109)"
                height={80}
                width={80}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User_Home;

/*  <New_Shows
          data={filterByCategory(eventState.active_events, "Sociales")}
          header="Sociales"
        />
        <New_Shows
          data={filterByCategory(eventState.active_events, "Tecnologia")}
          header="Tecnología"
        />
        */

/*
           <New_Shows
          data={promiseInProgress ? eventState?.active_events : null}
          header="Nuevos Eventos"
          overflow={true}
        />*/

/*
         <New_Shows
          data={
            promiseInProgress
              ? filterByCategory(eventState.active_events, "Drama")
              : null
          }
          header="Arte"
        />*/

/*
         <New_Shows
            data={
              promiseInProgress
                ? null
                : filterByCategory(eventState.active_events, "Drama")
            }
            header="Arte"

            <New_Shows data={activeEvents} header="Arte" />
          />*/
