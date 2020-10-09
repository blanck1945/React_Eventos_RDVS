import * as React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";

import "./Crear_Evento.scss";
import ErrorMsg from "../../../login/register/formComp/ErrorMsg";

const initialValues = {
  event_name: "",
  event_category: "",
  event_country: "",
  event_desc: "",
  event_social_links: {
    facebook: "",
    twitter: "",
  },
  event_dates: [""],
};

const submit = (values: any, { setSubmitting, resetForm }: any) => {
  console.log(values);
  setTimeout(() => {
    setSubmitting(false);
    resetForm();
  }, 1500);
};

const YupSchema = Yup.object({
  event_name: Yup.string().required("Campo es obligatorio"),
  event_category: Yup.string().required("Campo es obligatorio"),
  event_country: Yup.string().required("Campo es obligatorio"),
});

const Crear_Evento = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupSchema}
      onSubmit={submit}
      validateOnMount
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="crear_div">
            <label className="crear_label">Nombre del Evento</label>
            <FastField type="text" id="event_name" name="event_name" />
            <ErrorMessage
              component="div"
              className="error_text"
              name="event_name"
            />

            <label className="crear_label">País del evento</label>
            <Field type="select" id="event_country" name="event_country" />
            <ErrorMessage
              component="div"
              className="error_text"
              name="event_country"
            />

            <label className="crear_label">Categoria del Evento</label>
            <Field type="text" id="event_category" name="event_category" />
            <ErrorMessage
              component="div"
              className="error_text"
              name="event_category"
            />

            <label className="crear_label">Descripcion del evento</label>
            <Field as="textarea" id="event_desc" name="evento_desc" />

            <label className="crear_label">Facebook</label>
            <Field
              type="text"
              id="facebook"
              name="event_social_links.facebook"
            />
            <ErrorMessage
              component="div"
              className="error_text"
              name="event_country"
            />

            <label className="crear_label">Twitter</label>
            <Field type="text" id="twitter" name="event_social_links.twitter" />
            <ErrorMessage
              component="div"
              className="error_text"
              name="event_country"
            />

            <label className="crear_label">Fechas</label>
            <FieldArray name="event_dates">
              {({ push, remove, form }) => {
                return (
                  <div>
                    {form.values.event_dates.map(
                      (el: string, index: number) => (
                        <div key={index}>
                          <Field name={`el[${index}]`} />
                          <button
                            type="button"
                            onClick={index === 0 ? null : () => remove(index)}
                          >
                            -
                          </button>
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      )
                    )}
                  </div>
                );
              }}
            </FieldArray>
            <ErrorMessage
              component="div"
              className="error_text"
              name="event_country"
            />

            <div>
              <button type="reset">Reset</button>
              <button
                type="submit"
                disabled={
                  formik.isSubmitting
                    ? formik.isSubmitting
                    : !(formik.dirty && formik.isValid)
                }
              >
                Crear Evento
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Crear_Evento;
