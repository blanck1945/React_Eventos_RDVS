import * as React from "react";
import { GlobalState, Visitor, Promotor } from "../../../interfaces/state";
import { useSelector, useDispatch } from "react-redux";
import { postNewUser } from "./axios";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { checkPassword } from "./registerFunc";
import { useHistory } from "react-router-dom";

interface RegisterProps {
  setCongratz: React.Dispatch<React.SetStateAction<boolean>>;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterValue: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterPromotor = ({
  setCongratz,
  setFlag,
  setRegisterValue,
}: RegisterProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { reset, register, errors, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      promotor_code: "",
    },
  });

  const onSubmit = (values: any) => handlerRegister(values);
  const globalState = useSelector((state: GlobalState) => state.global);

  const handlerRegister = async (values: Promotor) => {
    const match = checkPassword(values, "promotor");
    const { check, user } = match;
    if (!check) {
      return setFlag(true);
    }

    const res = await postNewUser(user, dispatch);

    if (res.action) {
      setCongratz(true);
      reset();
      setRegisterValue("Iniciar Sesión");
    } else {
      setFlag(true);
    }
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nombre de Usuario"
        input_name="username"
        input_type="text"
        func={register}
      />
      {errors.username && (
        <span className="error_msg">Username es requerido</span>
      )}
      <Input
        label="Email"
        input_name="email"
        input_type="email"
        func={register}
      />
      {errors.email && <span className="error_msg">Email es requerido</span>}
      <Input
        label="Contraseña"
        input_name="password"
        input_type="password"
        func={register}
      />
      {errors.password && (
        <span className="error_msg">Password es requerido</span>
      )}
      <Input
        label="Confimar Contraseña"
        input_name="confirm_password"
        input_type="password"
        func={register}
      />
      <Input
        label="Numero Personal"
        input_name="promotor_code"
        input_type="text"
        func={register}
      />
      {errors.confirm_password && (
        <span className="error_msg">Confirme su Password</span>
      )}
      {globalState.errors.length !== 0 &&
        globalState.errors.map((el: any, index: number) => (
          <span className="error_msg" key={index}>
            {el.errorName}
          </span>
        ))}
      <button className="general_btn">Registrarse</button>
    </form>
  );
};

export default RegisterPromotor;
