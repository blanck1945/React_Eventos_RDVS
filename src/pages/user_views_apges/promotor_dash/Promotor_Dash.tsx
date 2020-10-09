import * as React from "react";
import Aside_Comp from "../../home/components/Aside_Comp/Aside_Comp";
import Promotor_Home from "./promotor_home/Promotor_Home";
import Promotor_Active from "./promotor_active/Promotor_Active";
import Promotor_Past from "./promotor_past/Promotor_Past";
import Formik_Comp from "./form/Formik_Comp";
import "./Promotor_Dash.scss";

const Promotor_Dash = () => {
  const [promotoDis, setPromotorDis] = React.useState<string>("home");

  return (
    <div className="user_home">
      <div className="promotor_home">
        <div className="promotor_aside">
          <div className="promotor_comp">
            <div
              className={
                promotoDis === "home" ? "active_select" : "active_class"
              }
            ></div>
            <Aside_Comp
              label="Bienvenido Promotor"
              label_class="aside_item metal"
              func={setPromotorDis}
              funcQuery="home"
              stateHome={promotoDis}
            />
          </div>
          <div className="promotor_comp">
            <div
              className={
                promotoDis === "active" ? "active_select" : "active_class"
              }
            ></div>
            <Aside_Comp
              label="Eventos Activos"
              label_class="aside_item light_me"
              func={setPromotorDis}
              funcQuery="active"
              stateHome={promotoDis}
            />
          </div>
          <div className="promotor_comp">
            <div
              className={
                promotoDis === "past" ? "active_select" : "active_class"
              }
            ></div>
            <Aside_Comp
              label="Eventos Pasados"
              label_class="aside_item light_me"
              func={setPromotorDis}
              funcQuery="past"
              stateHome={promotoDis}
            />
          </div>
          <div className="promotor_comp">
            <div
              className={
                promotoDis === "create" ? "active_select" : "active_class"
              }
            ></div>
            <Aside_Comp
              label="Crear Evento"
              label_class="aside_item light_me"
              func={setPromotorDis}
              funcQuery="create"
              stateHome={promotoDis}
            />
          </div>
        </div>
        <div className="promotor_center">
          {promotoDis === "home" && <Promotor_Home />}
          {promotoDis === "active" && <Promotor_Active />}
          {promotoDis === "past" && <Promotor_Past />}
          {promotoDis === "create" && <Formik_Comp />}
        </div>
      </div>
    </div>
  );
};

export default Promotor_Dash;
