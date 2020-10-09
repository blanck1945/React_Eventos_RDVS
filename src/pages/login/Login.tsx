import * as React from "react";
import Header from "../../components/header/Header";
import Register from "./register/Register";
import LoginForm from "./register/LoginForm";
import Congratz from "./register/formComp/Congratz";
import Flag from "./register/formComp/Flag";

import "./Login.scss";
import Select from "./register/Select";
import RegisterPromotor from "./register/RegisterPromotor";

const Login = () => {
  const [registerValue, setRegisterValue] = React.useState<string>(
    "Iniciar Sesión"
  );
  const [flag, setFlag] = React.useState<boolean>(false);
  const [congratz, setCongratz] = React.useState<boolean>(false);

  return (
    <div className="user_home">
      <div className="home_dis_login">
        <Header header_class="fix_he" header={registerValue} />
        {flag ? <Flag setFlag={setFlag} /> : null}
        {congratz ? (
          <Congratz
            setRegisterValue={setRegisterValue}
            setCongratz={setCongratz}
          />
        ) : null}
        {registerValue === "Usuario" && (
          <Register setCongratz={setCongratz} setFlag={setFlag} />
        )}
        {registerValue === "Promotor" && (
          <RegisterPromotor
            setCongratz={setCongratz}
            setFlag={setFlag}
            setRegisterValue={setRegisterValue}
          />
        )}
        {registerValue === "Iniciar Sesión" && <LoginForm />}
        {registerValue === "Selección de Registro" && (
          <Select setRegisterValue={setRegisterValue} />
        )}
        <div className="register_div">
          {registerValue === "Iniciar Sesión" ? (
            <div className="register_text">
              En caso de no tener una cuenta
              <span
                className="link"
                onClick={() => setRegisterValue("Selección de Registro")}
              >
                registrese
              </span>
            </div>
          ) : (
            <div className="register_text">
              En caso de tener una cuenta
              <span
                className="link"
                onClick={() => setRegisterValue("Iniciar Sesión")}
              >
                ingrese
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
