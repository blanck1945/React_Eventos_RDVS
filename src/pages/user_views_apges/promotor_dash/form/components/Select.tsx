import * as React from "react";
import { Field, ErrorMessage } from "formik";
import Text_Error from "./Text_Error";
import { RestOptions, Tools } from "../inputProps";

interface SelectCompProps {
  rest: RestOptions;
  tools?: Tools;
  formik: any;
}

const Select_Comp = ({ rest, tools, formik }: SelectCompProps) => {
  const switchState = (value: string) => {
    tools.setShow(!tools.show);
    console.log(value);
    formik.setFieldValue("event_free", value);
  };

  return (
    <>
      {rest.useTools ? (
        tools.show ? (
          <div className={rest.div_class}>
            <label className={rest.label_class} htmlFor={rest.name}>
              {rest.label}
            </label>
            <Field
              as="select"
              id={rest.name}
              name={rest.name}
              className={rest.input_class}
              onChange={(e: any) => switchState(e.target.value)}
            >
              {rest.options.map((el: string) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Field>
            <ErrorMessage name={rest.name} component={Text_Error} />
          </div>
        ) : null
      ) : (
        <div className={rest.div_class}>
          <label className={rest.label_class} htmlFor={rest.name}>
            {rest.label}
          </label>
          <Field
            as="select"
            id={rest.name}
            name={rest.name}
            className={rest.input_class}
          >
            {rest.options.map((el: string) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </Field>
          <ErrorMessage name={rest.name} component={Text_Error} />
        </div>
      )}
    </>
  );
};

export default Select_Comp;
