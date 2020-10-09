import * as React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState, Visitor } from "../../../interfaces/state";
import { postNewUser } from "./axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import ErrorMsg from "./formComp/ErrorMsg";
import { checkPassword } from "./registerFunc";
import { useHistory } from "react-router-dom";
import Congratz from "./formComp/Congratz";

interface RegisterProps {
  setCongratz: React.Dispatch<React.SetStateAction<boolean>>;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ setCongratz, setFlag }: RegisterProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { reset, register, errors, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      personal_code: "",
      avatar: "",
    },
  });

  const onSubmit = (values: any) => handlerRegister(values);
  const globalState = useSelector((state: GlobalState) => state.global);
  const { promiseInProgress } = usePromiseTracker();

  const checkRes = (res: any) => {
    if (!res.action) {
      setFlag(true);
    } else {
      setCongratz(true);
      reset();
    }
  };

  const handlerRegister = async (values: Visitor) => {
    const newUser = checkPassword(values, "usuario");
    const { check, user } = newUser;
    if (!check) {
      return setFlag(true);
    }
    const res = await trackPromise(postNewUser(user, dispatch));
    await checkRes(res);
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      {promiseInProgress ? (
        <h3>loading...</h3>
      ) : (
        <>
          <Input
            label="Username"
            input_name="username"
            input_type="text"
            func={register}
          />
          {errors.username && <ErrorMsg label="Username es requerido" />}
          <Input
            label="Email"
            input_name="email"
            input_type="email"
            func={register}
          />
          {errors.email && (
            <span className="error_msg">Email es requerido</span>
          )}
          <Input
            label="Password"
            input_name="password"
            input_type="password"
            func={register}
          />
          {errors.password && (
            <span className="error_msg">Password es requerido</span>
          )}
          <Input
            label="Confimar Password"
            input_name="confirm_password"
            input_type="password"
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
        </>
      )}
    </form>
  );
};

export default Register;

/*
   <Input
        label="Nombre"
        input_name="user_name"
        input_type="text"
        func={register}
      />
      {errors.user_name && (
        <span className="error_msg">Nombre es requerido</span>
      )}
      <Input
        label="Apellido"
        input_name="user_last_name"
        input_type="text"
        func={register}
      />
      {errors.user_last_name && (
        <span className="error_msg">Apellido es requerido</span>
      )}*/
