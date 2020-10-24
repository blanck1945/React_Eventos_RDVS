import * as React from "react";

import "./Btn_Div.scss";

interface BtnDivProps {
  role: string;
  func: React.Dispatch<React.SetStateAction<string>>;
}

const Btn_Div = ({ role, func }: BtnDivProps) => {
  return (
    <div className="select_box">
      <button className="general_btn fix" onClick={() => func(role)}>
        {role}
      </button>
    </div>
  );
};

export default Btn_Div;
