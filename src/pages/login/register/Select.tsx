import * as React from "react";
import Btn_Div from "./selectComp/Btn_Div";

import "./Select.scss";

interface SelectProps {
  setRegisterValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ setRegisterValue }: SelectProps) => {
  return (
    <div className="select_form">
      <h3 className="select_title">
        Por favor, indique que tipo de registro quiere
      </h3>
      <div className="select_div">
        <Btn_Div
          role="Usuario"
          desc="Asisitir a eventos"
          func={setRegisterValue}
        />
        <Btn_Div
          role="Promotor"
          desc="Ofrecer eventos"
          func={setRegisterValue}
        />
      </div>
      <div className="select_foot">
        <h4 className="select_title">Muchas Gracias por elegirnos</h4>
      </div>
    </div>
  );
};

export default Select;
