import { Dispatch } from "react";
import { Action } from "redux";
import { setEventData } from "../actions/event_actions/actions";
import { User, FireEvent } from "../../interfaces/state";
import { clearUserCred } from "../actions/user_actions/user_actions";

/*
export const setData = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      let evenArr: any = [];
      const data = await db.collection("events").get();
      data.forEach((doc) => evenArr.push(doc.data()));
      dispatch(setEventData(evenArr));
    } catch (err) {
      console.log(err);
    }
  };
};

export const SingleEventFiresore = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      let eventObj: any = undefined;
      const data = await db
        .collection("events")
        .where("event_id", "==", id)
        .get();
      data.forEach((doc) => (eventObj = { ...doc.data() }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const postEvent = (event: FireEvent) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await db.collection("events").add(event);
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerUser = (user: User) => {
  const email = user.user_email;
  const password = user.user_password;
  return async (dispatch: Dispatch<Action>) => {
    await auth.createUserWithEmailAndPassword(email, password);
    await db.collection("users").add(user);
    //await db.
    //const user = auth.currentUser;
    /*if (user !== null) {
      user.sendEmailVerification();
    }
    dispatch(clearUserCred());
  };
};

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        console.log("Using this route");
        const user = auth.currentUser;
        await dispatch(setUserCred(user.email));
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auht/user-not-found":
            dispatch(setErrors(err));
            break;

          case "auth/wrong-password":
            dispatch(setErrors(err));
            break;
        }
      });
  };
};

export const logUserOur = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await auth.signOut();
      dispatch(clearUserCred());
    } catch (err) {
      console.log(err);
    }
  };
};
*/
