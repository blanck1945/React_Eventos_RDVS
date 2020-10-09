import * as React from "react";

import "./HomeNav.scss";

interface HomeNavProps {
  navItems: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  open?: any;
}

const HomeNav = ({ navItems, filter, setFilter, open }: HomeNavProps) => {
  return (
    <div className="home_nav home_nav_close">
      {navItems.map((el: string) => (
        <h4
          key={el}
          onClick={() => setFilter(el)}
          className={filter === el ? "home_item select" : "home_item"}
        >
          {el}
        </h4>
      ))}
      <span
        className="close_header"
        onClick={() => open.setOpenHeader(!open.openHeader)}
      ></span>
    </div>
  );
};

export default HomeNav;
