import * as React from "react";
import { FormHandler } from "../UserInfo";
import Axios from "axios";
import { userRoutes } from "../../../../../Api/Routes";
import { setUserEmail } from "../../../../../Redux_Store/actions/user_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../../../../interfaces/state";
import "./UserInfoDiv.scss";
import { localVar } from "../../../../../Api/localStorage";

interface UserInfoDiv {
  label: string;
  info?: string;
  btn_class: string;
  info_class?: string;
  value?: FormHandler;
  func?: React.Dispatch<React.SetStateAction<FormHandler>>;
  DB?: any;
  email?: boolean;
}

const UserInfoDiv = ({
  label,
  info,
  btn_class,
  info_class,
  value,
  func,
  DB,
  email,
}: UserInfoDiv) => {
  if (DB) {
    return (
      <div className="user_info_div">
        <button onClick={DB ? () => DB() : null} className={btn_class}>
          {label}
        </button>
        <h4 className={info_class}>{info}</h4>
      </div>
    );
  }

  const [showEmail, setShowEmail] = React.useState<any>({
    show: false,
    data: undefined,
  });

  const dispatch = useDispatch();
  const userState = useSelector((state: GlobalState) => state.userCred);

  const fetchEmail = async () => {
    if (userState.email !== undefined) {
      setShowEmail({
        show: true,
        data: userState.email,
      });
      return {
        msg: "email already in Redux Store",
      };
    }
    const { data } = await Axios.get(userRoutes.fetchUserEmail + localVar.id);
    await dispatch(setUserEmail(data.email));
    console.log(userState.email);
    setShowEmail({
      show: true,
      data: data.email,
    });
  };

  if (email) {
    return (
      <div className="user_info_div">
        <button onClick={() => fetchEmail()} className={btn_class}>
          {label}
        </button>
        {showEmail.show ? <h4>{showEmail.data}</h4> : null}
      </div>
    );
  }

  return (
    <div className="user_info_div">
      <button
        onClick={
          func ? () => func({ ...value, changePass: !value.changePass }) : null
        }
        className={btn_class}
      >
        {label}
      </button>
      <h4 className={info_class}>{info}</h4>
    </div>
  );
};

export default UserInfoDiv;
