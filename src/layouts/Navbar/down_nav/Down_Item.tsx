import * as React from "react";

import "./Down_Item.scss";

interface DownItemProps {
  label: string;
  iconOn?: boolean;
  Icon?: any;
}

const Down_Item = ({ label, iconOn, Icon }: DownItemProps) => {
  return (
    <div className="header_box">
      <h3 className="label_text">{label}</h3>
      {iconOn ? Icon : null}
    </div>
  );
};

export default Down_Item;
