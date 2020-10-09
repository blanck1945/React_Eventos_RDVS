import * as React from "react";
import { RestOptions, Tools } from "../inputProps";

interface CustomFieldProps {
  rest?: RestOptions;
  component?: any;
  formik?: any;
  tools?: Tools;
}

const CustomField = ({ component, formik, tools }: CustomFieldProps) => {
  return <>{component}</>;
};

export default CustomField;
