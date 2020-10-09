import Axios, { Method } from "axios";
import { setEventData, setSingleEvent } from "./actions";
import { Action, Dispatch } from "redux";
import { eventRoutes } from "../../../Api/Routes";

const callAxios = async (url: string, id: string | number = "") => {
  return await Axios.get(url + `${id}`);
};

export const FetchAllEvents = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(eventRoutes.FetchURL);
      console.log(data);
      await dispatch(setEventData(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const adonisFetchSingleEvent = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await callAxios(eventRoutes.FetchURL, id);
      await dispatch(setSingleEvent(data));
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const adonisCreateEvent = (event: any) => {
  return async (dispatch: Dispatch<Action<string>>) => {
    try {
      const { data } = await Axios({
        method: "POST",
        url: eventRoutes.creatEventURL,
        data: event,
      });
      console.log(data);
      //await FetchAllEvents();
    } catch (err) {
      console.log(err.response);
    }
  };
};
