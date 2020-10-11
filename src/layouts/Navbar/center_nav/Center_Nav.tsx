import * as React from "react";
import Axios from "axios";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { eventRoutes } from "../../../Api/Routes";
import { setSearchEvents } from "../../../Redux_Store/actions/event_actions/actions";
import { useHistory } from "react-router-dom";
import { setSearchValue } from "../../../Redux_Store/actions/global_actions/actions";
import { GlobalState } from "../../../interfaces/state";
import "./Center_Nav.scss";

const Center_Nav = () => {
  const globalState = useSelector((state: GlobalState) => state.global);
  const [search, setSearch] = React.useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
  };

  const callAxios = async (search: string) => {
    const { data } = await Axios({
      method: "POST",
      url: eventRoutes.searchByName,
      data: { query: search },
    });
    setSearch("");
    await dispatch(setSearchEvents(data.result));
    await dispatch(setSearchValue(search));
    history.push("search_page");
  };

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await callAxios(search);
  };

  return (
    <div className="center_nav">
      <div className="center_frame">
        <div className="center_nav">
          <h3 className="center_text">RDVS Eventos</h3>
          <form onSubmit={(e) => handlerSubmit(e)} className="search_box_glass">
            <GiMagnifyingGlass className="glass" />
            <input
              type="text"
              placeholder="Buscar Eventos"
              name="search"
              value={search}
              onChange={(e) => handlerSearch(e)}
              className="search_inp"
            />
          </form>
          <div className="search_box">
            <button className="advance_btn btn_se">Busqueda Avanzada</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center_Nav;
