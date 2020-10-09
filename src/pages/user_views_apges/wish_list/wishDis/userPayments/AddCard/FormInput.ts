import { RestOptions } from "../../../../promotor_dash/form/inputProps";

const values: RestOptions = {
  div_class: "card_div",
  input_class: "card_input",
  label_class: "card_label",
  error_div: "error_msg",
};

export const cardInputs = [
  {
    control: "input",
    rest: { ...values, name: "card", label: "Tarjeta" },
  },
  {
    control: "select",
    rest: {
      ...values,
      label: "Tipo de Tarjeta",
      name: "type",
      options: ["Debito", "Credito"],
    },
  },
  {
    control: "input",
    rest: {
      ...values,
      name: "card_nums",
      label: "Numeros de Tarjeta",
    },
  },
  {
    control: "input",
    rest: {
      ...values,
      name: "expiration_date",
      label: "Fecha de Expiración",
      type: "date",
    },
  },
  {
    control: "input",
    rest: {
      ...values,
      name: "security_code",
      label: "Codigo de seguridad",
    },
  },
];

export const cardInitialValues = {
  card: "",
  type: "",
  card_nums: "",
  expiration_date: "",
  security_code: "",
};
