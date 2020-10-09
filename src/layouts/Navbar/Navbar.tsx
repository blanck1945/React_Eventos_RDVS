import * as React from "react";
import Top_Nav from "./top_nav/Top_Nav";
import "./navbar.scss";
import Center_Nav from "./center_nav/Center_Nav";
import Banner from "../../pages/user_views_apges/componets/covid_banner/Banner";
import Down_nav from "./down_nav/Down_nav";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <div className="navbar">
        <Top_Nav />
        <Center_Nav />
        <Down_nav />
        <Banner
          label_1={"Quedate en Casa"}
          sub_label={true}
          label_2={"Mira como estamos ayudando a vencer el CoVID"}
        />
      </div>
    </>
  );
};

export default Navbar;
