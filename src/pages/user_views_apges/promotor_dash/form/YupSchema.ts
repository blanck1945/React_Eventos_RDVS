import * as Yup from "yup";

export const YupSchema = Yup.object({
  event_name: Yup.string().required("Nombre del evento es requerido"),
  event_desc: Yup.string().required("Descripción del evento es requerida"),
  event_category: Yup.string().required("Categoria es requerida"),
  event_type: Yup.string().required("Tipo de evento es requerido"),
  event_start: Yup.number().required("Hora de inicio es requerido"),
  event_discount: Yup.string().notRequired(),
  event_free: Yup.boolean().required(),
  event_discount_per: Yup.number().notRequired(),
  event_tickets_total: Yup.number().required(
    "Es requerido indicar una cantidad de entradas"
  ),
  terms: Yup.boolean().required("Debe aceptar los terminos y condiciones"),
});

/* event_participants: Yup.array().of(Yup.string()),
  event_organizers: Yup.array()
    .of(Yup.string().required("Al menos un organizador es necesario"))
    .required("Al menos un organizador es requerido"),
  event_social_link: Yup.object().shape({
    facebook: Yup.string(),
    twitter: Yup.string(),
    youtube: Yup.string(),
    instagram: Yup.string(),
  }),*/
