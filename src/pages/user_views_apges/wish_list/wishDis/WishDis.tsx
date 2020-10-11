import * as React from "react";
import Header from "../../../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../../../interfaces/state";
import EventWishCard from "../EventWishCard/EventWishCard";
import { AdonisEvent } from "../../../../interfaces/EventType";
import { localVar } from "../../../../Api/localStorage";
import Axios from "axios";
import useSWR from "swr";
import { wishRoutes } from "../../../../Api/Routes";
import { setUserWishList } from "../../../../Redux_Store/actions/wish_actions/wish_actions";
import Loader from "react-loader-spinner";

const fetchUserWishFromAdonis = async (url: string) => {
  return await Axios.get(url);
};

const WishDis = () => {
  const wishState = useSelector((state: GlobalState) => state.wish);
  const dispatch = useDispatch();

  const { data: loading } = useSWR(
    wishRoutes.wishUrl + localVar.id,
    fetchUserWishFromAdonis,
    {
      onSuccess: ({ data }) => {
        console.log("this is the data", data);
        dispatch(setUserWishList(data.userWishList));
      },
    }
  );

  return (
    <div className="wish_box_down">
      {loading === undefined ? (
        <div className="loader_div">
          <Loader type="Grid" color="rgb(23, 66, 109)" height={80} width={80} />
        </div>
      ) : (
        <Header
          header={
            wishState.userWishList !== undefined
              ? "Tienes " +
                wishState.userWishList.length +
                " eventos en tu Lista"
              : "No tiene una Lista de Deseos"
          }
          header_class="wish_header"
        />
      )}
      {wishState.userWishList !== undefined ? (
        wishState.userWishList.map((el: AdonisEvent) => (
          <EventWishCard data={el} key={el.id} />
        ))
      ) : (
        <>
          <h3 className="wish_box_text">
            Aún no tienes ninguna Lista de deseos
          </h3>
          <h3 className="wish_box_text">
            ¿Por qué no <span className="one">crear una?</span>
          </h3>
        </>
      )}
    </div>
  );
};

export default WishDis;
