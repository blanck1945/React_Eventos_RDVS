import * as React from "react";
import Axios from "axios";
import UserInfoDiv from "./UserInfoDiv.tsx/UserInfoDiv";
import ReactFormControl from "./userPayments/AddCard/FormControl";
import { initialValue, PassSchema, passFields } from "./PassFormPros";
import "./UserInfo.scss";
import { userRoutes } from "../../../../Api/Routes";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "../../../../Redux_Store/actions/user_actions/user_actions";
import { GlobalState } from "../../../../interfaces/state";
import { localVar } from "../../../../Api/localStorage";

export interface FormHandler {
  changePass: boolean;
  flag: boolean;
  errMsg: string;
}

const UserInfo = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: GlobalState) => state.userCred);

  const [formHandler, setFormHanlder] = React.useState<FormHandler>({
    changePass: false,
    flag: false,
    errMsg: "",
  });

  const submit = async (values: any) => {
    try {
      const { data } = await Axios({
        method: "POST",
        url: userRoutes.changePassURL + localVar.id,
        data: values,
      });
      if (!data.state) {
        setFormHanlder({ ...formHandler, flag: true, errMsg: data.msg });
        return false;
      }

      setFormHanlder({
        flag: true,
        errMsg: data.msg,
        changePass: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async () => {
    try {
      const route = userRoutes.deleteUser + localVar.id;
      const { data } = await Axios.patch(route);
      return {
        msg: "User removed",
      };
    } catch (err) {
      console.log(err);
    }
  };

  console.log(deleteUser);
  return (
    <div className="user_fix">
      <UserInfoDiv
        label="Nombre de Usuario"
        info={window.localStorage.getItem("user")}
        btn_class="active_btn"
        info_class="user_info"
      />
      <UserInfoDiv
        label="Cambiar Email"
        btn_class="change_btn"
        info_class="user_info"
        email={true}
      />
      <UserInfoDiv
        label="Cambiar contraseña"
        btn_class="change_btn"
        value={formHandler}
        func={setFormHanlder}
        info_class="user_info"
      />
      {formHandler.flag ? (
        <h4 style={{ color: "brown", fontSize: "1.1rem" }}>
          {formHandler.errMsg}
        </h4>
      ) : null}
      {formHandler.changePass ? (
        <ReactFormControl
          controlValues={{
            initialValues: initialValue,
            validationSchema: PassSchema,
            handlerSubmit: submit,
          }}
          formFields={passFields}
          btnComp={
            <button type="submit" className="general_btn fix_btn btn_2">
              Cambiar contraseña
            </button>
          }
          formClass="card_form"
        />
      ) : null}
      <UserInfoDiv
        label="Borrar cuenta"
        btn_class="delete_btn"
        DB={deleteUser}
      />
    </div>
  );
};

export default UserInfo;
