import * as React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GlobalState, Visitor } from "../../../interfaces/state";
import { trackPromise } from "react-promise-tracker";
import { logUser } from "./axios";
import { setLogginErrorMsg } from "../../../Redux_Store/actions/user_actions/user_actions";

const LoginForm = () => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submit = (values: any) => handlerLogin(values);

  const [show, setShow] = React.useState<boolean>(false);
  const [logginErrorMsg, setLogginErrorMsg] = React.useState<boolean>(false);

  const globalState = useSelector((state: GlobalState) => state.global);
  const userState = useSelector((state: GlobalState) => state.userCred);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerLogin = async (values: Visitor) => {
    const process = await trackPromise(logUser(values, dispatch));

    if (process) {
      history.push("/");
    }
    return setLogginErrorMsg(true);
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(submit)}>
      {logginErrorMsg && <h3>{userState.msg}</h3>}
      <Input
        label="Email"
        input_name="email"
        input_type="text"
        func={register}
      />
      {errors.email && <span className="error_msg">Email es requerido</span>}
      <Input
        label="Contraseña"
        input_name="password"
        input_type={show ? "text" : "password"}
        func={register}
        passDis={"show"}
        setShow={setShow}
      />
      {errors.password && (
        <span className="error_msg">Password es requerido</span>
      )}
      {globalState.errors.length !== 0 &&
        globalState.errors.map((el: any, index: number) => (
          <span className="error_msg" key={index}>
            {el.errorName}
          </span>
        ))}
      <button className="general_btn">Login</button>
    </form>
  );
};

export default LoginForm;
