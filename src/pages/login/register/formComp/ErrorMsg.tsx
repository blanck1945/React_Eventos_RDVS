import * as React from "react";

interface ErrorMsgProps {
  label: string;
}

const ErrorMsg = ({ label }: ErrorMsgProps) => {
  return <span className="error_msg">{label} es requerido</span>;
};

export default ErrorMsg;
