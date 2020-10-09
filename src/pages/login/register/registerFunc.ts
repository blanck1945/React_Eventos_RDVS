import { Visitor, Promotor } from "../../../interfaces/state";

export const checkPassword = (user: Promotor | Visitor, role: string) => {
  if (user.password !== user.confirm_password) {
    return {
      check: false,
    };
  }
  return {
    user: formatAndCleanUser(user, role),
    check: true,
  };
};

export const formatAndCleanUser = (user: Promotor | Visitor, role: string) => {
  //const newUser = cleanUser(user);
  return {
    ...cleanUser(user, role),
    user_role: role,
  };
};

export const cleanUser = (user: Promotor | Visitor, role: string) => {
  delete user.confirm_password;
  if (role === "usuario") {
    user.promotor_code = 1234;
  }
  console.log(user);
  return user;
};
