import * as React from "react";
import { Formik, Form } from "formik";
import { FormFieds } from "../../../../promotor_dash/form/inputProps";
import Formik_Control from "../../../../promotor_dash/form/Formik_Control";

export interface ControlValues {
  initialValues: any;
  handlerSubmit: any;
  validationSchema?: any;
}

interface FormControlProps {
  controlValues: ControlValues;
  formFields?: FormFieds[];
  formClass?: string;
  btnComp: any;
  reset?: boolean;
}

const ReactFormControl = ({
  controlValues,
  formFields,
  formClass,
  btnComp,
  reset,
}: FormControlProps) => {
  const [show, setShow] = React.useState<boolean>(false);
  const tools = {
    show,
    setShow,
  };

  console.log(controlValues.handlerSubmit);
  return (
    <Formik
      initialValues={controlValues.initialValues}
      validationSchema={controlValues.validationSchema}
      onSubmit={
        reset
          ? (values, { resetForm }) => {
              controlValues.handlerSubmit(values);
              resetForm();
            }
          : controlValues.handlerSubmit
      }
    >
      {(formik) => {
        return (
          <Form className={formClass}>
            {formFields.map((el: FormFieds, index: number) => (
              <Formik_Control
                key={index}
                control={el.control}
                rest={el.rest}
                formik={formik}
                tools={tools}
              />
            ))}
            {btnComp}
          </Form>
        );
      }}
    </Formik>
  );
};

export default ReactFormControl;
