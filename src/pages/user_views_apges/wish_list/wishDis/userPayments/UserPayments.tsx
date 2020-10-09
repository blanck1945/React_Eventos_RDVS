import * as React from "react";
import useSWR from "swr";
import Axios from "axios";
import AddCard from "./AddCard/AddCard";
import Loader from "react-loader-spinner";
import { UserCard } from "../../../../../interfaces/Reducers/UserReducer";
import { paymentRoutes } from "../../../../../Api/Routes";
import { localVar } from "../../../../../Api/localStorage";
import "./UserPayment.scss";

export const fetchPayments = async (url: string) => {
  const { data } = await Axios.get(url + localVar.id);
  return data;
};

const UserPayments = () => {
  const [modelOpen, setModelOpen] = React.useState<boolean>(false);

  const { data, error } = useSWR(paymentRoutes.paymentsURL, fetchPayments);

  return (
    <div className="payment_div">
      <div className="payment_table">
        <div className="table_header">
          <h4>id</h4>
          <h4>Empresa</h4>
          <h4>Tipo</h4>
          <h4>Numeros de la tarjeta</h4>
        </div>
        {data === undefined ? (
          <div className="loader_div">
            <Loader
              type="Grid"
              color="rgb(23, 66, 109)"
              height={80}
              width={80}
            />
          </div>
        ) : data.payments.length === 0 ? (
          <h4 className="none_text">
            No hay formas de pago asociadas a su cuenta
          </h4>
        ) : (
          data.payments.map((el: UserCard, index: number) => (
            <div key={el.id} className="table_row">
              <h4>{el.id}</h4>
              <h4>{el.card}</h4>
              <h4>{el.type}</h4>
              <h4>{el.public_num} **** **** ****</h4>
            </div>
          ))
        )}
        <div
          className={
            modelOpen ? "fix_rox active table_row" : "table_row fix_rox"
          }
          onClick={() => setModelOpen(!modelOpen)}
        >
          Agregar Tarjeta
        </div>
        {modelOpen ? (
          <AddCard first={data?.length !== 0 ? data.length : 0} />
        ) : null}
      </div>
    </div>
  );
};

export default UserPayments;
