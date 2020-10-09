import * as React from "react";

import "./Home_Page.scss";
import Aside_Comp from "./components/Aside_Comp/Aside_Comp";
import Dash from "../dash/Dash";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../interfaces/state";
import {
  toogleDisplayVar,
  toogleFullVar,
} from "../../Redux_Store/actions/global_actions/actions";
import Active_Events from "../active_events/Active_Events";
import User from "../user/User";
import Past_Events from "../home_dis/past_events/Past_Events";
import Crud from "../home_dis/Crud";

export const Home_Page = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state: GlobalState) => state.global);
  const userState = useSelector((state: GlobalState) => state.userCred);

  const homeDis = (value: string) => {
    dispatch(toogleDisplayVar(value));
  };

  React.useEffect(() => {
    if (globalState.full) {
      dispatch(toogleFullVar());
    }
  }, [globalState.full]);

  console.log(userState);

  return (
    <div className="home_page">
      <div className="home_aside">
        <div className="aside top_bor">
          <Aside_Comp
            label={userState.userName}
            query="user"
            label_class="aside_item metal"
            func={homeDis}
          />
          <Aside_Comp
            label="Dashboard"
            query="dash"
            label_class="aside_item metal"
            func={homeDis}
          />
          <Aside_Comp
            label="Eventos Activos"
            query="active"
            func={homeDis}
            label_class="aside_item metal"
          />
          <Aside_Comp
            label="Eventos Pasados"
            query="past"
            func={homeDis}
            label_class="aside_item metal"
          />
          <Aside_Comp
            label="CRUD eventos"
            query="crud"
            func={homeDis}
            label_class="aside_item metal"
          />
        </div>
        <div className="aside">
          <Aside_Comp label="React" label_class="aside_item react" />
          <Aside_Comp label="Redux" label_class="aside_item redux" />
          <Aside_Comp label="Firebase" label_class="aside_item firebase" />
        </div>
      </div>
      <div className="home_center">
        {globalState.display === "user" && <User />}
        {globalState.display === "dash" && <Dash />}
        {globalState.display === "active" && <Active_Events />}
        {globalState.display === "past" && <Past_Events />}
        {globalState.display === "crud" && <Crud />}
      </div>
    </div>
  );
};
