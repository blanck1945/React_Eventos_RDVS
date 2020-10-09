import * as React from "react";
import { Formik, Form } from "formik";
import { YupSchema } from "./YupSchema";
import Formik_Control from "./Formik_Control";
import { formFields, FormFieds } from "./inputProps";
import Header from "../../../../components/header/Header";
import {
  getEventMonth,
  getEventDay,
  formatData,
  cleanData,
  getToday,
  initialValues,
  checkBoolValue,
  formatHour,
} from "./funcs";
import { adonisCreateEvent } from "../../../../Redux_Store/actions/event_actions/axios";
import { useDispatch } from "react-redux";
import "./Form_Comp.scss";

const Formik_Comp = () => {
  const dispatch = useDispatch();

  const submit = async (values: any) => {
    const dates = formatData(values, "Fecha");
    const free = checkBoolValue(values.event_free);

    const event = {
      ...values,
      event_free: free,
      event_organizers: JSON.stringify(formatData(values, "Organizador")),
      event_participants: JSON.stringify(formatData(values, "Participante")),
      event_tickets_total: free ? 0 : parseInt(values.event_tickets_total),
      event_tickets_types: free
        ? 0
        : JSON.stringify(formatData(values, "Entrada")),
      event_tickets_price: free
        ? 0
        : JSON.stringify(formatData(values, "Precio")),
      event_dates: dates,
      event_start: formatHour(values.event_start),
      event_discount: free ? false : checkBoolValue(values.event_discount),
      event_discount_per: free ? 0 : parseInt(values.event_discount_per),
      event_social_link: null,
      event_week_day: getEventDay(dates[0]),
      event_month: getEventMonth(dates[0]),
      event_publish: getToday(),
    };

    const newObj = cleanData(event);
    console.log(newObj);
    await dispatch(adonisCreateEvent(newObj));
  };

  const [show, setShow] = React.useState<boolean>(false);
  const tools = {
    show,
    setShow,
  };

  const callReset = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupSchema}
      onSubmit={async(values: any, { resetForm }) => {
        await submit;
        resetForm()
      }}
    >
      {(formik) => {
        return (
          <Form className="form_div">
            <Header header="Crear Evento" header_class="event_title" />
            {formFields.map((el: FormFieds, index: number) => (
              <Formik_Control
                key={index}
                control={el.control}
                rest={el.rest}
                formik={formik}
                tools={tools}
              />
            ))}
            <div>
              <button type="reset">Reset</button>
              <button type="submit">Crear Evento</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Formik_Comp;

/*
 disabled={
                  formik.isSubmitting ? formik.isSubmitting : !formik.isValid
                }*/

//   <Formik_Control control="input" rest={formInputs.input1} />

/*
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
            </FieldArray>*/

/*  <Formik_Control
              control={formFields.input1.input}
              rest={formFields.input1}
            />
            <Formik_Control
              control={formFields.input2.input}
              rest={formFields.input2}
            />
            <Formik_Control
              control={formFields.input3.input}
              rest={formFields.input3}
            />
            */
