import * as React from "react";
import UserInput from "./components/userInput";

export interface Tools {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormFieds {
  control: string;
  rest?: RestOptions;
}

export interface RestOptions {
  amountName?: string;
  name?: string;
  label?: string;
  type?: string;
  div_class?: string;
  label_class?: string;
  input_class?: string;
  error_div?: string;
  btn_class?: string;
  options?: string[];
  div_amount?: string;
  amount_div_class?: string;
  amount_label?: string;
  input_type?: string;
  hide?: boolean;
  aclaration?: string;
  aclaration_class?: string;
  change?: boolean;
  swapFile?: boolean;
  component?: any;
  useTools?: boolean;
  subRest?: RestOptions;
}

export const formFields = [
  {
    control: "input",
    rest: {
      name: "event_name",
      label: "Nombre del Evento",
      div_class: "input_div",
      input_class: "input",
      error_div: "error_msg",
    },
  },
  {
    control: "select",
    rest: {
      name: "event_type",
      label: "Tipo de Evento",
      div_class: "input_div",
      input_class: "select_input",
      options: [
        "Conferencia",
        "Debate",
        "Clase",
        "Expresión Artistica",
        "Competencia",
        "Stream",
        "IRL",
        "Otros",
      ],
    },
  },
  {
    control: "select",
    rest: {
      name: "event_category",
      label: "Categoria del Evento",
      div_class: "input_div",
      input_class: "select_input",
      options: [
        "Obra",
        "Derecho",
        "Sociales",
        "Politica",
        "Programación",
        "Tecnologia",
        "Información",
        "Entretenimiento",
        "Drama",
        "Comedia",
      ],
    },
  },
  {
    control: "amount",
    rest: {
      amountName: "organizers_amount",
      name: "event_organizers",
      label: "Cantidad de Organizadores",
      div_class: "input_div",
      input_class: "select_input",
      div_amount: "upper_div",
      amount_div_class: "amount_div",
      amount_label: "Organizador",
    },
  },
  {
    control: "amount",
    rest: {
      amountName: "participant_amount",
      name: "event_participants",
      label: "Cantidad de Participantes",
      div_class: "input_div",
      input_class: "select_input",
      div_amount: "upper_div",
      amount_div_class: "amount_div",
      amount_label: "Participante",
    },
  },
  {
    control: "amount",
    rest: {
      amountName: "event_amount",
      name: "event_dates",
      label: "Cantidad de Fechas",
      div_class: "input_div",
      input_class: "select_input",
      div_amount: "upper_div",
      amount_div_class: "amount_div",
      amount_label: "Fecha",
      input_type: "date",
    },
  },
  {
    control: "input",
    rest: {
      name: "event_start",
      label: "Hora de inicio del Evento",
      div_class: "input_div",
      input_class: "input",
      error_div: "error_msg",
    },
  },
  {
    control: "select",
    rest: {
      name: "event_free",
      label: "Evento Gratuito",
      div_class: "input_div",
      input_class: "input",
      error_div: "error_msg",
      options: ["Si", "No"],
      useTools: false,
    },
  },
  {
    control: "input",
    rest: {
      name: "event_tickets_total",
      label: "Cantidad de Entradas",
      div_class: "input_div",
      input_class: "input",
      aclaration:
        "En caso de no tener numero fijo de entradas indique 0 como valor",
      error_div: "error_msg",
      useTools: true,
    },
  },
  {
    control: "amount",
    rest: {
      amountName: "event_tickets_types",
      name: "event_tickets_types",
      label: "Tipos de Entrada",
      div_class: "input_div",
      input_class: "select_input",
      div_amount: "upper_div",
      amount_div_class: "amount_div",
      amount_label: "Entrada",
      useTools: true,
    },
  },
  {
    control: "amount",
    rest: {
      amountName: "event_tickets_price",
      name: "event_tickets_price",
      label: "Precios",
      div_class: "input_div",
      input_class: "select_input",
      div_amount: "upper_div",
      amount_div_class: "amount_div",
      amount_label: "Precio",
      useTools: true,
    },
  },
  {
    control: "inputState",
    rest: {
      name: "event_discount",
      label: "Descuentos",
      div_class: "input_div",
      input_class: "input",
      options: ["No", "Si"],
      subRest: {
        name: "event_discount_per",
        label: "Porcentaje de descuento",
        div_class: "input_div",
        input_class: "input",
        error_div: "error_msg",
      },
      useTools: true,
    },
  },
  {
    control: "text",
    rest: {
      name: "event_desc",
      label: "Descripción del Evento",
      div_class: "text_div",
      input_class: "text_input",
      error_div: "error_msg",
    },
  },
  {
    control: "file",
    rest: {
      name: "event_img",
      label: "Banner del Evento",
      div_class: "input_div",
      input_class: "input",
      error_div: "error_msg",
      swapFile: true,
    },
  },
  {
    control: "custom",
    rest: {
      component: <UserInput label={"Terminos y Condiciones"} name={"terms"} />,
      error_div: "error_msg",
    },
  },
];

//const formInputsArr = [{}];

//`<userInput />`
