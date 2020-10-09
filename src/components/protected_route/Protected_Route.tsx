import * as React from "react";
import { Route, Redirect } from "react-router-dom";

interface ProtectedRouteProps {
  path: string;
  component: React.FunctionComponent;
  exact: boolean;
}

const Protected_Route = ({ path, component, exact }: ProtectedRouteProps) => {
  if (!window.localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return <Route exact={exact} path={path} component={component} />;
};

export default Protected_Route;
