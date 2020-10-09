import * as Yup from "yup";

export const YupCardSchema = Yup.object({
  card: Yup.string().required("Campo requerido"),
  type: Yup.string().required("Campo requerido"),
  card_nums: Yup.string()
    .required("Campo es requerido")
    .min(16, "Numero de tarjeta debe tener 16 numeros"),
  expiration_date: Yup.string().required("Campo requerido"),
  security_code: Yup.string()
    .required("Campo requerido")
    .min(3, "El numero de seguridad debe tener 3 caracteres")
    .max(3, "El numero de seguridad debe tener 3 caracteres"),
});

//.length(16, "La tarjeta debe tener 16 numeros"),
