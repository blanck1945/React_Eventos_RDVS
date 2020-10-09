import * as React from "react";

import "./Wish_Item.scss";

interface WishItemProps {
  header?: string;
  arr?: boolean;
  arrData?: string[];
  setUserDis?: React.Dispatch<React.SetStateAction<string>>;
}

const Wish_Item = ({ header, arr, arrData, setUserDis }: WishItemProps) => {
  return (
    <div className="wish_item">
      {arr ? null : <h3 className="header_text">{header}</h3>}
      {arr
        ? arrData.map((el: string, index: number) =>
            index === arrData.length - 1 ? (
              <h4 key={index} className="item_text last" onClick={() => setUserDis(el)}>
                {el}
              </h4>
            ) : (
              <h4 key={index} className="item_text" onClick={() => setUserDis(el)}>
                {el}
              </h4>
            )
          )
        : null}
    </div>
  );
};

export default Wish_Item;
