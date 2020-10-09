import * as Yup from "yup";
import { RestOptions } from "../../promotor_dash/form/inputProps";

export const initialValue = {
  oldPass: "",
  newPass: "",
};

export const PassSchema = Yup.object({
  oldPass: Yup.string().required("Este compo es requerido"),
  newPass: Yup.string()
    .required("Este compo es requerido")
    .min(6, "Contraseña debe tener como minimo 6 caracteres"),
});

export const values: RestOptions = {
  type: "password",
  div_class: "card_div",
  label_class: "card_label",
  input_class: "card_input",
};

export const passFields = [
  {
    control: "input",
    rest: { ...values, name: "oldPass", label: "Contraseña Actual" },
  },
  {
    control: "input",
    rest: { ...values, name: "newPass", label: "Nueva Contraseña" },
  },
];
