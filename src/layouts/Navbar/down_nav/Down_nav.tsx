import * as React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import Down_Item from "./Down_Item";
import { FaTicketAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../interfaces/state";
import "./Down_nav.scss";

const Down_nav = () => {
  const globalState = useSelector((state: GlobalState) => state.global);
  const cartState = useSelector((state: GlobalState) => state.cart);

  return (
    <div className="down_nav">
      <div className="down_frame">
        <div className="down_left">
          <Down_Item
            label="Categorias"
            iconOn={true}
            Icon={<FaArrowCircleDown className="icon" />}
          />
          <Down_Item label="Más vendidos" />
          <Down_Item label="Proximamente" />
          <Down_Item label="Nuevo eventos" />
        </div>
        <div className="down_right">
          <Down_Item
            label={globalState.country}
            iconOn={true}
            Icon={<FaArrowCircleDown className="icon" />}
          />
          <Down_Item label="$ARS" />
          <div className="money_box">
            <h3 className="total_text">ARS$ {cartState.total.toFixed(2)}</h3>
            <h3 className="total_text total_text_div">
              {cartState.cart.length}
              <FaTicketAlt />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Down_nav;
