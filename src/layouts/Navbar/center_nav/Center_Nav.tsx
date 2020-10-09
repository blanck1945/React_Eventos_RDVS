import * as React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

import "./Center_Nav.scss";

const Center_Nav = () => {
  return (
    <div className="center_nav">
      <div className="center_frame">
        <div className="center_nav">
          <h3 className="center_text">RDVS Eventos</h3>
          <div className="search_box_glass">
            <GiMagnifyingGlass className="glass" />
            <input
              type="text"
              placeholder="Buscar Eventos"
              className="search_inp"
            />
          </div>
          <div className="search_box">
            <button className="search_btn btn_se">Buscar</button>
            <button className="advance_btn btn_se">Busqueda Avanzada</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center_Nav;
