import * as React from "react";

import "./Banner.scss";

interface BannerProps {
  label_1: string;
  label_2: string;
  sub_label?: boolean;
}

const Banner = ({ label_1, label_2, sub_label }: BannerProps) => {
  return (
    <div className="banner">
      <h3 className="red_text">{label_1}</h3>
      <h3 className="red_text">{sub_label ? label_2 : null}</h3>
    </div>
  );
};

export default Banner;
