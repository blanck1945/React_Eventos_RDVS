import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleFullVar } from "../../Redux_Store/actions/global_actions/actions";
import { GlobalState } from "../../interfaces/state";

import "./Header.scss";

interface HeaderProps {
  header: String;
  sub?: Boolean;
  text_class?: string;
  sub_header?: String;
  header_class?: string;
}

const Header = ({
  header,
  sub,
  sub_header,
  text_class,
  header_class,
}: HeaderProps) => {
  const dispatch = useDispatch();

  return (
    <div className={!header_class ? "header" : "header " + header_class}>
      <h3 className={text_class}>{header}</h3>
      {sub ? <h4>{sub_header}</h4> : null}
    </div>
  );
};

export default Header;
