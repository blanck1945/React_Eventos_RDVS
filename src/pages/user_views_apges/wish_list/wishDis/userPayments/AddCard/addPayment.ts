import Axios from "axios";
import { paymentRoutes } from "../../../../../../Api/Routes";
import { localVar } from "../../../../../../Api/localStorage";

export const submit = async (values: any) => {
  try {
    const { data } = await Axios({
      method: "POST",
      url: paymentRoutes.paymentsURL + localVar.id,
      data: values,
    });
    return {
      data,
    };
  } catch (err) {
    console.log(err);
  }
};
