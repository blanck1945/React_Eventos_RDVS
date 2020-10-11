import * as React from "react";
import "./Footer.scss";
import { useSelector } from "react-redux";
import { GlobalState } from "../../interfaces/state";
import Up_Footer from "./up_footer/Up_Footer";
import Down_Footer from "./down_footer/Down_Footer";

const Footer: React.FunctionComponent = () => {
  const globalState = useSelector((state: GlobalState) => state.global);

  return (
    <div className="footer">
      <Up_Footer />
      <Down_Footer />
    </div>
  );
};

export default Footer;

/*
{full && */
