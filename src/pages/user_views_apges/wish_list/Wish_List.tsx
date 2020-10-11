import * as React from "react";
import Wish_Item from "./Wish_Item";
import { list1 } from "./wishArr";
import { fetchWishList } from "../../../Redux_Store/actions/wish_actions/wish_axios";
import { useDispatch, useSelector } from "react-redux";
import WishDis from "./wishDis/WishDis";
import UserInfo from "./wishDis/UserInfo";
import UserPayments from "./wishDis/userPayments/UserPayments";
import { localVar } from "../../../Api/localStorage";
import "./Wish_List.scss";
import { GlobalState } from "../../../interfaces/state";
import { setUserWish } from "../../../Redux_Store/actions/user_actions/user_actions";
import Preferences from "./wishDis/preferences/Preferences";

const Wish_List = () => {
  const [userDis, setUserDis] = React.useState<string>("Lista de deseos");
  const dispatch = useDispatch();
  const userState = useSelector((state: GlobalState) => state.userCred);

  React.useEffect(() => {
    if (!userState.wishList) {
      dispatch(setUserWish(true));
    }
  }, []);

  /*React.useEffect(() => {
    const getWishList = async () => {
      await dispatch(fetchWishList(localVar.id));
    };
    if (userState.wishList) {
      getWishList();
    }
  }, []);*/

  return (
    <div className="user_home">
      <div className="wish_box_center">
        <div className="wish_side">
          <Wish_Item header={`Bienvenido ${localVar.user}`} />
          <Wish_Item arr={true} arrData={list1} setUserDis={setUserDis} />
        </div>
        {userDis === "Lista de deseos" && <WishDis />}
        {userDis === "Nombre, Email, Contraseña" && <UserInfo />}
        {userDis === "Opciones de pago" && <UserPayments />}
        {userDis === "Preferencias de Comunicación" && <Preferences />}
      </div>
    </div>
  );
};

export default Wish_List;
