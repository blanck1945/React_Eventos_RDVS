import * as React from "react";
import "./HomeNavbar.scss";
import { useDispatch } from "react-redux";
import { toogleFullVar } from "../../Redux_Store/actions/global_actions/actions";

const HomeNavbar: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(toogleFullVar());
  });

  return (
    <div className="home_nav">
      <div className="abs-Box">
        <h2 className="abs_title">
          Webpack - React - TypeScript Init Template
        </h2>
        <h3 className="type">TypeScript</h3>
        <h3 className="react">React</h3>
        <h3 className="redux">Redux</h3>
        <h3 className="scss">SCSS</h3>
        <h3 className="router">React Router</h3>
        <h3 className="icons">React icons</h3>
        <h3 className="forms">React Hook forms</h3>
        <h3 className="axios">Axios</h3>
        <h3 className="lazy">Lazy Loading Image</h3>
        <h3 className="query">SWR</h3>
      </div>
    </div>
  );
};

export default HomeNavbar;
