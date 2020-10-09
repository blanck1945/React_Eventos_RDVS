import * as React from "react";

import "./Aside_Comp.scss";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../../interfaces/state";

interface AsideComp {
  label: string;
  label_class: string;
  query?: string;
  funcQuery?: string;
  func?: Function;
  stateHome?: string;
}

const Aside_Comp = ({
  label,
  label_class,
  func,
  stateHome,
  funcQuery,
}: AsideComp) => {
  const globalState = useSelector((state: GlobalState) => state.global);

  return (
    <div className="aside_comp" onClick={() => func(funcQuery)}>
      <h3
        className={funcQuery === stateHome ? "aside_item  select" : label_class}
      >
        {label}
      </h3>
    </div>
  );
};

export default Aside_Comp;
