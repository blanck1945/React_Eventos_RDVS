import * as React from "react";
import { NavLink } from "react-router-dom";

import "./Top_nav.scss";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../interfaces/state";

const Top_Nav = () => {
  const userState = useSelector((state: GlobalState) => state.userCred);

  const closeSession = async () => {
    window.localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div className="top_nav">
      <div className="nav_frame">
        <NavLink
          exact
          to=""
          className="nav_link"
          activeClassName="active_linkfe"
        >
          <h3 className="link_text">Home</h3>
        </NavLink>
        <NavLink
          to="/help"
          className="nav_link"
          activeClassName="active_linkfe"
        >
          <h3 className="link_text">Ayuda</h3>
        </NavLink>
        {userState.userRole === "usuario" && (
          <NavLink
            to="/wish"
            className="nav_link"
            activeClassName="active_linkfe"
          >
            <h3 className="link_text">Lista de deseos</h3>
          </NavLink>
        )}
        {userState.userRole === "promotor" && (
          <NavLink
            to="/promotor_dash"
            className="nav_link"
            activeClassName="active_linkfe"
          >
            <h3 className="link_text">Crear Evento</h3>
          </NavLink>
        )}
        {!userState.isLog && (
          <NavLink
            to="/login"
            className="nav_link"
            activeClassName="active_linkfe"
          >
            <h3 className="link_text">Iniciar sesión/Crear cuenta</h3>
          </NavLink>
        )}
        {userState.isLog && (
          <NavLink to="/" className="nav_link" onClick={() => closeSession()}>
            <h3 className="link_text">Cerrar sesión</h3>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Top_Nav;
