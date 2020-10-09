import * as React from "react";
import { cardInitialValues, cardInputs } from "./FormInput";
import { YupCardSchema } from "./YupSchema";
import ReactFormControl from "./FormControl";
import Axios from "axios";
import { mutate } from "swr";
import { paymentRoutes } from "../../../../../../Api/Routes";

import "./AddCard.scss";
import { localVar } from "../../../../../../Api/localStorage";

interface AddCardProps {
  first: number;
}

const AddCard = ({ first }: AddCardProps) => {
  const submitPayment = async (values: any) => {
    const payment = {
      ...values,
      first: first === 0 ? true : false,
    };
    try {
      const { data } = await Axios({
        method: "POST",
        url: paymentRoutes.paymentsCreateURL + localVar.id,
        data: payment,
      });
      mutate(paymentRoutes.paymentsURL);
      return {
        data,
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add_card_form">
      <ReactFormControl
        controlValues={{
          initialValues: cardInitialValues,
          validationSchema: YupCardSchema,
          handlerSubmit: submitPayment,
        }}
        formFields={cardInputs}
        reset={true}
        btnComp={
          <button type="submit" className="general_btn fix_btn">
            Agregar medio de pago
          </button>
        }
        formClass="card_form"
      />
    </div>
  );
};

export default AddCard;
