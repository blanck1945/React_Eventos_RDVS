import * as React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import "./Input.scss";

interface InputProps {
  label: string;
  input_type: string;
  input_name: string;
  func?: Function;
  passDis?: string;
  showPass?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({
  label,
  input_type,
  input_name,
  func,
  passDis,
  setShow,
}: InputProps) => {
  const [toogleIcon, setToogleIcon] = React.useState<boolean>(false);

  return (
    <div className="login_div">
      <h3 className="login_label">{label}</h3>
      <input
        type={input_type}
        name={input_name}
        className="login_input"
        ref={func({ required: true })}
      />
      {passDis ? (
        toogleIcon ? (
          <AiFillEye
            className="show_icon"
            onClick={() => {
              setShow(false);
              setToogleIcon(!toogleIcon);
            }}
          />
        ) : (
          <AiFillEyeInvisible
            className="show_icon"
            onClick={() => {
              setShow(true);
              setToogleIcon(!toogleIcon);
            }}
          />
        )
      ) : null}
    </div>
  );
};

export default Input;
