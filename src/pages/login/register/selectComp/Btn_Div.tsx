import * as React from "react";

import "./Btn_Div.scss";

interface BtnDivProps {
  role: string;
  desc: string;
  func: React.Dispatch<React.SetStateAction<string>>;
}

const Btn_Div = ({ role, desc, func }: BtnDivProps) => {
  return (
    <div className="select_box">
      <button className="general_btn fix" onClick={() => func(role)}>
        {role}
      </button>
      <p className="select_p">{desc}</p>
    </div>
  );
};

export default Btn_Div;
